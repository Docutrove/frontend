import { useBusinessRegistrationContext } from ".";
import BusinessNavbar from '../businessNavbar';
import Footer from '../footer';
import { useNavigate } from "react-router";
import BaseInput from '../../ui/input';
import BaseButton from '../../ui/button';

export default function BusinessNameReservation() {
    const navigate = useNavigate();

    const { goNext } = useBusinessRegistrationContext();
    const goBack = () => {
        navigate('/business/formation')
    };

    const goToNameReservation = () => {
        navigate('/business/reservation')
    };

      return (
        <div className='business--information--container'>
             <BusinessNavbar/>
             <div className="business--information--content">
                <header className='business--information--header'>Business Name Registration</header>

                <div className="business--information--form">
                    <div className="partition"></div>

                    <h5>CAC Approved Name</h5>

                    <div className="partition mb"></div>

                    <div className="business--note">
                        Note: Input your business name that was approved by CAC. If the name does not correspond, your registration might not be successful. If you are yet to reserve a name, click the button below to reserve name. 
                        <br />
                        <button className="reserve--button" onClick={goToNameReservation}>
                            Reserve a Name
                        </button>
                    </div>
                    
                    <BaseInput
                        className="user--input"
                        label="Name"
                        placeholder="Enter name "
                        
                    />
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
             <Footer/>
        </div>
    )
}
