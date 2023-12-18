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
          title="Tier 1 name lorem"
          description="Fames adipiscing lorem ultrices faucibus fusce sagittis sed imperdiet dolor sagittis."
          amount={0}
          buttonText="Subscribe to Tier 1"
          path="/coming"
          lists={[
            "Tortor interdum condimentum nunc",
            "Purus orci netus suscipit",
            "Feugiat in nunc nunc eget sit eus agit",
          ]}
          buttonVariant="primary"
          iconVariant="gradient"
        />

        <Offer
          variant="plain"
          title="Tier 1 name lorem"
          description="Fames adipiscing lorem ultrices faucibus fusce sagittis sed imperdiet dolor sagittis."
          buttonText="Subscribe to Tier 2"
          amount={0}
          path="/coming"
          lists={[
            "Tortor interdum condimentum nunc",
            "Purus orci netus suscipit",
            "Feugiat in nunc nunc eget sit eus agit",
            "Purus orci netus suscipit",
          ]}
          buttonVariant="primary"
          iconVariant="gradient"
        />

        <Offer
          variant="plain"
          title="Tier 1 name lorem"
          description="Fames adipiscing lorem ultrices faucibus fusce sagittis sed imperdiet dolor sagittis."
          buttonText="Subscribe to Tier 3"
          amount={0}
          path="/coming"
          lists={[
            "Tortor interdum condimentum nunc",
            "Purus orci netus suscipit",
            "Feugiat in nunc nunc eget sit eus agit",
            "Purus orci netus suscipit",
            "Justo et in sagittis pharetra tellus",
          ]}
          buttonVariant="primary"
          iconVariant="gradient"
        />
      </div>
    </div>
  );
}
