import { useBusinessNameReservationContext } from ".";
import BaseInput from "../../ui/input";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import { useNavigate } from "react-router";
import Select from "../../ui/select";

export default function BusinessType() {
  const navigate = useNavigate();

  const { goNext } = useBusinessNameReservationContext();
  const goBack = () => {
    navigate('/business/formation')
  };

  return (
    <div className="payment bg-gradient">
    <div className="app-container">
    <h4>Business Name Registration</h4>
      <div className="login__content">
          <div className="payment__method">
            <h6>Company Type</h6>

            <div className="card-details">
              <div className="card-date">
                <Select label="Classification" options={classificationOptions} />
                <Select label="Specific Type" options={specificTypeOptions} />
              </div>
              <p className="text--2xs login__content__border">-</p>
              <h6>Proposed Names</h6>
              <div className="card-date">
                <BaseInput
                  className=""
                  label="Option 1"
                  placeholder="option 1"
                />
                <BaseInput
                  className=""
                  label="Option 2"
                  placeholder="option 2"
                />
              </div>
              <div className="card-date">
                <BaseInput
                  className=""
                  label="Option 3"
                  placeholder="option 3"
                />
                <BaseInput
                  className=""
                  label="Option 4"
                  placeholder="option 4"
                />
              </div>
            </div>
          </div>

        <div>
          <div className="login__content__socials">
            <button className="invoice-back-button" onClick={goBack}>
              <div className="back-button">
                <Icon name="caret-right" className="back-icon" />
              </div>
              <p className="text--xs">Back</p>
            </button>
            <BaseButton variant="primary" onClick={goNext}>
              Save and Continue
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const classificationOptions = ['--select option--', '', '']
const specificTypeOptions = ['--select option--', '', '']

