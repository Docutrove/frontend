import { useBookConsultationContext } from ".";
import ConsultationIntro from "./ConsultationIntro";

export default function ConsultLawyer() {
  const { activeScreen } = useBookConsultationContext();
  return <>{activeScreen === "consultation_intro" && <ConsultationIntro />}</>;
}
