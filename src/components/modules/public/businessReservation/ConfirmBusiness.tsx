import BaseButton from "../../ui/button";
import InvoiceDetails from "../../ui/invoiceDetails";

export default function ConfirmBusiness() {
  return (
    <InvoiceDetails
      subtitle="Register a business"
      title="Registration name"
      document_text="Document updates as you complete the fields on the left"
    >
      <p className="text--sm confirm-text">
        Your registration document is complete, we recommend that you preview
        your document to ensure all the details are correct.
      </p>
      <div className="confirm-buttons">
        <BaseButton variant="inverted" href="/coming">
          Edit information
        </BaseButton>
        <BaseButton variant="primary" href="/payment">
          Proceed to payment
        </BaseButton>
      </div>
    </InvoiceDetails>
  );
}
