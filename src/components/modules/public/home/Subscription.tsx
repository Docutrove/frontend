import Service from "../../ui/service";

interface HomeSubscriptionProps{
  className?: string;
}

export default function HomeSubscription({className}: HomeSubscriptionProps) {
  return (
    <Service
      className={`home__subscription ${className}`}
      title="Subscription services headline norem ipsum"
      description="Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat facilisis arcu elit. Fames adipiscing lorem ultrices faucibus fusce sagittis sed imperdiet dolor. Nulla morbi tempor enim vitae."
      buttonText="Discover our subscriptions services"
      imageURL="/images/subscription-banner.png"
      path="/subscription"

    />
  );
}
