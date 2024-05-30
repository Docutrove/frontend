import { useCustomiseDocContext } from ".";
import InvoiceDetails from "../../ui/invoiceDetails";
import BaseButton from "../../ui/button";

export default function ConfirmTemplate() {
  const { goBack, goNext } = useCustomiseDocContext();
  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title="Template name"
      document_text="Template One"
    >
      <p className="text--sm confirm-text">
        Your registration document is complete, we recommend that you preview
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
