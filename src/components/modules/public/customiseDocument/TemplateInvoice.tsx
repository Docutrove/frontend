import { useCustomiseDocContext } from ".";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import NavBar from "../navbar";

export default function TemplateInvoice() {
  const { goBack } = useCustomiseDocContext();
  return (
    <>
      <NavBar variant="border"/>
      <div className="invoice-details">
        <div className="invoice-details__content">
          <div className="invoice-details__text">
            <p className="invoice-subtitle gradient-subtitle">
              Customize and download a legal document
            </p>
            <button className="invoice-back-button" onClick={goBack}>
              <div className="back-button">
                <Icon name="caret-right" className="back-icon" />
              </div>
              <p className="text--xs">All Tech / Startup agreement templates</p>
            </button>
            <div className="invoice-description">
              <h2>Template name</h2>
              <h5 className="invoice-price">Price: ₦0,000.00</h5>
              <p className="text--sm">
                Description of the template and what it’s used for lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="privacy-info">
                <p className="privacy-info__title text--2xs">
                  We value your privacy and information
                </p>
                <p className="privacy-info__description text--2xs">
                  Description of the template and what it’s used for lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                  libero et velit interdum, ac aliquet odio mattis. View our
                  Privacy and Information Policy.
                </p>
              </div>
              <BaseButton variant="primary" href="/coming">
                Customize a document
              </BaseButton>
            </div>
          </div>
          <div className="template-container">
            <div className="template-image">
              <p className="text--sm template-image__text">Template One</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
