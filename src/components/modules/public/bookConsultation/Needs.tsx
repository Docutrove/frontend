import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";

interface NeedsProps {
  goNext: () => void;
  goBack: () => void;
}

export default function Needs({ goNext, goBack }: NeedsProps) {
  return (
    <div className="about-you">
      <h2 className="gradient-title">Tell us about what you need help with</h2>
      <p className="about-you__description text--sm">
        Please be as descriptive as possible in order to make the most of your
        allocated time and to enable us to assign the right person
      </p>
      <div className="about-you__form">
        <BaseInput
          label="Subject"
          placeholder="Lorem ipsum"
          className="document-details__input"
        />
        <BaseInput
          label="Message"
          textarea
          placeholder="Smith"
          className="document-details__input"
        />
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
