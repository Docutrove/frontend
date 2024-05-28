import { useBusinessRegistrationContext } from ".";
import BusinessNature from "./BusinessNature";
import BusinessParticulars from "./BusinessParticulars";
import BusinessInformation from "./BusinessInformation";
import BusinessDocument from "./BusinessDocument";
import BusinessReview from "./BusinessReview";
import BusinessPayment from "./BusinessPayment";
import BusinessPersonalDetails from "./BusinessPersonalDetails";
import BusinessComplete from "./BusinessComplete";

export default function RegisterBusiness() {
  const { activeScreen } = useBusinessRegistrationContext();
  return (
    <>
      {activeScreen === "business_information" && <BusinessInformation />}
      {activeScreen === "business_particulars" && <BusinessParticulars />}
      {activeScreen === "business_nature" && <BusinessNature/>}
      {activeScreen === "business_document" && <BusinessDocument/>}
      {activeScreen === "business_review" && <BusinessReview/>}
      {activeScreen === "business_payment" && <BusinessPayment/>}
      {activeScreen === "business_personal_details" && <BusinessPersonalDetails/>}
      {activeScreen === "business_complete" && <BusinessComplete/>}
    </>
  );
}
