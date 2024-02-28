import { Link } from "react-router-dom";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import "./index.scss";

interface AboutYouProps {
  goNext: () => void;
  goBack: () => void;
}

export default function AboutYou({ goNext}: AboutYouProps) {
  return (
    <div className="about-you">
      <h2 className="gradient-title">
        Let’s find you the right lawyer when it suits you
      </h2>
      <h6 className="about-you__description">
        We just need some information about you
      </h6>
      <div className="about-you__form">
        <BaseInput label="First name" placeholder="Andrew" />
        <BaseInput label="Last name" placeholder="Smith" />
        <BaseInput
          label="Organisation (optional)"
          placeholder="name organisation"
        />
        <BaseInput label="Phone number" placeholder="00 00 000 000 " />
      </div>

      <div className="about-you__buttons">
        <Link to="/consultation" className="invoice-back-button">
          <div className="back-button">
            <Icon name="caret-right" className="back-icon" />
          </div>
          <p className="text--xs">Back</p>
        </Link>
        <BaseButton variant="primary" onClick={goNext}>
          Next
        </BaseButton>
      </div>
    </div>
  );
}
