import CustomiseExplore from "../customise/Explore";
import Layout from "../layout";
import SubscriptionFAQ from "./FAQ";
import SubscriptionHero from "./Hero";
import SubscriptionServices from "./Services";
import "./index.scss";

export default function Subscription() {
  return (
    <Layout>
      <SubscriptionHero />
      <SubscriptionServices />
      <SubscriptionFAQ />
      <CustomiseExplore />
    </Layout>
  );
}
