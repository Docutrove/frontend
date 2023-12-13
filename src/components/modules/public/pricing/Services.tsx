import { Offer } from "../../ui/offer";

export default function PricingServices() {
  return (
    <div className="pricing__services app-container">
      <div className="pricing__services__content app-container__section">
        <Offer
          variant="purple"
          title="Customize a document"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum. 
          "
          amount={1000000}
          buttonText="Customize a document"
          path=""
          lists={[
            "Tortor interdum condimentum nunc",
            "Purus orci netus suscipit",
            "Feugiat in nunc nunc eget sit eus agit",
          ]}
          buttonVariant="secondary"
          amountSuffix="per document"
          iconName="document"
          iconVariant="black"
        />

        <Offer
          variant="green"
          title="Business services"
          description="Tincidunt nulla in hac viverra lobortis proin. Magna nibh turpis facilisi urna nisi. Nulla morbi tempor enim vitae."
          buttonText="Register a business"
          amount={1000000}
          path=""
          lists={[
            "Tortor interdum condimentum nunc",
            "Purus orci netus suscipit",
            "Feugiat in nunc nunc eget sit eus agit",
            "Purus orci netus suscipit",
          ]}
          buttonVariant="secondary"
          amountSuffix="per service"
          iconName="pie"
          iconVariant="black"
        />

        <Offer
          variant="blue"
          title="Consult with an expert"
          description="Fames adipiscing lorem ultrices faucibus fusce sagittis sed imperdiet dolor sagittis."
          buttonText="Book a consultation"
          amount={1000000}
          path=""
          lists={[
            "Tortor interdum condimentum nunc",
            "Purus orci netus suscipit",
            "Feugiat in nunc nunc eget sit eus agit",
            "Purus orci netus suscipit",
            "Justo et in sagittis pharetra tellus",
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
