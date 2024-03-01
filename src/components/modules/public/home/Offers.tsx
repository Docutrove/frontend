import { Offer } from "../../ui/offer";

export default function HomeOffers() {
  return (
    <div className="home__offers app-container">
      <div className="home__offers__content app-container__section">
        <Offer
          variant="purple"
          iconName="document"
          title="Customize a document"
          description="Access tailored legal documents with ease on Docutrove."
          path="/customisedocument"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
        <Offer
          variant="green"
          iconName="pie"
          title="Business services"
          description="Comprehensive Legal Support for Your Enterprise."
          path="/coming"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
        <Offer
          variant="blue"
          iconName="user"
          title="Consult a lawyer"
          description="Our team, qualified across multiple jurisdictions, delivers customized legal solutions.
          "
          path="/coming"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
      </div>
    </div>
  );
}
