import { Link } from "react-router-dom";
import { useCustomiseDocContext } from ".";
import BaseButton from "../../ui/button";
import InvoiceDetails from "../../ui/invoiceDetails";

export default function TemplateInvoice() {
  const { goBack, goNext } = useCustomiseDocContext();
  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title="Template name"
      back_button
      document_text="Template One"
      backClick={goBack}
    >
      <h5 className="invoice-price">Price: ₦0,000.00</h5>
      <p className="text--sm">
        Description of the template and what it’s used for lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </p>
      <div className="privacy-info">
        <p className="privacy-info__title text--2xs">
          We value your privacy and information
        </p>
        <p className="privacy-info__description text--2xs">
          Description of the template and what it’s used for lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
          interdum, ac aliquet odio mattis. View our{" "}
          <Link to="/coming" className="underline">Privacy and Information Policy.</Link>
        </p>
      </div>
      <BaseButton variant="primary" onClick={goNext}>
        Customize a document
      </BaseButton>
    </InvoiceDetails>
  );
}
