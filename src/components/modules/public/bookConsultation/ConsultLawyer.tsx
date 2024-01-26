import { useBookConsultationContext } from ".";
import Consult from "./Consult";
import ConsultationIntro from "./ConsultationIntro";

export default function ConsultLawyer() {
  const { activeScreen } = useBookConsultationContext();
  return (
    <>
      {activeScreen === "consultation_intro" && <ConsultationIntro />}
      {activeScreen === "consult" && <Consult />}
    </>
  );
}
