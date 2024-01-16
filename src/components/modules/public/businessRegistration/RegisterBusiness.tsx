import { useBusinessRegistrationContext } from ".";
import BusinessInvoice from "./BusinessInvoice";
import BusinessType from "./BusinessType";

export default function RegisterBusiness() {
  const { activeScreen } = useBusinessRegistrationContext();
  return (
    <>
      {activeScreen === "business_type" && <BusinessType />}
      {activeScreen === "business_invoice" && <BusinessInvoice />}
    </>
  );
}
