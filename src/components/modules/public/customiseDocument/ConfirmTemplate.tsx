import { useCustomiseDocContext } from ".";
import InvoiceDetails from "../../ui/invoiceDetails";
import BaseButton from "../../ui/button";

export default function ConfirmTemplate() {
  const { goBack, goNext, template } = useCustomiseDocContext();
  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title={template?.name}
      document_text={template?.configuration.previewHtml}
    >
      <p className="text--sm confirm-text">
        Your document is complete, we recommend that you preview
        your document to ensure all the details are correct.
      </p>
      <div className="confirm-buttons">
        <BaseButton variant="inverted" onClick={goBack}>
          Edit information
        </BaseButton>
        <BaseButton variant="primary" onClick={goNext}>
          Proceed to payment
        </BaseButton>
      </div>
    </InvoiceDetails>
  );
}
