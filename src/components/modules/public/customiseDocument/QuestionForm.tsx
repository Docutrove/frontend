import React, { useState, useEffect } from 'react'
import { Icon } from '../../ui/Icon'
import BaseButton from '../../ui/button'
import { useCustomiseDocContext } from '.'
import BaseInput from '../../ui/input'
import ProgressBar from '../../ui/ProgressBar'
//import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datetime/css/react-datetime.css'

interface Question {
  label: string
  example: string
  name: string
  format: string
  type: string
  required: boolean
  options?: string[]
  isConfig?: boolean
  questions?: { [key: string]: Question[] }
}

interface FormProps {
  questions: Question[]
  formData: { [key: string]: string | string[] | Date }
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
    setCurrentStep((prevStep) =>
      Math.min(prevStep + 1, currentQuestions.length - 1)
    )
  }

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0))
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

  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString)
  //   const day = String(date.getDate()).padStart(2, '0')
  //   const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-indexed
  //   const year = date.getFullYear()
  //   return `${day}-${month}-${year}`
  // }

  // const toInputDateFormat = (dateString: string) => {
  //   if (!dateString) return ''
  //   const parts = dateString.split('-')
  //   if (parts.length === 3) {
  //     if (parts[0].length === 4) {
  //       // If already in yyyy-MM-dd format
  //       return dateString
  //     } else {
  //       // If in dd-MM-yyyy format, convert to yyyy-MM-dd
  //       const [day, month, year] = parts
  //       return `${year}-${month}-${day}`
  //     }
  //   }
  //   return ''
  // }

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
              value={(formData[name] as string) || ''}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          )}

          {/* {type === 'date' && (
                  <ReactDatePicker
                    selected={
                      typeof formData[name] === 'string' &&
                      !isNaN(Date.parse(formData[name]))
                        ? new Date(formData[name])
                        : null
                    }
                    onChange={(date: Date | null) => {
                      if (date) {
                        const formattedDate = date.toLocaleDateString('en-GB')
                        handleChange(name, formattedDate)
                      }
                    }}
                    dateFormat="dd-MM-yyyy"
                    className="text--xs"
                    //  placeholderText="Select a date"
                    placeholderText={example}
                  />
                )} */}

          {/*using reactdatetime */}
          {/* 
          {type === 'date' && (
            <BaseInput
              className="text--xs"
              type="date"
              value={formData[name] as string}
              onChange={(e) => handleChange(name, formatDate(e.target.value))}
            />
          )} */}

          {type === 'date' && (
            <BaseInput
              className="text--xs"
              type="date"
              required
              value={(formData[name] as string) || ''}
              onChange={(e) => handleChange(name, e.target.value)}
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
            <div className="document-details__select">
              <select
                multiple
                required
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
            </div>
          )}
          {type === 'multi-insert' && (
            <div className="document-details__multi-insert">
              <BaseInput
                type="text"
                required
                value={multiInsertValue}
                onChange={(e) => handleMultiInsertChange(name, e.target.value)}
                onKeyDown={(e) => handleMultiInsertKeyDown(e, name)}
                placeholder="Enter comma separated values e.g value1, value2"
                className="text--xs"
              />
              <div className="document-details__multi-insert-tags">
                {((formData[name] as string[]) || [])?.map((value, index) => (
                  <div
                    key={index}
                    className="document-details__multi-insert-tag"
                  >
                    {value}
                    <button
                      type="button"
                      className="document-details__multi-insert-tag-remove"
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
              Next
            </BaseButton>
          )}
        </div>
      </div>
    </>
  )
}

export default QuestionForm
