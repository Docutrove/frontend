import React, { useState, useEffect } from 'react'
import { Icon } from '../../ui/Icon'
import BaseButton from '../../ui/button'
import { useCustomiseDocContext } from '.'
import BaseInput from '../../ui/input'
import ProgressBar from '../../ui/ProgressBar'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'

interface Question {
  label: string
  example: string
  name: string
  type: string
  options?: string[]
  required: boolean
  isConfig?: boolean
  questions?: { [key: string]: Question[] }
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
    console.log(formData[name])
    if (!formData[name]) {
      // Check if the field is empty (Falsy values include empty strings, null, undefined, 0, false)
      toast.error('Please fill in the required fields') // Display an error message if the field is empty
      return
    }

    if (multiInsertValue.trim() !== '') {
      // If the multi-insert field is not empty, add the value to the form data
      setMultiInsertValue('')
    }
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

  const handleMultiInsertChange = (field: string, value: string) => {
    setMultiInsertValue(value)
    const values = value
      .split(',')
      .map((v) => v.trim())
      .filter((v) => v !== '')
    handleChange(field, values)
    //setMultiInsertValue('') // Clear the input field after updating the form data
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
      console.log('newValues', newValues)
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

  //console.log(name)
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
                  const formattedDate = date.toLocaleDateString('en-GB')
                  handleChange(name, formattedDate)
                }
              }}
              value={formData[name] as string}
              dateFormat="dd-MM-yyyy"
              className="text--xs"
              placeholderText="Select a date"
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
                //         value={(formData[name] as string) || ''}
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
