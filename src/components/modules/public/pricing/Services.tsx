import { Offer } from "../../ui/offer";

export default function PricingServices() {
  return (
    <div className="pricing__services app-container">
      <div className="pricing__services__content app-container__section">
        <Offer
          variant="purple"
          title="Customize a document"
          description="Easy-to-use document templates - save time with our library of lawyer-approved templates."
          amount={5000}
          buttonText="Find a Template"
          path="/customise"
          lists={[
            "Edit the templates to your specific needs in minutes.",
            "Download your documents in convenient formats like Word or PDF.",
            "Store your documents securely in the cloud for easy access.",
          ]}
          buttonVariant="secondary"
          amountSuffix="per document"
          iconName="document"
          iconVariant="black"
        />

        <Offer
          variant="green"
          title="Business services"
          description="The whole nine yards - get comprehensive business registration and compliance services."
          buttonText="Register A business"
          amount={25000}
          path="/services"
          lists={[
            "Avoid delays and errors in completing necessary paperwork",
            "Ensure timely filiing with government agencies",
            "Maintain good legal standing with ongoing compliance support",
          ]}
          buttonVariant="secondary"
          amountSuffix="Base cost"
          iconName="pie"
          iconVariant="black"
        />

        <Offer
          variant="blue"
          title="Expert Consultation"
          description="Top-notch legal consultations - Recommendations and Strategies to address legal challenges."
          buttonText="Schedule a Call"
          amount={20000}
          path="/consultation"
          lists={[
            "Personalised legal advice.",
            "Clear explanations of complex legal issues.",
            "Secure communication platform for confidential consultations. ",
          ]}
          buttonVariant="secondary"
          amountSuffix="per hour"
          iconName="user"
          iconVariant="black"
        />
      </div>
    </div>
  );
}
