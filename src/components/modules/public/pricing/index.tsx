import HomeBenefits from "../home/Benefits";
import Layout from "../layout";
// import SubscriptionServices from "../subscription/Services";
import PricingHero from "./Hero";
import PricingServices from "./Services";
import "./index.scss";

export default function Pricing() {
  return (
    <Layout>
      <PricingHero />
      <PricingServices />
      {/* <SubscriptionServices title="Subscription services" className="pricing-subscription" /> */}
      <HomeBenefits />
    </Layout>
  );
}
