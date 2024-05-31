import { useCustomiseDocContext } from ".";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Footer from "../footer";
import BusinessNavbar from '../businessNavbar';
import { useState } from "react";

export default function TemplatePersonalDetails() {
  const { goBack, setAuthData, authData } = useCustomiseDocContext();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

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
                value={authData?.firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />

                <BaseInput
                className="user--input"
                label="Last Name"
                placeholder="Enter last name"
                value={authData?.lastName}
                onChange={(e) => setLastName(e.target.value)}
                />

                <BaseInput
                className="user--input"
                label="Email address"
                placeholder="Andrew.Smith@instinctif.come"
                value={authData?.email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <BaseInput
                className="user--input"
                label="Phone number"
                placeholder="+234 000 000 000"
                value={authData?.phone}
                onChange={(e) => setPhone(e.target.value)}
                />

                <BaseButton variant="primary" className='user--submit--button' onClick={() => setAuthData({
                    firstName, lastName, email, phone
                })}>
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
