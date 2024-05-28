import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button"
import Footer from "../footer";
import Select from "../../ui/select";
import BaseInput from "../../ui/input";
import Radio from "../../ui/radio";
import BusinessNavbar from '../businessNavbar';

export default function BusinessParticulars() {
  const { goBack, goNext } = useBusinessRegistrationContext();
  return (
    <div className='business--information--container'>
          <BusinessNavbar/>
          <div className="business--information--content">
            <header className='business--information--header'>Business Name Registration</header>

            <div className="business--summary">
                <h5>Particulars of Proprietors</h5>

            </div>

            <div className="business--information--form">
                <form>

                <div className="partition"></div>

                <h5>Personal Details</h5>

                <div className="partition mb"></div>

                <div className='triple--input'>
                    <BaseInput
                    className="user--input"
                    label="Enter surname"
                    placeholder="example@douctrove.com"
                    />

                   <BaseInput
                    className="user--input"
                    label="First Name"
                    placeholder="First Name"
                    />

                    <BaseInput
                    className="user--input"
                    label="Other Name"
                    placeholder="Other Name"
                    />

                </div>

                <div className='triple--input'>
                    <BaseInput
                    className="user--input"
                    label="Date of Birth"
                    placeholder="YYYY - MM - DD"
                    />

                   <BaseInput
                    className="user--input"
                    label="Gender"
                    placeholder="Gender"
                    />

                    <Select
                    label="Nationality"
                    options={["Dropdown selection"]}
                    />

                </div>

                <div className='double--input'>
                    <BaseInput
                    className="user--input"
                    label="Former Name (if any)"
                    placeholder="Former Name"
                    />

                    <BaseInput
                    className="user--input"
                    label="Former Nationality (if any)"
                    placeholder="Former Nationality"
                    />
                </div>

                <div className="partition"></div>

                <h5>Contact Details</h5>

                <div className="partition mb"></div>

                
                <div className='triple--input'>
                    <BaseInput
                    className="user--input"
                    label="Phone Number"
                    placeholder="000 0000 000"
                    />

                   <BaseInput
                    className="user--input"
                    label="Email"
                    placeholder="Enter email"
                    />

                    <BaseInput
                    className="user--input"
                    label="Occupation / Description"
                    placeholder="Enter occupation / description"
                    />

                </div>

                <div className="partition"></div>

                <h5>Address</h5>

                <div className="partition mb"></div>

                <div className="address--information">
                    <p>
                        The Addresses will appear on the public record. These do not need to be the proprietor / partners’ usual residential address.  

                        You must also fill in the Proprietor’s usual residential address

                        Please state ‘The Business’s Principal Place Of Business’ if your service address will be recorded in the business’s register of proprietors as the business’s principal place of business
                    </p>
                </div>

                <div className='triple--input'>
                    <Select
                    label="Country"
                    options={["Dropdown selection"]}
                    />

                    <Select
                    label="State"
                    options={["Dropdown selection"]}
                    />

                    <Select
                    label="LGA"
                    options={["Dropdown selection"]}
                    />

                </div>

                <div className='triple--input'>
                    <BaseInput
                    className="user--input"
                    label="Post Code"
                    placeholder="Enter post code"
                    />

                   <BaseInput
                    className="user--input"
                    label="City / Town / Village"
                    placeholder="Enter city / town / village"
                    />

                    <BaseInput
                    className="user--input"
                    label="House Number / Building Name"
                    placeholder="Enter house number / building"
                    />

                </div>

                <BaseInput
                    className="user--input"
                    label="Street Name"
                    placeholder="Enter street name "
                />

                <Radio 
                variant='primary'>
                    Make address, residual address?
                </Radio>

                
                <div className="partition"></div>

                <h5>Residential Address</h5>

                <div className="partition mb"></div>

                <div className="address--information">
                    <p>
                        Please complete your usual residential address below.

                        Please state ‘Same as service address’ in this section if your usual residential address is recorded in the business’s proposed principal place business of Proprietor’s residential addresses as ‘Same as service address’.

                        You cannot state ‘Same as service address’ if your service address has been stated as ‘The Business’s Principal Place Of Business’. You will need to complete the address in full.
                    </p>
                </div>

                <div className='triple--input'>
                    <Select
                    label="Country"
                    options={["Dropdown selection"]}
                    />

                    <Select
                    label="State"
                    options={["Dropdown selection"]}
                    />

                    <Select
                    label="LGA"
                    options={["Dropdown selection"]}
                    />

                </div>

                <div className='triple--input'>
                    <BaseInput
                    className="user--input"
                    label="Post Code"
                    placeholder="Enter post code"
                    />

                   <BaseInput
                    className="user--input"
                    label="City / Town / Village"
                    placeholder="Enter city / town / village"
                    />

                    <BaseInput
                    className="user--input"
                    label="House Number / Building Name"
                    placeholder="Enter house number / building"
                    />

                </div>


                <BaseInput
                    className="user--input"
                    label="Street Name"
                    placeholder="Enter street name "
                />

                <Radio
                variant='primary'>
                   Hide Residential Address From Public Record?
                </Radio>

                  
                <div className="partition"></div>

                <h5>Means of Identification</h5>

                <div className="partition mb"></div>

                <div className='double--input'>
                   
                    <Select
                    label="Type"
                    options={["Dropdown selection"]}
                    />

                    <BaseInput
                    className="user--input"
                    label="Identity Number"
                    placeholder="Enter house number / building"
                    />
                </div>

                    <Select
                    label="Type"
                    options={["Dropdown selection"]}
                    />


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
