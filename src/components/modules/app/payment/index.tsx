import Footer from "../../public/footer";
import NavBar from "../../public/navbar";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Radio from "../../ui/radio";
import "./index.scss";

export default function Payment() {
  return (
    <div className="payment bg-gradient">
      <NavBar />
      <div className="app-container">
        <div className="login__content">
          <h3>Payment</h3>
          <p className="text--xs payment__description">
            Your document will be available to download immediately as soon as
            payment is complete and a copy will be emailed to
            email@addresslorem.com
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
                <p className="text--2xs">Lawyer consultation</p>
              </div>

              <h6 className="payment-price text--sm">₦0,000.00</h6>
            </div>

            <div className="payment__method">
              <h6>Payment Methods</h6>

              <div className="payment__method__card">
                <Radio variant="primary" isChecked>
                  <p>Credit/Debit Cards</p>{" "}
                  <p className="text--2xs payment__method__card__name">
                    Pay with your Credit / Debit Card
                  </p>
                </Radio>
              </div>

              <div className="card-details">
                <div>
                  <BaseInput placeholder="Card number">
                    <img src="/images/card.png" alt="" className="card-image" />
                  </BaseInput>
                </div>
                <div className="card-date">
                  <BaseInput placeholder="Expiration" />
                  <BaseInput placeholder="CVC" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <BaseButton variant="primary" className="login__content__button">
              Pay now
            </BaseButton>
            <p className="text--2xs login__content__border">or</p>
            <div className="login__content__socials">
              <BaseButton
                variant="primary"
                className="login__content__socials__button apple"
              >
                <Icon name="apple" />
              </BaseButton>
              <BaseButton
                variant="inverted"
                className="login__content__socials__button"
              >
                {" "}
                <Icon name="facebook" /> Continue with Facebook
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
