import { Link } from "react-router-dom";
import BaseButton from "../../ui/button";
import GradientLayout from "../../ui/gradientLayout";
import { useBookConsultationContext } from ".";

export default function ConsultationIntro() {
  const { goNext } = useBookConsultationContext();
  return (
    <GradientLayout arrow>
      <div className="consultation-intro">
        <p className="gradient-subtitle text--sm">Consult with a lawyer</p>
        <h2 className="gradient-title">Helpful advice, when you need it</h2>
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
          onClick={goNext}
        >
          Make a booking
        </BaseButton>
      </div>
    </GradientLayout>
  );
}
