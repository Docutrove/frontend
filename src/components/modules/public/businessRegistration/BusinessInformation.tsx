import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Select from "../../ui/select";
import Footer from "../footer";
import BusinessNavbar from '../businessNavbar';

export default function BusinessType() {
  const { goNext, goBack } = useBusinessRegistrationContext();
  return (
    <div className='business--information--container'>
          <BusinessNavbar/>
          <div className="business--information--content">
            <header className='business--information--header'>Business Name Registration</header>

            <div className="business--summary">
                <h5>Business Details</h5>

            </div>

            <div className="business--information--form">
                <form>
                <BaseInput
                className="user--input"
                label="Business Commencement Date"
                placeholder="dd/mm/yyyy"
                />

                <div className='double--input'>
                    <BaseInput
                    className="user--input"
                    label="Email address"
                    placeholder="example@douctrove.com"
                    />

                    <BaseInput
                    className="user--input"
                    label="Phone Number"
                    placeholder="Enter last name"
                    />
                </div>

                <div className="partition"></div>

                <h5>Principal Place Of Business</h5>

                <div className="partition"></div>

                <div className='triple--input'>
                    <Select
                    label="State"
                    options={["Dropdown selection"]}
                    />

                    <Select
                    label="LGA"
                    options={["Dropdown selection"]}
                    />

                    <Select
                    label="City / Town / Village"
                    options={["Dropdown selection"]}
                    />

                </div>

                <div className='double--input'>
                    <BaseInput
                    className="user--input"
                    label="Post Code"
                    placeholder="Enter post code"
                    />

                    <BaseInput
                    className="user--input"
                    label="House Number / Building Name"
                    placeholder="Enter house number / building"
                    />
                </div>

                <BaseInput
                    className="user--input"
                    label="Branch Street Name"
                    placeholder="Enter street name "
                />

                
                <div className="partition"></div>

                <h5>Branch Address (if any)</h5>

                <div className="partition"></div>

                <div className='triple--input'>
                    <Select
                    label="Branch State"
                    options={["Dropdown selection"]}
                    />

                    <Select
                    label="Branch LGA"
                    options={["Dropdown selection"]}
                    />

                    <Select
                    label="Branch City / Town / Village"
                    options={["Dropdown selection"]}
                    />

                </div>

                <div className='double--input'>
                    <BaseInput
                    className="user--input"
                    label="Branch Post Code"
                    placeholder="Enter post code"
                    />

                    <BaseInput
                    className="user--input"
                    label="Branch House Number / Building Name"
                    placeholder="Enter house number / building"
                    />
                </div>
                
                <BaseInput
                    className="user--input"
                    label="Branch Street Name"
                    placeholder="Enter street name "
                />

                <button className='add-button'>Add Branch</button>

                </form>

               
            </div>

          </div>

          <div className="bottom--buttons">
                <BaseButton
                onClick={goBack} variant="inverted" className='back--button'>
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
