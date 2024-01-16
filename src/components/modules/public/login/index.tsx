import { useState } from "react";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import { Icon } from "../../ui/Icon";
import "./index.scss";
import NavBar from "../navbar";
import Footer from "../footer";

export default function Login() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick((prev) => !prev);
  };

  return (
    <div className="login bg-gradient">
      <NavBar  />
      <div className="app-container">
        <div className="login__content">
          <h3>Log in to your account</h3>
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

              <div className="remember">
                <div className="remember__checkbox"></div>
                <p className="text--xs">Remember me</p>
              </div>
            </div>

            <BaseButton variant="primary" className="login__content__button">
              Sign in
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
          <div className="forget-password">
            <p className="text--2xs">Forgotten your password?</p>
            <p className="text--2xs">
              {" "}
              <span>Not registered?</span> Create an account
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
