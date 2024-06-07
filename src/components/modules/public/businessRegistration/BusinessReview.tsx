import { useBusinessRegistrationContext } from ".";
import BaseButton from "../../ui/button";
import Footer from "../footer";
import BusinessNavbar from '../businessNavbar';

export default function BusinessReview() {
  const { goBack, goNext } = useBusinessRegistrationContext();
  
  return (
    <div className='business--information--container'>
         <BusinessNavbar/>
         <div className="business--information--content">
            <header className='business--information--header'>Business Name Registration</header>

            <div className="business--summary">
                <h5>Preview</h5>
            </div>

            <div className="business--information--form">
                <div className="summary--header">
                    BUSINESS NAME RESERVATION
                </div>
                    <div className="table--header">Company Type</div>

                    <div className="table--item"> <span>Classification</span> <span>-- --</span> </div>
                    <div className="table--item"> <span>Specific Type</span> <span>-- --</span> </div>
        
                    <div className="table--header">Proposed Name</div>

                    <div className="table--item"><span>Option 1</span> <span>-- --</span></div>
                    <div className="table--item"><span>Option 2</span> <span>-- --</span></div>
                    <div className="table--item"><span>Option 3</span> <span>-- --</span></div>
                    <div className="table--item"><span>Option 4</span> <span>-- --</span></div>

                    <div className="summary--header">
                        BUSINESS DETAILS
                    </div>
                    
                    <div className="table--item">
                        <span>Business Commencement Date</span> 
                        <span>2023 - 08 - 08</span>
                    </div>
                    <div className="table--item">
                        <span>example@docutrove.com</span> 
                        <span>-- --</span>
                    </div>
                    <div className="table--item">
                        <span>Phone number</span> 
                        <span>+234 8123456790</span>
                    </div>

                    <div className="table--header">Principal Place of Business</div>
                    <div className="table--item">
                        <span>State</span> 
                        <span>Lagos</span>
                    </div>
                    <div className="table--item">
                        <span>LGA</span> 
                        <span>Yaba</span>
                    </div>
                    <div className="table--item">
                        <span>City / Town / Village</span> 
                        <span>Akoka</span>
                    </div>
                    <div className="table--item">
                        <span>Post Code</span> 
                        <span>-- --</span>
                    </div>
                    <div className="table--item">
                        <span>House number  / Building name</span> 
                        <span>14</span>
                    </div>
                    <div className="table--item">
                        <span>Street Name</span> 
                        <span>Unilag Road</span>
                    </div>


                    <div className="table--header">Branch Name</div>
                    <div className="table--item">
                        <span>State</span> 
                        <span>Lagos</span>
                    </div>
                    <div className="table--item">
                        <span>LGA</span> 
                        <span>Yaba</span>
                    </div>
                    <div className="table--item">
                        <span>City / Town / Village</span> 
                        <span>Akoka</span>
                    </div>
                    <div className="table--item">
                        <span>Post Code</span> 
                        <span>-- --</span>
                    </div>
                    <div className="table--item">
                        <span>House number  / Building name</span> 
                        <span>14</span>
                    </div>
                    <div className="table--item">
                        <span>Street Name</span> 
                        <span>Unilag Road</span>
                    </div>

                    <div className="summary--header">
                        PARTICULARS OF PROPRIETORS
                    </div>
                    


                    <div className="table--header">Personal Details</div>
                    <div className="table--item">
                        <span>Surname</span> 
                        <span>Robert</span>
                    </div>
                    <div className="table--item">
                        <span>First Name</span> 
                        <span>Fox</span>
                    </div>
                    <div className="table--item">
                        <span>Other Name</span> 
                        <span>Alex</span>
                    </div>
                    <div className="table--item">
                        <span>Date of Birth</span> 
                        <span>2023 - 08 - 08</span>
                    </div>
                    <div className="table--item">
                        <span>Gender</span> 
                        <span>Male</span>
                    </div>
                    <div className="table--item">
                        <span>Nationality</span> 
                        <span>Nigerian</span>
                    </div>

                    <div className="table--header">Address</div>
                    <div className="table--item">
                        <span>Country</span> 
                        <span>Nigeria</span>
                    </div>
                    <div className="table--item">
                        <span>State</span> 
                        <span>Lagos</span>
                    </div>
                    <div className="table--item">
                        <span>LGA</span> 
                        <span>Yaba</span>
                    </div>
                    <div className="table--item">
                        <span>City / Town / Village</span> 
                        <span>Akoka</span>
                    </div>
                    <div className="table--item">
                        <span>Post Code</span> 
                        <span>-- --</span>
                    </div>
                    <div className="table--item">
                        <span>House number  / Building name</span> 
                        <span>14</span>
                    </div>
                    <div className="table--item">
                        <span>Street Name</span> 
                        <span>Unilag Road</span>
                    </div>
                    
                    
                  
                    <div className="table--header">Residential Address</div>
                    <div className="table--item">
                        <span>Country</span> 
                        <span>Nigeria</span>
                    </div>
                    <div className="table--item">
                        <span>State</span> 
                        <span>Lagos</span>
                    </div>
                    <div className="table--item">
                        <span>LGA</span> 
                        <span>Yaba</span>
                    </div>
                    <div className="table--item">
                        <span>City / Town / Village</span> 
                        <span>Akoka</span>
                    </div>
                    <div className="table--item">
                        <span>Post Code</span> 
                        <span>-- --</span>
                    </div>
                    <div className="table--item">
                        <span>House number  / Building name</span> 
                        <span>14</span>
                    </div>
                    <div className="table--item">
                        <span>Street Name</span> 
                        <span>Unilag Road</span>
                    </div>
                    
                    <div className="table--header">Means of Identification</div>
                    <div className="table--item"><span>Type</span> <span>National Identity Number</span></div>
                    <div className="table--item"><span>Identity Number</span> <span>1234 5678 9012 3456</span></div>

                    <div className="table--header">Proprietor / Partner</div>
                    <div className="table--item"><span>Non Found</span> <span></span></div>
                   
                    <div className="summary--header">
                        NATURE OF BUSINESS
                    </div>
                    <div className="table--item"><span>Nature of Business Category</span> <span>-- --</span></div>
                    <div className="table--item"><span>Specific Nature of Business</span> <span>example@docutrove.com</span></div>
                    <div className="table--item"><span>Other Nature of Business Description</span> <span></span></div>
                    
                    <div className="summary--header">
                        DOCUMENT UPLOADS
                    </div>
                    <div className="table--item"><span>Means of Identification</span> <span>document.pdf</span></div>
                    <div className="table--item"><span>Signature of Robert Fox (Proprietor)</span> <span>document.pdf</span></div>
                    <div className="table--item"><span>Passport Photo of Robert Fox (Proprietor)</span> <span>document.pdf</span></div>
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
