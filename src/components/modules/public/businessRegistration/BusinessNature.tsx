import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button";
import BusinessNavbar from '../businessNavbar';
import Select from "../../ui/select";
import Footer from "../footer";

export default function BusinessNature() {
  const { goBack, goNext } = useBusinessRegistrationContext();
  return (
    <div className='business--information--container'>
          <BusinessNavbar/>
          <div className="business--information--content">
            <header className='business--information--header'>Business Name Registration</header>

            <div className="business--summary">
                <h5>Nature of Business</h5>
            </div>

            <div className="business--information--form">
                <div className="business--note">
                    Note: Only the first typed in Nature of Business Description will show on the Certificate.
                </div>

                <form>  
                    <div className='double--input'>
                        <Select
                        label="State"
                        options={["Dropdown selection"]}
                        />

                        <Select
                        label="LGA"
                        options={["Dropdown selection"]}
                    />
                    </div>

                    <label>Other Nature of Business Description</label>

                    <textarea className='business--text--area' placeholder='Write here'></textarea>

                    <div className="add-button">
                        Add Nature of Business
                    </div>
                </form>


            </div>
          </div>

          <div className="bottom--buttons">
                    <BaseButton onClick={goBack} variant="inverted" className='back--button'>
                        Back
                    </BaseButton>
        
                    <BaseButton onClick={goNext} variant="primary" className='save--button'>
                        Save and Continue
                    </BaseButton>
                </div>
          <Footer/>
    </div>
)
}
