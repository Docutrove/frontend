import { useState } from "react";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import { Icon } from "../../ui/Icon";
import "./index.scss";
import NavBar from "../navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";
import regex from "../../../../utils/regex";
import useForm from "../../../hooks/useForm";
import * as Yup from "yup";
import useRequest from "../../../hooks/useRequest";
import { login } from "../../../../api/auth";
import { useAuthContext } from "../../../context/authContext";

export default function Login() {
  const [click, setClick] = useState(false);
  const { makeRequest, isLoading } = useRequest(login);
  const { setToken } = useAuthContext();
  // const [checked, setChecked] = useState(true);

  const toggle = () => {
    setClick((prev) => !prev);
  };

  const { handleSubmit, getFieldProps, values } = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email Address is required")
        .matches(regex.email, "Invalid Email"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (data) => {
      const [res, err] = await makeRequest(data);
      if (err) return; // display error with toast
      setToken(res.token);
      if (values.rememberMe) {
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
      } else {
        localStorage.setItem("email", "");
        localStorage.setItem("password", "");
      }
    },
  });

  return (
    <div className="login bg-gradient">
      <NavBar />
      <div className="app-container">
        <div className="login__content">
          <h3>Log in to your account</h3>
          <p className="text--xs login__content__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form className="login__content__form" onSubmit={handleSubmit}>
            <div className="login__content__form__inputs">
              <BaseInput
                label="Email address"
                placeholder="Andrew.Smith@instinctif.com"
                {...getFieldProps("email")}
              />
              <div className="password-text">
                <BaseInput
                  label="Password"
                  type={click ? "text" : "password"}
                  placeholder="****************"
                  {...getFieldProps("password")}
                />

                <button type="button" onClick={toggle} className="eye">
                  <Icon name={`${click ? "eye-closed" : "eye-closed"}`} />
                </button>
              </div>

              <div className="remember">
                <label>
                  <input
                    type="checkbox"
                    {...getFieldProps("rememberMe")}
                    checked={values.rememberMe}
                  />
                  <span
                    className={`check ${values.rememberMe ? "active" : ""}`}
                  >
                    <Icon name="tick" className="check-tick" />
                  </span>
                </label>
                <p className="text--xs">Remember me</p>
              </div>
            </div>
            <div>
              <BaseButton
                variant="primary"
                className="login__content__button"
                isLoading={isLoading}
                disabled={isLoading}
              >
                Sign in
              </BaseButton>
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
            </div>
          </form>

          <div className="forget-password">
            <p className="text--2xs">Forgotten your password?</p>
            <p className="text--2xs">
              {" "}
              <span>Not registered?</span>{" "}
              <Link to="/signup">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
