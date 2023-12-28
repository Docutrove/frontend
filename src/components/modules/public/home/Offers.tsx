import { Offer } from "../../ui/offer";

export default function HomeOffers() {
  return (
    <div className="home__offers app-container">
      <div className="home__offers__content app-container__section">
        <Offer
          variant="purple"
          iconName="document"
          title="Customize a document"
          description="Automated legal documentss tailored to your needs. Looking for professional legal documents? Docutrove delivers. Access high-quality documents for essential business situations. Simply answer a few questions, and a personalized document is created automatically."
          path="/customise"
          buttonText="Browse Templates"
          buttonVariant="secondary"
        />
        <Offer
          variant="green"
          iconName="pie"
          title="Business services"
          description="Tincidunt nulla in hac viverra lobortis proin. Magna nibh turpis facilisi urna nisi. Nulla morbi tempor enim vitae."
          path="/business"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
        <Offer
          variant="blue"
          iconName="user"
          title="Consult a lawyer"
          description="Our team of experienced lawyers, qualified across multiple jurisdictions, provides tailored solutions. We offer top-tier knowledge and expertise for all aspects of our service."
          path="/consultation"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
      </div>
    </div>
  );
}
