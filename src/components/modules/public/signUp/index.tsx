import { useState } from "react";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Footer from "../footer";
import NavBar from "../navbar";
import { Icon } from "../../ui/Icon";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import * as Yup from "yup";
import useForm from "../../../hooks/useForm";
import useRequest from "../../../hooks/useRequest";
import { signup } from "../../../../api/auth";
import regex from "../../../../utils/regex";
import toast from "react-hot-toast";

export default function SignUp() {
  const [click, setClick] = useState(false);
  const { makeRequest, isLoading } = useRequest(signup);
  const navigate = useNavigate();

  const toggle = () => {
    setClick((prev) => !prev);
  };

  const { getFieldProps, handleSubmit } = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Email Address is required")
        .matches(regex.email, "Invalid Email"),
      phone: Yup.string().required("Phone Number is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          regex.password,
          "Password must contain at least 10 characters with at least one of each: uppercase, number and special"
        ),
    }),
    onSubmit: async (data) => {
      const [res, err] = await makeRequest(data);
      if (err) {
        toast.error(err.message);
      } // display error with toast
      if (res) {
        navigate("/login");
      }
    },
  });

  return (
    <div className="login bg-gradient">
      <NavBar />
      <div className="app-container">
        <div className="login__content">
          <h3>Sign up</h3>
          <p className="text--xs login__content__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form className="login__content__form" onSubmit={handleSubmit}>
            <div className="login__content__form__inputs">
              <BaseInput
                label="First name"
                placeholder="Andrew"
                {...getFieldProps("firstName")}
              />
              <BaseInput
                label="Last Name"
                placeholder="Smith"
                {...getFieldProps("lastName")}
              />
              <BaseInput
                label="Email address"
                placeholder="Andrew.Smith@instinctif.com"
                {...getFieldProps("email")}
              />
              <BaseInput
                label="Phone Number"
                placeholder="09099876543"
                type="number"
                {...getFieldProps("phone")}
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
            </div>
            <p className="text--2xs  password-info">
              By signing up, you agree to the{" "}
              <Link to="/coming" className="underline">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link to="/coming" className="underline">
                Privacy Policy.
              </Link>
            </p>

            <BaseButton
              variant="primary"
              className="login__content__button"
              isLoading={isLoading}
              disabled={isLoading}
            >
              Sign up
            </BaseButton>
          </form>

          {/* <p className="text--2xs login__content__border">Or</p>
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
          </div> */}
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
