import Layout from "../layout";
import CustomiseExplore from "./Explore";
import CustomiseFAQ from "./FAQ";
import CustomiseHero from "./Hero";
import CustomiseHow from "./How";
import CustomiseSearch from "./Search";
import "./index.scss";

export default function Customise() {
  return (
    <Layout>
      <CustomiseHero />
      <CustomiseHow />
      <CustomiseSearch />
      <CustomiseFAQ />
      <CustomiseExplore />
    </Layout>
  );
}
