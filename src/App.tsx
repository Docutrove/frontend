import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/modules/public/home";
import Services from "./components/modules/public/services";
import Customise from "./components/modules/public/customise";
import Consultation from "./components/modules/public/consultation";
import FAQ from "./components/modules/public/faq";
import Business from "./components/modules/public/business";
// import Subscription from "./components/modules/public/subscription";
import Pricing from "./components/modules/public/pricing";
import ComingSoon from "./components/modules/public/comingSoon";
import CustomiseDocumentProvider from "./components/modules/public/customiseDocument";
import BookConsultationProvider from "./components/modules/public/bookConsultation";
import BusinessRegistrationProvider from "./components/modules/public/businessRegistration";
import Login from "./components/modules/public/login";
import Settings from "./components/modules/app/settings";
import SignUp from "./components/modules/public/signUp";
import Payment from "./components/modules/app/payment";
import FAQTopic from "./components/modules/public/faq/FAQTopic";
import EditPayment from "./components/modules/app/settings/EditPayment";
import ChangePlan from "./components/modules/app/settings/ChangePlan";
import DocumentThank from "./components/modules/public/customiseDocument/DocumentThank";
import BusinessThank from "./components/modules/public/businessRegistration/BusinessThank";
import ConsultationThank from "./components/modules/public/bookConsultation/ConsultationThank";

function App() {
  return (
    // prettier-ignore
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customise" element={<Customise />} />
        <Route path="/business" element={<Business />} />
        <Route path="/consultation" element={<Consultation />} />
        {/* <Route path="/subscription" element={<Subscription />} /> */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/coming" element={<ComingSoon />} />
        <Route path="/customisedocument" element={<CustomiseDocumentProvider />} />
        <Route path="/businessregistration" element={<BusinessRegistrationProvider />} />
        <Route path="/bookconsultation" element={<BookConsultationProvider />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/faqtopic" element={<FAQTopic />} />
        <Route path="/editpayment" element={<EditPayment />} />
        <Route path="/changeplan" element={<ChangePlan />} />
        <Route path="/documentthankyou" element={<DocumentThank />} />
        <Route path="/businessthankyou" element={<BusinessThank />} />
        <Route path="/consultationthankyou" element={<ConsultationThank />} />


        {/* protected route */}
        <Route path="/settings" element={<Settings />} />    
        <Route path="/payment" element={<Payment />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
