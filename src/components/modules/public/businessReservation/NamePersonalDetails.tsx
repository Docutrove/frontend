import { useBusinessNameReservationContext } from ".";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Footer from "../footer";
import BusinessNavbar from '../businessNavbar';

export default function NamePersonalDetails() {
  const { goBack, goNext } = useBusinessNameReservationContext();
  return (
    <div className="user--content">
       <BusinessNavbar/>

      <div className="user--information--content">
      <div className="user--information">
            <header className='detail--header'>Personal Details</header>
            <p className='user--advice'>Kindly fill the fields below. Updates will be sent to the provided email address.</p>
            <form className='user--details'>
                <BaseInput
                className="user--input"
                label="First Name"
                placeholder="Enter first name"
                />

                <BaseInput
                className="user--input"
                label="Last Name"
                placeholder="Enter last name"
                />

                <BaseInput
                className="user--input"
                label="Email address"
                placeholder="Andrew.Smith@instinctif.come"
                />

                <BaseInput
                className="user--input"
                label="Phone number"
                placeholder="+234 000 000 000"
                />

                <BaseButton variant="primary" className='user--submit--button' onClick={goNext}>
                    Submit
                </BaseButton>

                <div className="or--option--container">
                    <div className="line"></div> or <div className="line"></div>
                </div>

                <BaseButton variant="inverted" className='user--submit--button' onClick={goBack}>
                    Go Back
                </BaseButton>
            </form>

            
        </div>
      </div>

        <Footer/>
    </div>

)
    
}
