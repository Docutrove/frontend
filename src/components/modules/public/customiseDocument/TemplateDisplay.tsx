import React, { useMemo } from 'react'

interface TemplateDisplayProps {
  formData: { [key: string]: string | string[] }
  templateHtml: string
  questions: any[] // Add this to get information about nested questions
}

const TemplateDisplay: React.FC<TemplateDisplayProps> = ({
  formData,
  templateHtml,
  questions,
}) => {
  const processedTemplate = useMemo(() => {
    let processedHtml = templateHtml

    // Function to get nested questions for a given config question
    const getNestedQuestions = (configName: string, configValue: string) => {
      const configQuestion = questions.find(
        (q) => q.name === configName && q.isConfig
      )
      return configQuestion?.questions?.[configValue] || []
    }

    // Function to replace dynamic sections
    const replaceDynamicSections = (html: string): string => {
      try {
        return html.replace(
          /#Dynamic (.*?)#([\s\S]*?)\\Dynamic\\/g,
          (match, condition, content) => {
            console.log('Match:', match)
            console.log('Condition:', condition)
            console.log('Content:', content)

            const [key, value] = condition
              .split('=')
              .map((str: string) => str.trim())

            const formDataValue =
              typeof formData[key] === 'string'
                ? formData[key].trim()
                : formData[key]

            console.log('Key:', key)
            console.log('Value:', value)
            console.log('formData[key]:', formDataValue)

            if (formDataValue === value) {
              console.log('Matching value of chakachak', formData)
              let processedContent = content

              // Handle nested questions
              const nestedQuestions = getNestedQuestions(key, value)
              nestedQuestions.forEach((question: { name: string | number }) => {
                const placeholderRegex = new RegExp(`{{${question.name}}}`, 'g')
                processedContent = processedContent.replace(
                  placeholderRegex,
                  formData[question.name] || '------'
                )
              })

              console.log('Processed Content:', processedContent)
              return replaceDynamicSections(processedContent)
            }

            return ''
          }
        )
      } catch (error) {
        console.error('Error in replaceDynamicSections:', error)
        return '' // Handle error gracefully
      }
    }

    // Process dynamic sections
    processedHtml = replaceDynamicSections(processedHtml)

    // Replace placeholders with form data
    processedHtml = processedHtml.replace(/{{(.*?)}}/g, (match, key) => {
      const value = formData[key.trim()]
      if (Array.isArray(value)) {
        console.log(value)
        return value.join(', ') || '------'
      }
      return value || '------'
    })

    return processedHtml
  }, [formData, templateHtml, questions])

  return (
    <div
      style={{
        width: '70%',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        overflowY: 'auto',
        maxHeight: '90vh',
      }}
      dangerouslySetInnerHTML={{ __html: processedTemplate }}
    />
  )
}

export default TemplateDisplay
