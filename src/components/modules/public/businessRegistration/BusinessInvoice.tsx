import { Link } from "react-router-dom";
import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button";
import InvoiceDetails from "../../ui/invoiceDetails";

export default function BusinessInvoice() {
  const { goBack, goNext } = useBusinessRegistrationContext();
  return (
    <InvoiceDetails
      subtitle="Register a business"
      title="Registration name"
      back_button
      document_text="Document updates as you complete the fields on the left"
      backClick={goBack}
    >
      <h5 className="invoice-price">Price: ₦0,000.00</h5>
      <p className="text--sm">
        Description of the template and what it’s used for lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </p>
      <div className="how-lists">
        <h6 className="how-lists__title">How business registration works:</h6>
        <div className="lists">
          <div className="lists__list">
            <div className="tick-icon--gradient">
              <p className="text--2xs">1</p>
            </div>
            <p className="text--xs">
              Tortor interdum condimentum nunc molestie quam lectus.
            </p>
          </div>
          <div className="lists__list">
            <div className="tick-icon--gradient">
              <p className="text--2xs">2</p>
            </div>
            <p className="text--xs">Nunc vulputate libero et velit interdum</p>
          </div>
          <div className="lists__list">
            <div className="tick-icon--gradient">
              <p className="text--2xs">3</p>
            </div>
            <p className="text--xs">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.{" "}
            </p>
          </div>
          <div className="lists__list">
            <div className="tick-icon--gradient">
              <p className="text--2xs">4</p>
            </div>
            <p className="text--xs">
              Tortor interdum condimentum nunc molestie quam lectus.
            </p>
          </div>
        </div>
      </div>

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
      <BaseButton variant="primary" className="privacy-info__button" onClick={goNext}>
        Begin registration
      </BaseButton>
    </InvoiceDetails>
  );
}
