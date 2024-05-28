import CustomiseExplore from "../customise/Explore";
import Layout from "../layout";
import ConsultationFAQ from "./FAQ";
import ConsultationHero from "./Hero";
import ConsultationServices from "./Services";
import "./index.scss";

export default function Consultation() {
  return (
    <Layout>
      <ConsultationHero />
      <ConsultationServices />
      <CustomiseExplore />
      <ConsultationFAQ />
    </Layout>
  );
}
