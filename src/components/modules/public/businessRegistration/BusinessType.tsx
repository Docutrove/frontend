import { useBusinessRegistrationContext } from ".";
import GradientLayout from "../../ui/gradientLayout";

export default function BusinessType() {
  const { goNext } = useBusinessRegistrationContext();
  return (
    <GradientLayout arrow>
      <div className="choose-document-type">
        <p className="gradient-subtitle text--sm">Register a business</p>
        <h2 className="gradient-title">
          What kind of registration would you like to initiate?
        </h2>
        <div className="options-grid">
          <div className="option" onClick={goNext}>
            <p>Business name Reservation</p>
          </div>
          <div className="option">
            <p>Business Name Registration</p>
          </div>
          <div className="option">
            <p>Company Registration</p>
          </div>
        </div>
      </div>
    </GradientLayout>
  );
}
