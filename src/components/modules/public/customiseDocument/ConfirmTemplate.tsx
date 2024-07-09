import { useCustomiseDocContext } from '.'
import InvoiceDetails from '../../ui/invoiceDetails'
import BaseButton from '../../ui/button'
import { useState, useEffect } from 'react'

export default function ConfirmTemplate() {
  const { goBack, goNext, template } = useCustomiseDocContext()
  const [documentText, setDocumentText] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    const storedHtml = localStorage.getItem('processedHtml')
    if (storedHtml) {
      setDocumentText(storedHtml)
    } else {
      setDocumentText(template?.configuration.previewHtml)
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
