import { useCustomiseDocContext } from ".";
import Footer from "../footer";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import NavBar from "../navbar";
import useRequest from "../../../hooks/useRequest";
import { signup } from "../../../../api/auth";
import { initiatePayment } from "../../../../api/payment";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function TemplatePayment() {
  const { goBack, authData, template, templateData, templateId } = useCustomiseDocContext();
  const { makeRequest: signupRequest } = useRequest(signup, authData);
  const itemID = Number(templateId);
  // const callbackUrl = "https://e719-102-89-47-95.ngrok-free.app/customise/document";
  const callbackUrl = "https://docutrove.vercel.app/customise/document";
  const { makeRequest: paymentRequest } = useRequest(initiatePayment, {itemID, paymentData: templateData, callbackUrl})

  const signUp = async () => {
    const token = localStorage.getItem('AUTH_TOKEN')
    if (token) {
      localStorage.removeItem('AUTH_TOKEN')
    }

    const [resp, err] = await signupRequest();

    if (err) {
      toast.error(err.message);
    }
    localStorage.setItem('AUTH_TOKEN', resp.data.token);
  }

  const initPayment = async () => {
    const [resp, err] = await paymentRequest()
    if (err) {
      toast.error(err.message)
    }
    toast.success('you are being redirected tp payment')
    window.location.href = resp.data.payment_url
  }

  useEffect(() => {
    signUp();
  }, []);

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
                <p className="text--2xs">{template?.name} Customization Fee</p>
              </div>

              <h6 className="payment-price text--sm">₦{ template?.price }</h6>
            </div>

            <div className="payment__method">
              <div className="payment__order__summary">
                <div className="payment__order__summary__title">
                  <h6 className="text--4xs">Total</h6>
                </div>

                <h6 className="payment-price text--sm">₦{ template?.price }</h6>
              </div>
            </div>
          </div>

          <div>
            <BaseButton variant="primary" className="login__content__button" onClick={initPayment}>
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
