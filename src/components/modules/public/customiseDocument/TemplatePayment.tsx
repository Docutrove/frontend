import { useCustomiseDocContext } from ".";
import Footer from "../footer";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import NavBar from "../navbar";

export default function TemplatePayment() {
  const { goBack, goNext } = useCustomiseDocContext();
  return (
    <div className="payment bg-gradient">
      <NavBar />
      <div className="app-container">
        <div className="login__content">
          <h3>Payment</h3>
          <p className="text--xs payment__description">
            -
          </p>

          <div className="payment__order">
            <h6>Order Summary</h6>
            <div className="payment-delete">
              <Icon name="delete" />
              <p>Remove</p>
            </div>
            <div className="payment__order__summary">
              <div className="payment__order__summary__title">
                <Icon name="document" />
                <p className="text--2xs">Template Customization Fee</p>
              </div>

              <h6 className="payment-price text--sm">₦10,000.00</h6>
            </div>
            <div className="payment__order__summary">
              <div className="payment__order__summary__title">
                <Icon name="document" />
                <p className="text--2xs">Processing Fee</p>
              </div>

              <h6 className="payment-price text--sm">₦5,000.00</h6>
            </div>

            <div className="payment__method">
              <div className="payment__order__summary">
                <div className="payment__order__summary__title">
                  <h6 className="text--4xs">Total</h6>
                </div>

                <h6 className="payment-price text--sm">₦15,000.00</h6>
              </div>
            </div>
          </div>

          <div>
            <BaseButton variant="primary" className="login__content__button" onClick={goNext}>
              Pay now
            </BaseButton>
            <p className="text--2xs login__content__border">or</p>
            <div className="login__content__socials">
              <BaseButton
                variant="inverted"
                className="login__content__socials__button"
                onClick={goBack}
              >
                {" "}
                Go Back
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
