import React, { useState, useEffect } from 'react'
import { Icon } from '../../ui/Icon'
import BaseButton from '../../ui/button'
import { useCustomiseDocContext } from '.'
import BaseInput from '../../ui/input'
import ProgressBar from '../../ui/ProgressBar'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'
import { debounce } from 'lodash'

interface Question {
  label: string
  example: string
  name: string
  type: string
  options?: string[]
  required: boolean
  isConfig?: boolean
  questions?: { [key: string]: Question[] }
  action?: {
    name: string
    value: string
  }
}

interface FormProps {
  questions: Question[]
  formData: { [key: string]: string | string[] }
  handleChange: (field: string, value: string | string[]) => void
  handleSubmit: () => void
}

const QuestionForm: React.FC<FormProps> = ({
  questions,
  formData,
  handleChange,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [currentQuestions, setCurrentQuestions] =
    useState<Question[]>(questions)
  const { setTemplateData } = useCustomiseDocContext()
  const [multiInsertValue, setMultiInsertValue] = useState('')
  const [rawNumberInputs, setRawNumberInputs] = useState<{
    [key: string]: string
  }>({})

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData')
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData)
      Object.keys(parsedData).forEach((key) =>
        handleChange(key, parsedData[key])
      )
    }
  }, [questions])

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  useEffect(() => {
    const updateQuestions = () => {
      let updatedQuestions: Question[] = []
      let shouldUpdate = false

      questions.forEach((question) => {
        updatedQuestions.push(question)
        if (question.isConfig && formData[question.name]) {
          const configValue = formData[question.name] as string
          const nestedQuestions = question.questions?.[configValue] || []
          updatedQuestions = [...updatedQuestions, ...nestedQuestions]
          shouldUpdate = true
        }
      })

      if (shouldUpdate) {
        setCurrentQuestions(updatedQuestions)
      }
    }

    updateQuestions()
  }, [formData, questions])

  const nextStep = () => {
    if (!formData[name]) {
      toast.error('This Field is required')
      return
    }

    if (multiInsertValue.trim() !== '') {
      setMultiInsertValue('')
    }
    setCurrentStep((prevStep) =>
      Math.min(prevStep + 1, currentQuestions.length - 1)
    )
  }

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0))
  }

  const handleNumberInputChange = debounce((field: string, value: string) => {
    const question = questions.find((q) => q.name === field)
    if (question && question.action && question.action.name === 'multiply') {
      const multiplier = parseFloat(question.action.value)
      const numericValue = parseFloat(value)
      if (!isNaN(multiplier) && !isNaN(numericValue)) {
        const result = (numericValue * multiplier).toString()
        handleChange(field, result)
      } else {
        handleChange(field, value)
      }
    } else {
      handleChange(field, value)
    }
  }, 500)

  const handleRawNumberInputChange = (field: string, value: string) => {
    setRawNumberInputs((prev) => ({ ...prev, [field]: value }))
    handleNumberInputChange(field, value)
  }

  const handleMultiSelectChange = (
    field: string,
    selectedOptions: HTMLSelectElement
  ) => {
    const values = Array.from(
      selectedOptions.selectedOptions,
      (option) => option.value
    )
    handleChange(field, values)
  }

  const handleMultiInsertChange = (field: string, value: string) => {
    setMultiInsertValue(value)
    const values = value
      .split(',')
      .map((v) => v.trim())
      .filter((v) => v !== '')
    handleChange(field, values)
  }

  const handleMultiInsertKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    if (e.key === 'Enter' && multiInsertValue.trim() !== '') {
      e.preventDefault()
      const newValues = [
        ...((formData[field] as string[]) || []),
        multiInsertValue.trim(),
      ]
      handleChange(field, newValues)
      setMultiInsertValue('')
    }
  }

  const removeMultiInsertValue = (field: string, valueToRemove: string) => {
    const newValues = (formData[field] as string[]).filter(
      (v) => v !== valueToRemove
    )
    handleChange(field, newValues)
  }

  const formatDateInWords = (date: Date): string => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()

    const getDaySuffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th'
      switch (day % 10) {
        case 1:
          return 'st'
        case 2:
          return 'nd'
        case 3:
          return 'rd'
        default:
          return 'th'
      }
    }

    return `${day}${getDaySuffix(day)} ${month} ${year}`
  }

  const currentQuestion = currentQuestions[currentStep]
  if (!currentQuestion) return null

  const { label, example, name, options, type } = currentQuestion

  return (
    <>
      <ProgressBar
        currentStep={currentStep}
        totalQuestions={currentQuestions.length}
      />
      <div className="document-details">
        <div className="document-details__input">
          <label className="label">{label}</label>
          {type === 'text' && (
            <BaseInput
              className="text--xs"
              type="text"
              required
              placeholder={example}
              value={(formData[name] as string) || ''}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          )}
          {type === 'number' && (
            <BaseInput
              className="text--xs"
              type="number"
              required
              placeholder={example}
              value={rawNumberInputs[name] || (formData[name] as string) || ''}
              onChange={(e) => handleRawNumberInputChange(name, e.target.value)}
            />
          )}
          {type === 'date' && (
            <ReactDatePicker
              selected={
                typeof formData[name] === 'string' &&
                !isNaN(Date.parse(formData[name] as string))
                  ? new Date(formData[name] as string)
                  : null
              }
              onChange={(date: Date | null) => {
                if (date) {
                  const formattedDateInWords = formatDateInWords(date)
                  handleChange(name, formattedDateInWords)
                }
              }}
              value={formData[name] as string}
              dateFormat="dd-MM-yyyy"
              className="text--xs"
              placeholderText="Select a date"
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
            />
          )}
          {type === 'textarea' && (
            <textarea
              className="text--xs"
              value={(formData[name] as string) || ''}
              required
              placeholder={example}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          )}
          {type === 'email' && (
            <BaseInput
              type="email"
              required
              placeholder={example}
              name={name}
              className="text--xs"
              value={(formData[name] as string) || ''}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          )}
          {type === 'dropdown' && (
            <select
              className="text--xs"
              required
              value={(formData[name] as string) || ''}
              onChange={(e) => handleChange(name, e.target.value)}
            >
              <option value="">Select an option</option>
              {options?.map((option: string, index: number) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {type === 'radio' && (
            <div className="document-check">
              {options?.map((option: string, index: number) => (
                <label key={index}>
                  <input
                    type="radio"
                    required
                    name={name}
                    value={option}
                    checked={formData[name] === option}
                    onChange={(e) => handleChange(name, e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
          {type === 'select' && (
            <select
              multiple
              className="text--xs"
              value={(formData[name] as string[]) || []}
              onChange={(e) => handleMultiSelectChange(name, e.target)}
            >
              {options?.map((option: string, index: number) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {type === 'multi-insert' && (
            <div className="document-details__multi-insert">
              <BaseInput
                type="text"
                required
                placeholder="Enter values separated by commas e.g value1, value2"
                value={(multiInsertValue as string) || ''}
                onChange={(e) => handleMultiInsertChange(name, e.target.value)}
                onKeyDown={(e) => handleMultiInsertKeyDown(e, name)}
                className="text--xs"
              />
              <div className="document-details__multi-insert-tags">
                {Array.isArray(formData[name]) &&
                  (formData[name] as string[])?.map((value, index) => (
                    <div
                      key={index}
                      className="document-details__multi-insert-tag"
                    >
                      {value}
                      <button
                        type="button"
                        onClick={() => removeMultiInsertValue(name, value)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        <div className="direction-buttons">
          <button className="invoice-back-button" onClick={prevStep}>
            <div className="back-button">
              <Icon name="caret-right" className="back-icon" />
            </div>
            <p className="text--xs">Back</p>
          </button>

          {currentStep < currentQuestions.length - 1 ? (
            <BaseButton variant="primary" onClick={nextStep}>
              Next
            </BaseButton>
          ) : (
            <BaseButton
              variant="primary"
              onClick={() => setTemplateData(formData)}
            >
              Finish
            </BaseButton>
          )}
        </div>
      </div>
    </>
  )
}

export default QuestionForm
