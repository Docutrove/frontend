import { useState } from "react";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Footer from "../footer";
import NavBar from "../navbar";
import { Icon } from "../../ui/Icon";
import { Link } from "react-router-dom";
import "./index.scss";

export default function SignUp() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick((prev) => !prev);
  };
  return (
    <div className="login bg-gradient">
      <NavBar />
      <div className="app-container">
        <div className="login__content">
          <h3>Sign up</h3>
          <p className="text--xs login__content__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="login__content__form">
            <div className="login__content__form__inputs">
              <BaseInput
                label="Email address"
                placeholder="Andrew.Smith@instinctif.com"
              />
              <div className="password-text">
                {click ? (
                  <BaseInput
                    label="Password"
                    type="text"
                    placeholder="****************"
                  />
                ) : (
                  <BaseInput
                    label="Password"
                    type="password"
                    placeholder="****************"
                  />
                )}

                <button type="button" onClick={toggle} className="eye">
                  {click ? (
                    <Icon name="eye-closed" />
                  ) : (
                    <Icon name="eye-closed" />
                  )}
                </button>
              </div>
            </div>

            <p className="text--2xs password-info">
              At least 10 characters must be included.
            </p>
            <p className="text--2xs">
              By signing up, you agree to the{" "}
              <Link to="/coming" className="underline">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link to="/coming" className="underline">
                Privacy Policy.
              </Link>
            </p>

            <BaseButton variant="primary" className="login__content__button">
              Sign up
            </BaseButton>
          </div>

          <p className="text--2xs login__content__border">Or</p>
          <div className="login__content__socials">
            <BaseButton
              variant="inverted"
              className="login__content__socials__button"
            >
              <Icon name="google" />
              Continue with Google
            </BaseButton>
            <BaseButton
              variant="inverted"
              className="login__content__socials__button"
            >
              {" "}
              <Icon name="facebook" /> Continue with Facebook
            </BaseButton>
          </div>
          <div className="privacy">
            <p className="text--2xs">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
            <p className="text--2xs">
              You also agree to receive product-related marketing emails from
              Designership, which you- can unsubscribe from at any time.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
