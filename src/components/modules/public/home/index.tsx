import Layout from "../layout";
// import HomeBenefits from "./Benefits";
import HomeCTABanner from "./CTABanner";
import HomeHero from "./Hero";
import HomeOffers from "./Offers";
import HomeSubscription from "./Subscription";
import HomeServices from "./Services";
import HomeSupport from "./Support";
import "./index.scss";

export default function Home() {
  return (
    <Layout>
      <HomeHero/>
      <HomeOffers />
      <HomeSubscription/>
      <HomeServices />
      {/* <HomeBenefits/> */}
      <HomeCTABanner />
      <HomeSupport />
    </Layout>
  );
}
