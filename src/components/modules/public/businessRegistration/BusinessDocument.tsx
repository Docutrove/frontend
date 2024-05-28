import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button";
import Footer from "../footer";
import BusinessNavbar from '../businessNavbar';

export default function BusinessDocument() {
  const { goBack, goNext } = useBusinessRegistrationContext();
  return (
    <div className='business--information--container'>
          <BusinessNavbar/>
          <div className="business--information--content">
            <header className='business--information--header'>Business Name Registration</header>

            <div className="business--summary">
                <h5>Document Upload</h5>
            </div>


            <div className="business--information--form">

                <div className="partition"></div>

                <h5>Document Requirement for Business Name</h5>

                <div className="partition mb"></div>
                
                <div className="business--note">
                    Document size should not exceed 3mb.                  
                </div>

                <div className="requirement--content">
                    <div className="requirement">
                        <header className='requirement--title'>Means of Identification</header>
                        <p className='requirement--format'>file format: pdf only</p>
                        <button className='upload--button'>
                            Click here to upload file
                        </button>
                    </div>

                    <div className="requirement">
                        <header className='requirement--title'> Signature of Propietor</header>
                        <p className='requirement--format'> file format: jpeg / png image only</p>
                        <button className='upload--button'>
                            Click here to upload file
                        </button>
                    </div>

                    <div className="requirement">
                        <header className='requirement--title'>A Passport Photograph of Proprietor</header>
                        <p className='requirement--format'>file format: pdf only</p>
                        <button className='upload--button'>
                            Click here to upload file
                        </button>
                    </div>

                    <div className="requirement">
                        <header className='requirement--title'>Others (optional)</header>
                        <p className='requirement--format'> file format: jpeg / png image only</p>
                        <button className='upload--button'>
                            Click here to upload file
                        </button>
                    </div>
                </div>
                
             

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
