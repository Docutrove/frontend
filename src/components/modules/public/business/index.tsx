import CustomiseExplore from "../customise/Explore";
import Layout from "../layout";
import BusinessFAQ from "./FAQ";
import BusinessHero from "./Hero";
import BusinessServices from "./Services";
import "./index.scss";

export default function Business() {
  return (
    <Layout>
      <BusinessHero />
      <BusinessServices />
      <CustomiseExplore />
      <BusinessFAQ />
    </Layout>
  );
}
