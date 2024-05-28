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

                    <div className="table--item"> <span>Classification</span> <span>lorem ipsum</span> </div>
                    <div className="table--item"> <span>Classification</span> <span>lorem ipsum</span> </div>
        
                    <div className="table--header">Company Type</div>

                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>

                    <div className="summary--header">
                        BUSINESS NAME RESERVATION
                    </div>
                    
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>

                    <div className="table--header">Company Type</div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>


                    <div className="table--header">Company Type</div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>

                    <div className="summary--header">
                        BUSINESS NAME RESERVATION
                    </div>
                    
                    <div className="table--header">Company Type</div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    <div className="table--item">
                        <span>Classification</span> 
                        <span>lorem ipsum</span>
                    </div>
                    
                    
                    <div className="table--header">Company Type</div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    
                    <div className="table--header">Company Type</div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    
                    <div className="table--header">Company Type</div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                   
                    <div className="summary--header">
                        BUSINESS NAME RESERVATION
                    </div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    
                    <div className="summary--header">
                        BUSINESS NAME RESERVATION
                    </div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
                    <div className="table--item"><span>Classification</span> <span>lorem ipsum</span></div>
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
