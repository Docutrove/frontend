import GradientLayout from "../../ui/gradientLayout";
import { useState } from "react";
import { Icon } from "../../ui/Icon";
import AboutYou from "./AboutYou";
import Needs from "./Needs";
import SearchLawyer from "./SearchLawyer";

export default function Consult() {
  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const goNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <GradientLayout arrow>
      <div className="consultation-intro">
        <p className="gradient-subtitle text--sm">Consult with a lawyer</p>
        <div className="stepper">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === step ? "active" : ""} ${
                step < currentStep || complete ? "complete" : ""
              }`}
            >
              <div className="step">
                {step < currentStep || complete ? (
                  <Icon name="tick" className="step__tick" />
                ) : (
                  step
                )}
              </div>
            </div>
          ))}
        </div>

        {currentStep === 1 && <AboutYou goNext={goNext} goBack={goBack} />}
        {currentStep === 2 && <Needs goNext={goNext} goBack={goBack} />}
        {currentStep === 3 && <SearchLawyer goNext={goNext} goBack={goBack} />}

        {/* <h2 className="gradient-title">Helpful advice, when you need it</h2>
        <div className="consultation-lists">
          <h6 className="consultation-lists__title">How it works</h6>
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
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.{" "}
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
            Description of the template and what it’s used for lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc vulputate libero et
            velit interdum, ac aliquet odio mattis. View our{" "}
            <Link to="/coming" className="underline">
              Privacy and Information Policy.
            </Link>
          </p>
        </div>
        <BaseButton
          variant="primary"
          className="consultation-button"
          onClick={() => {
            setCurrentStep((prev) => prev + 1);
          }}
        >
          Make a booking
        </BaseButton> */}
      </div>
    </GradientLayout>
  );
}
