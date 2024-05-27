import GradientLayout from "../../ui/gradientLayout";
import { useNavigate } from "react-router-dom";

export default function BusinessType() {
  const navigate = useNavigate();
  const nameReservation = () => {
    navigate('/business/reservation')
  };
  const businessRegistration = () => {
    navigate('/business/registration')
  };
  const companyRegistration = () => {
    navigate('/business/company/registration')
  };
  return (
    <GradientLayout arrow>
      <div className="choose-document-type">
        <p className="gradient-subtitle text--sm">Register a business</p>
        <h2 className="gradient-title">
          What kind of registration would you like to initiate?
        </h2>
        <div className="options-grid">
          <div className="option" onClick={nameReservation}>
            <p>Business Name Reservation</p>
          </div>
          <div className="option" onClick={businessRegistration}>
            <p>Business Name Registration</p>
          </div>
          <div className="option" onClick={companyRegistration}>
            <p>Company Registration</p>
          </div>
        </div>
      </div>
    </GradientLayout>
  );
}
