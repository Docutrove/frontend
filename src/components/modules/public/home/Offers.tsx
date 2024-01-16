import { Offer } from "../../ui/offer";

export default function HomeOffers() {
  return (
    <div className="home__offers app-container">
      <div className="home__offers__content app-container__section">
        <Offer
          variant="purple"
          iconName="document"
          title="Customize a document"
          description="Access tailored legal documents with ease on Docutrove. Our platform specializes in lawyer-grade legal document templates perfect for various business scenarios. With Docutrove, answer essential questions, and a customized, high-quality legal document will be created tailored to your specific needs."
          path="/customise"
          buttonText="Browse Templates"
          buttonVariant="secondary"
        />
        <Offer
          variant="green"
          iconName="pie"
          title="Business services"
          description="Comprehensive Legal Support for Your Enterprise. We provide a full suite of legal services to support your business's growth and compliance. From initial business registration to ongoing company secretarial support, our experienced team is equipped to handle all your legal needs. We specialize in offering personalized solutions, ensuring that each service is specifically tailored to your business requirements."
          path="/business"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
        <Offer
          variant="blue"
          iconName="user"
          title="Consult a lawyer"
          description="Our team, qualified across multiple jurisdictions, delivers customized legal solutions. With a focus on top-tier expertise and knowledge, we cater to all aspects of legal consultation
          "
          path="/consultation"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
      </div>
    </div>
  );
}
