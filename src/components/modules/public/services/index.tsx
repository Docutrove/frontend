import HomeOffers from "../home/Offers";
import ServiceSubscription from "./Subscription";
import HomeSupport from "../home/Support";
import Layout from "../layout";
import ServiceHero from "./Hero";
import "./index.scss";

export default function Services() {
  return (
    <Layout>
      <ServiceHero />
      <HomeOffers />
      <ServiceSubscription className="services-subscription" />
      <HomeSupport />
    </Layout>
  );
}
