import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";

interface SearchLawyerProps {
  goNext: () => void;
  goBack: () => void;
}

export default function SearchLawyer({ goNext, goBack }: SearchLawyerProps) {
  return (
    <div className="about-you">
      <h2 className="gradient-title">Let’s find a person that suits</h2>
      <div className="about-you__form search-inputs">
        <BaseInput label="Subject" placeholder="Lorem ipsum" />
        <BaseInput label="Last name" placeholder="Smith" />
      </div>

      <div className="about-you__buttons">
        <button className="invoice-back-button" onClick={goBack}>
          <div className="back-button">
            <Icon name="caret-right" className="back-icon" />
          </div>
          <p className="text--xs">Back</p>
        </button>
        <BaseButton variant="primary" onClick={goNext}>
          Next
        </BaseButton>
      </div>
    </div>
  );
}
