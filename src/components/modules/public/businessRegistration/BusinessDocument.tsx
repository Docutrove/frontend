import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button";
import Footer from "../footer";
import BusinessNavbar from '../businessNavbar';
import { useRef } from "react";

export default function BusinessDocument() {
  const { goBack, goNext } = useBusinessRegistrationContext();

    const idInputRef = useRef<HTMLInputElement>(null);
    const signatureInputRef = useRef<HTMLInputElement>(null);
    const photoInputRef = useRef<HTMLInputElement>(null);
    const othersInputRef = useRef<HTMLInputElement>(null);


    const handleUploadClick = (inputRef: React.RefObject<HTMLInputElement>) => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

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
                            <button className='upload--button' onClick={() => handleUploadClick(idInputRef)}>
                                Click here to upload file
                            </button>
                            <input type="file" ref={idInputRef} className="hidden--input" accept=".pdf" />
                        </div>

                        <div className="requirement">
                            <header className='requirement--title'>Signature of Proprietor</header>
                            <p className='requirement--format'>file format: jpeg / png image only</p>
                            <button className='upload--button' onClick={() => handleUploadClick(signatureInputRef)}>
                                Click here to upload file
                            </button>
                            <input type="file" ref={signatureInputRef} className="hidden--input" accept=".jpeg,.png" />
                        </div>

                        <div className="requirement">
                            <header className='requirement--title'>A Passport Photograph of Proprietor</header>
                            <p className='requirement--format'>file format: pdf only</p>
                            <button className='upload--button' onClick={() => handleUploadClick(photoInputRef)}>
                                Click here to upload file
                            </button>
                            <input type="file" ref={photoInputRef} className="hidden--input" accept=".pdf" />
                        </div>

                        <div className="requirement">
                            <header className='requirement--title'>Others (optional)</header>
                            <p className='requirement--format'>file format: jpeg / png image only</p>
                            <button className='upload--button' onClick={() => handleUploadClick(othersInputRef)}>
                                Click here to upload file
                            </button>
                            <input type="file" ref={othersInputRef} className="hidden--input" accept=".jpeg,.png" />
                        </div>
                    </div>
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
    );
}
