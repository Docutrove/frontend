import { useBusinessNameReservationContext } from ".";
import NamePersonalDetails from "./NamePersonalDetails";
import NamePayment from "./NamePayment";
import NameInfo from "./NameInfo";
import BusinessThank from "./BusinessThank";

export default function ReserveBusinessName() {
  const { activeScreen } = useBusinessNameReservationContext();
  return (
    <>
      {activeScreen === "name_info" && <NameInfo />}
      {activeScreen === "name_payment" && <NamePayment />}
      {activeScreen === "name_personal_details" && <NamePersonalDetails/>}
      {activeScreen === "name_complete" && <BusinessThank/>}
    </>
  );
}
