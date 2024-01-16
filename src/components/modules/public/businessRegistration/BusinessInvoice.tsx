import { Link } from "react-router-dom";
import { useBusinessRegistrationContext } from ".";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import NavBar from "../navbar";

export default function BusinessInvoice() {
  const { goBack } = useBusinessRegistrationContext();
  return (
    <>
      <NavBar hasBorder />
      <div className="invoice-details">
        <div className="invoice-details__content">
          <div className="invoice-details__text">
            <p className="invoice-subtitle gradient-subtitle">
              Register a business
            </p>
            <button className="invoice-back-button" onClick={goBack}>
              <div className="back-button">
                <Icon name="caret-right" className="back-icon" />
              </div>
              <p className="text--xs">All business registration templates</p>
            </button>
            <div className="invoice-description">
              <h2>Registration name</h2>
              <h5 className="invoice-price">Price: ₦0,000.00</h5>
              <p className="text--sm">
                Description of the template and what it’s used for lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="how-lists">
                <h6 className="how-lists__title">
                  How business registration works:
                </h6>
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
                    <p className="text--xs">
                      Nunc vulputate libero et velit interdum
                    </p>
                  </div>
                  <div className="lists__list">
                    <div className="tick-icon--gradient">
                      <p className="text--2xs">3</p>
                    </div>
                    <p className="text--xs">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.{" "}
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
                  Description of the template and what it’s used for lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                  libero et velit interdum, ac aliquet odio mattis. View our{" "}
                  <Link to="/coming">Privacy and Information Policy.</Link>
                </p>
              </div>
              <BaseButton variant="primary" href="/coming">
                Begin registration
              </BaseButton>
            </div>
          </div>
          <div className="template-container">
            <div className="template-image">
              <p className="text--sm template-image__text">
                Document updates as you complete the fields on the left
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
