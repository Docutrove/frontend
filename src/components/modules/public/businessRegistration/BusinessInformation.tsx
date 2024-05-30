import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Footer from "../footer";
import BusinessNavbar from '../businessNavbar';
import { useState } from "react";

interface BranchAddress {
    state: string;
    lga: string;
    city: string;
    postCode: string;
    houseNumber: string;
    streetName: string;
}

export default function BusinessInformation() {
  const { goNext, goBack } = useBusinessRegistrationContext();

  const [branchAddresses, setBranchAddresses] = useState<BranchAddress[]>([
    { state: '', lga: '', city: '', postCode: '', houseNumber: '', streetName: '' }
  ]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const newBranchAddresses = [...branchAddresses];
    newBranchAddresses[index] = { ...newBranchAddresses[index], [field]: value };
    setBranchAddresses(newBranchAddresses);
  };

  const addBranchAddress = () => {
    setBranchAddresses([...branchAddresses, { state: '', lga: '', city: '', postCode: '', houseNumber: '', streetName: '' }]);
  };

  return (
    <div className='business--information--container'>
      <BusinessNavbar />
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
                placeholder="example@domain.com"
              />
              <BaseInput
                className="user--input"
                label="Phone Number"
                placeholder="Enter phone number"
              />
            </div>
            <div className="partition"></div>
            <h5>Principal Place Of Business</h5>
            <div className="partition"></div>
            <div className='triple--input'>
              <BaseInput
                label="State"
                className="user--input"
              />
              <BaseInput
                label="LGA"
                className="user--input"
              />
              <BaseInput
                label="City / Town / Village"
                 className="user--input"
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
              label="Street Name"
              placeholder="Enter street name"
            />
            <div className="partition"></div>
            <h5>Branch Address (if any)</h5>
            {branchAddresses.map((_, index) => (
              <div key={index}>
                {index > 0 && <div className="partition"></div>}
                {index > 0 && <h5>Branch Address - {index + 1}</h5>}
                {index > 0 && <div className="partition"></div>}
                <div className='triple--input'>
                  <BaseInput
                    label="Branch State"
                     className="user--input"
                    onChange={(e) => handleInputChange(index, 'state', e.target.value)}
                  />
                  <BaseInput
                    label="Branch LGA"
                     className="user--input"
                    onChange={(e) => handleInputChange(index, 'lga', e.target.value)}
                  />
                  <BaseInput
                    label="Branch City / Town / Village"
                     className="user--input"
                    onChange={(e) => handleInputChange(index, 'city', e.target.value)}
                  />
                </div>
                <div className='double--input'>
                  <BaseInput
                    className="user--input"
                    label="Branch Post Code"
                    placeholder="Enter post code"
                    onChange={(e) => handleInputChange(index, 'postCode', e.target.value)}
                  />
                  <BaseInput
                    className="user--input"
                    label="Branch House Number / Building Name"
                    placeholder="Enter house number / building"
                    onChange={(e) => handleInputChange(index, 'houseNumber', e.target.value)}
                  />
                </div>
                <BaseInput
                  className="user--input"
                  label="Branch Street Name"
                  placeholder="Enter street name"
                  onChange={(e) => handleInputChange(index, 'streetName', e.target.value)}
                />
              </div>
            ))}
            <button type="button" className='add-button' onClick={addBranchAddress}>Add Branch</button>
          </form>
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
