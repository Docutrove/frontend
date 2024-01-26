import InvoiceDetails from "../../ui/invoiceDetails";
import BaseButton from "../../ui/button";

export default function ConfirmTemplate() {
  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title="Template name"
      back_button
      document_text="Template One"
    >
      <p className="text--sm confirm-text">
        Your registration document is complete, we recommend that you preview
        your document to ensure all the details are correct.
      </p>
      <div className="confirm-buttons">
        <BaseButton variant="inverted" href="/coming">
          Edit information
        </BaseButton>
        <BaseButton variant="primary" href="/coming">
          Proceed to payment
        </BaseButton>
      </div>
    </InvoiceDetails>
  );
}
