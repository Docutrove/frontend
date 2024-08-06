import { useCustomiseDocContext } from '.'
import InvoiceDetails from '../../ui/invoiceDetails'
import { useEffect, useState, useMemo } from 'react'
import ContactSection from '../../ui/ContactSection'
import QuestionForm from './QuestionForm'
import './index.scss'
import useRequest from '../../../hooks/useRequest'
import { getTemplate } from '../../../../api/templates'
import toast from 'react-hot-toast'

interface TemplateModule {
  name: string
  label: string
  dropDownOptions: string[]
  isDropDown: boolean
}

interface DynamicObject {
  [key: string]: any
}

export default function TemplateDetails() {
  const { goBack, template, templateId } = useCustomiseDocContext()
  const { makeRequest } = useRequest(getTemplate, templateId)
  const [, setData] = useState<DynamicObject>()
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(1)
  const [, setNPages] = useState(1)

  const [formData, setFormData] = useState<{
    [key: string]: string | string[]
  }>({})
  const [questions, setQuestions] = useState<any[]>([])
  const [templateHtml, setTemplateHtml] = useState<string>('')
  const [completeTemplateHtml, setCompleteTemplateHtml] = useState<string>('')
  const [, setIsLoaded] = useState<boolean>(false)

  const templateRequestData = template?.configuration.formConfig.modules
  const initialValues = templateRequestData?.reduce(
    (values: { [key: string]: string }, field) => {
      values[field.name] = ''
      return values
    },
    {}
  )

  const [localTemplate, setLocalTemplate] = useState<{
    name: string
    price: number
    description: string
    faqs?: any[]
    configuration: {
      fields: []
      formConfig: {
        modules: TemplateModule[]
      }
      previewHtml: string
      html: string
    }
  }>()

  const getTemplateLocal = async () => {
    const [thisTemplate, err] = await makeRequest()

    if (err) {
      toast.error(err.message)
    }
    setLocalTemplate(thisTemplate?.data)
  }

  useEffect(() => {
    getTemplateLocal()
  }, [templateId])

  useEffect(() => {
    if (localTemplate) {
      const fields = localTemplate.configuration.formConfig.modules
      const html = localTemplate.configuration.previewHtml //changed this from previewHtml
      const completeHtml = localTemplate.configuration.html

      const initialFormData: { [key: string]: string | string[] } = {}
      fields.forEach((field: any) => {
        if (field.isConfig) {
          initialFormData[field.name] = field.defaultValue
        } else {
          initialFormData[field.name] = ''
        }
      })

      setQuestions(fields)
      setFormData(initialFormData)
      setTemplateHtml(html)
      setCompleteTemplateHtml(completeHtml)
      setIsLoaded(true)
    }
  }, [localTemplate])

  const getNPages = () => {
    if (templateRequestData?.length) {
      setNPages(Math.ceil(templateRequestData?.length / recordsPerPage))
    }
  }

  const processedTemplate = useMemo(() => {
    let processedHtml = templateHtml

    const getNestedQuestions = (configName: string, configValue: string) => {
      const configQuestion = questions.find(
        (q) => q.name === configName && q.isConfig
      )
      return configQuestion?.questions?.[configValue] || []
    }

    const replaceDynamicSections = (html: string): string => {
      try {
        return html.replace(
          /\s*#Dynamic (.*?)#([\s\S]*?)\\Dynamic\\|#Dynamic (.*?)#\s*/g,
          (_, condition1, content1, condition2) => {
            const condition = condition1 || condition2
            const content = content1 || ''

            const [key, value] = condition
              .split('=')
              .map((str: string) => str.trim())
            const formDataValue = formData[key]

            if (formDataValue === value) {
              let processedContent = content

              const nestedQuestions = getNestedQuestions(key, value)
              nestedQuestions.forEach((question: { name: string }) => {
                const placeholderRegex = new RegExp(`{{${question.name}}}`, 'g')
                processedContent = processedContent.replace(
                  placeholderRegex,
                  formData[question.name] || '------'
                )
              })

              return replaceDynamicSections(processedContent)
            }

            return ''
          }
        )
      } catch (error) {
        console.error('Error in replaceDynamicSections:', error)
        return ''
      }
    }

    processedHtml = replaceDynamicSections(processedHtml)

    processedHtml = processedHtml.replace(
      /{{#each (.*?)}}([\s\S]*?){{\/each}}/g, // Handle List for multi-insert input Fields
      (_match, key, content) => {
        const values = formData[key.trim()]
        if (Array.isArray(values)) {
          return `<ol>${values
            .map((value) => `<li>${value}</li>`)
            .join('')}</ol>`
        }
        return content || '------'
      }
    )

    processedHtml = processedHtml.replace(/{{(.*?)}}/g, (_match, key) => {
      const value = formData[key.trim()]
      if (Array.isArray(value)) {
        return value.join(', ') || '------'
      }
      return value || '------'
    })

    let processedCompleteHtml = completeTemplateHtml

    processedCompleteHtml = processedCompleteHtml.replace(
      /{{(.*?)}}/g,
      (_match, key) => {
        const value = formData[key.trim()]
        if (Array.isArray(value)) {
          return value.join(', ') || '------'
        }
        return value || '------'
      }
    )

    localStorage.setItem('processedCompleteHtml', processedCompleteHtml)

    return processedHtml
  }, [formData, templateHtml, questions])

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }))
  }

  const handleSubmit = () => {
    // console.log('Form submitted:', formData);
  }

  useEffect(() => {
    setData(initialValues)
    getNPages()
  }, [])

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <InvoiceDetails
      back_button
      backClick={currentPage === 1 ? goBack : goToPrevPage}
      document_text={processedTemplate}
      backgroundColor="#F9F9F9"
      hideBackButton
    >
      <div className="document-details">
        <QuestionForm
          questions={questions}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <div>{<ContactSection faqs={localTemplate?.faqs ?? []} />}</div>
      <div></div>
    </InvoiceDetails>
  )
}
