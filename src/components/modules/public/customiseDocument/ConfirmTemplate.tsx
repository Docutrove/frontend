import { useCustomiseDocContext } from '.'
import InvoiceDetails from '../../ui/invoiceDetails'
import BaseButton from '../../ui/button'
import { useState, useEffect } from 'react'
import { replaceDynamicSectionsInPreview } from '../../../../utils/replaceDynamicSections' // Import the utility function

export default function ConfirmTemplate() {
  const { goBack, goNext, template } = useCustomiseDocContext()
  const [documentText, setDocumentText] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    const storedHtml = localStorage.getItem('processedCompleteHtml')
    if (storedHtml) {
      setDocumentText(replaceDynamicSectionsInPreview(storedHtml)) // Use the utility function
    } else {
      const previewHtml = template?.configuration.previewHtml || ''
      setDocumentText(replaceDynamicSectionsInPreview(previewHtml)) // Use the utility function
    }
  }, [template])

  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title={template?.name}
      document_text={documentText}
    >
      <p className="text--sm confirm-text">
        Your document is complete, we recommend that you preview your document
        to ensure all the details are correct.
      </p>
      <div className="confirm-buttons">
        <BaseButton
          variant="inverted"
          className="confirm-button"
          onClick={goBack}
        >
          Edit information
        </BaseButton>
        <BaseButton
          variant="primary"
          className="confirm-button"
          onClick={goNext}
        >
          Proceed to payment
        </BaseButton>
      </div>
    </InvoiceDetails>
  )
}
