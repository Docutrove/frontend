import { useBusinessRegistrationContext } from ".";
import GradientLayout from "../../ui/gradientLayout";

export default function BusinessType() {
  const { goNext } = useBusinessRegistrationContext();
  return (
    <GradientLayout>
      <div className="choose-document-type">
        <p className="gradient-subtitle text--sm">Register a business</p>
        <h2 className="gradient-title">
          What kind of registration would you like to initiate?
        </h2>
        <div className="options-grid">
          <div className="option" onClick={goNext}>
            <p>Business name</p>
          </div>
          <div className="option">
            <p>Incorporated Trustees</p>
          </div>
          <div className="option">
            <p>Company</p>
          </div>
        </div>
      </div>
    </GradientLayout>
  );
}
