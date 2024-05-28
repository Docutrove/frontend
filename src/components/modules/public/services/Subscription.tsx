import Service from "../../ui/service";

interface ServiceSubscriptionProps {
  className?: string;
}

export default function ServiceSubscription({ className }: ServiceSubscriptionProps) {
  return (
    <Service
      className={`home__subscription ${className}`}
      title="Find a subscription plan that works for you"
      description="Our plans provide access to a variety of benefits, allowing you to choose the level of support that best suits your requirements."
      imageURL="/images/subscription-banner.png"
      path="/subscription"
      buttonText="Choose A Plan"
    />
  );
}
