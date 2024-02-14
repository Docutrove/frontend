import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Select from "../../ui/select";

interface SearchLawyerProps {
  goNext: () => void;
  goBack: () => void;
}

export default function SearchLawyer({ goNext, goBack }: SearchLawyerProps) {
  return (
    <div className="about-you">
      <h2 className="gradient-title">Let’s find a person that suits</h2>
      <div className="about-you__form search-inputs">
        <Select label="Search a practice area" options={["Lorem ipsum"]} />
        <Select label="Search a position" options={["Lorem ipsum"]} />
        <BaseInput
          label="Date of meeting"
          placeholder="DD/MM/YY"
          className="document-details__input"
        >
          <Icon name="calendar" />
        </BaseInput>
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
