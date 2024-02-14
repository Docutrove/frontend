import { useCustomiseDocContext } from ".";
import GradientLayout from "../../ui/gradientLayout";

export default function ChooseDocumentType() {
    const {goNext} = useCustomiseDocContext()
  return (
    <GradientLayout arrow>
      <div className="choose-document-type">
        <p className="gradient-subtitle text--sm">
          Customize and download a legal document
        </p>
        <h2 className="gradient-title">
          What type of legal document would you like to create?
        </h2>
        <div className="options-grid">
          <div className="option" onClick={goNext}>
            <p className="text--sm">Tech / Startup agreements</p>
          </div>
          <div className="option">
            <p className="text--sm">Loan agreements</p>
          </div>
          <div className="option">
            <p className="text--sm">General commercial contracts</p>
          </div>
          <div className="option">
            <p className="text--sm">Real Estate / Property contracts</p>
          </div>
          <div className="option">
            <p className="text--sm">Labour and Employment</p>
          </div>
        </div>
      </div>
    </GradientLayout>
  );
}
