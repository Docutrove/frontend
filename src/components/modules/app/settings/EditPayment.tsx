import Footer from "../../public/footer";
import NavBar from "../../public/navbar";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Radio from "../../ui/radio";
import "./index.scss";

export default function EditPayment() {
  return (
    <div className="edit-payment bg-gradient">
      <NavBar />
      <div className="app_container">
        <div className="login__content">
          <h3>Payment</h3>
          <div className="edit-payment__radios">
            <div className="edit-payment__radios__radio">
              <Radio variant="primary">
                <p>Saved Visa</p>
                <div className="card">
                  <img src="/images/master.png" className="card__type" alt="" />
                  <p>••• 04/14 | 01/28</p>
                </div>
              </Radio>
            </div>
            <div className="edit-payment__radios__radio">
              <Radio variant="primary" isChecked>
                <p>Credit/Debit Cards</p>{" "}
                <p className="text--2xs payment__method__card__name">
                  Pay with your Credit / Debit Card
                </p>
                <img src="/images/card.png" alt="" className="card-image" />
                <div className="card-details">
                  <div>
                    <BaseInput placeholder="Card number">
                      <Icon name="card" />
                    </BaseInput>
                  </div>
                  <div className="card-date">
                    <BaseInput placeholder="Expiration">
                      <Icon name="calendar" />
                    </BaseInput>
                    <BaseInput placeholder="CVC">
                      <Icon name="lock" />
                    </BaseInput>
                  </div>
                </div>
              </Radio>
            </div>
            <div className="edit-payment__radios__radio">
              <Radio variant="primary">
                <p>Paypal</p>
                <Icon name="paypal" />
              </Radio>
            </div>
            <div className="edit-payment__radios__radio">
              <Radio variant="primary">
                <p>Apple Pay</p>
                <Icon name="apple" className="edit-apple" />
              </Radio>
            </div>
          </div>
          <BaseButton className="edit-payment__button" variant="primary">
            Change payment details
          </BaseButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
