import { useBusinessNameReservationContext } from ".";
import BaseInput from "../../ui/input";
import BaseButton from "../../ui/button";
import { useNavigate } from "react-router";
import BusinessNavbar from '../businessNavbar';
import Footer from "../footer";

export default function BusinessType() {
  const navigate = useNavigate();

  const { goNext } = useBusinessNameReservationContext();
  const goBack = () => {
    navigate('/business/formation')
  };

  return (
    <div className='business--information--container'>
      <BusinessNavbar />
      <div className="business--information--content">
        <header className='business--information--header'>Business Name Reservation</header>

        <div className="business--information--form">
          <form>
            <div className="partition"></div>
            <h5>Company Type</h5>
            <div className="partition mb"></div>

            <div className='double--input'>
              <BaseInput
                label="Classification"
                className="user--input"
              />
              <BaseInput
                label="Specific Type"
                className="user--input"
              />
            </div>

            <div className="partition"></div>
            <h5>Proposed Names</h5>
            <div className="partition mb"></div>

            <div className='double--input'>
              <BaseInput
                label="Option 1"
                className="user--input"
                placeholder="Name option 1"
              />
              <BaseInput
                label="Option 2"
                className="user--input"
                placeholder="Name option 2"
              />
            </div>
            <div className='double--input'>
              <BaseInput
                className="user--input"
                label="Option 3"
                placeholder="Name option 3"
              />
              <BaseInput
                className="user--input"
                label="Option 4"
                placeholder="Name option 3"
              />
            </div>

          </form> {/* Closing the form element here */}
        </div>
      </div>
      <div className="button--container">
        <div className="bottom--buttons">
          <BaseButton onClick={goBack} variant="inverted" className='back--button'>
            Back
          </BaseButton>
          <BaseButton onClick={goNext} variant="primary" className='save--button'>
            Save and Continue
          </BaseButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

