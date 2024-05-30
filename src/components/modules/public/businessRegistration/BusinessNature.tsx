import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button";
import BusinessNavbar from '../businessNavbar';
import Footer from "../footer";
import BaseInput from "../../ui/input";
import { useState } from "react";

interface BusinessNature {
    category: string;
    specific: string;
    description: string;
}

export default function BusinessNature() {
  const { goBack, goNext } = useBusinessRegistrationContext();

  const [businessNatures, setBusinessNatures] = useState<BusinessNature[]>([
    { category: '', specific: '', description: '' }
  ]);

  const handleBaseInputChange = (index: number, field: string, value: string) => {
    const newBusinessNatures = [...businessNatures];
    newBusinessNatures[index] = { ...newBusinessNatures[index], [field]: value };
    setBusinessNatures(newBusinessNatures);
  };

  const handleTextAreaChange = (index: number, value: string) => {
    const newBusinessNatures = [...businessNatures];
    newBusinessNatures[index] = { ...newBusinessNatures[index], description: value };
    setBusinessNatures(newBusinessNatures);
  };

  const addNatureOfBusiness = () => {
    setBusinessNatures([...businessNatures, { category: '', specific: '', description: '' }]);
  };

  return (
    <div className='business--information--container'>
      <BusinessNavbar />
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
            {businessNatures.map((_, index) => (
              <div key={index}>
                {index > 0 && <div className="partition"></div>}
                {index > 0 && <h5>Nature of Business - {index + 1}</h5>}
                {index > 0 && <div className="partition"></div>}
                <div className='double--input'>
                  <BaseInput
                    label="Nature of Business Category"
                    className="user--input"
                    onChange={(e) => handleBaseInputChange(index, 'category', e.target.value)}
                  />
                  <BaseInput
                    label="Specific Nature of Business"
                    className="user--input"
                    onChange={(e) => handleBaseInputChange(index, 'specific', e.target.value)}
                  />
                </div>
                <label>Other Nature of Business Description</label>
                <textarea
                  className='business--text--area'
                  placeholder='Write here'
                  onChange={(e) => handleTextAreaChange(index, e.target.value)}
                ></textarea>
              </div>
            ))}
            <button type="button" className='add-button' onClick={addNatureOfBusiness}>Add Nature of Business</button>
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
