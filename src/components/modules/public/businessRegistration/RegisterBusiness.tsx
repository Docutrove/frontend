import { useBusinessRegistrationContext } from ".";
import BusinessDetails from "./BusinessDetails";
import BusinessInvoice from "./BusinessInvoice";
import BusinessType from "./BusinessType";
import ConfirmBusiness from "./ConfirmBusiness";

export default function RegisterBusiness() {
  const { activeScreen } = useBusinessRegistrationContext();
  return (
    <>
      {activeScreen === "business_type" && <BusinessType />}
      {activeScreen === "business_invoice" && <BusinessInvoice />}
      {activeScreen === "business_details" && <BusinessDetails/>}
      {activeScreen === "confirm_business" && <ConfirmBusiness/>}
    </>
  );
}
