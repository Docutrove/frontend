import { useBusinessNameReservationContext } from ".";
import BusinessDetails from "./BusinessDetails";
import BusinessInvoice from "./BusinessInvoice";
import NameInfo from "./NameInfo";
import ConfirmBusiness from "./ConfirmBusiness";

export default function ReserveBusinessName() {
  const { activeScreen } = useBusinessNameReservationContext();
  return (
    <>
      {activeScreen === "name_info" && <NameInfo />}
      {activeScreen === "name_payment" && <BusinessInvoice />}
      {activeScreen === "name_personal_details" && <BusinessDetails/>}
      {activeScreen === "name_complete" && <ConfirmBusiness/>}
    </>
  );
}
