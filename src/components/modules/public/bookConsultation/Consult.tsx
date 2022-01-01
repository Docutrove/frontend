import GradientLayout from "../../ui/gradientLayout";
import { useState } from "react";
import { Icon } from "../../ui/Icon";
import AboutYou from "./AboutYou";
import Needs from "./Needs";
import SearchLawyer from "./SearchLawyer";
import BookLawyer from "./BookLawyer";

export default function Consult() {
  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete] = useState(false);

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
        {currentStep === 4 && <BookLawyer />}
      </div>
    </GradientLayout>
  );
}
