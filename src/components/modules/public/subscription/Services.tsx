import { Offer } from "../../ui/offer";

interface SubscriptionServices {
  className?: string;
  title?: string;
}

export default function SubscriptionServices({
  title = "Our range of subscription services",
  className,
}: SubscriptionServices) {
  return (
    <div className="subscription__services app-container">
      <h5 className="subscription__services__subtitle">{title}</h5>
      <div
        className={`subscription__services__content app-container__section ${className}`}
      >
        <Offer
          variant="plain"
          title="Tier 1 - Templates"
          description="Purchase individual templates for a one-time fee. Perfect for one-off legal needs."
          amount={5000}
          buttonText="Subscribe to Tier 1"
          path="/coming"
          lists={[
            "Lawyer-approved templates",
            "Easy Customisation",
            "Multiple download formats",
            "Secure document storage",
          ]}
          buttonVariant="primary"
          iconVariant="gradient"
        />

        <Offer
          variant="plain"
          title="Tier 2 - Business Registration"
          description="Ensure a smooth launch with expert guidance on registration and ongoing compliance."
          buttonText="Subscribe to Tier 2"
          amount={25000}
          path="/coming"
          lists={[
            "Expert guidance on entity selection and business registration process.",
            "Assistance with completing all necessary paperwork.",
            "Timely filing with government agencies.",
            "Ensure accuracy and ongoing compliance with industry standards.",
          ]}
          buttonVariant="primary"
          iconVariant="gradient"
        />

        <Offer
          variant="plain"
          title="Tier 3 - All Inclusive"
          description="Get personalised advice and navigate legal challenges with our experienced lawyers - and more."
          buttonText="Subscribe to Tier 3"
          amount={50000}
          path="/coming"
          lists={[
            "Expert legal consultations",
            "Unlimited templates",
            "Cloud storage for legal documents",
            "Timely filing with government agencies.",
          ]}
          buttonVariant="primary"
          iconVariant="gradient"
        />
      </div>
    </div>
  );
}
