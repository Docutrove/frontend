import ThankYou from "../../ui/thankYou";

export default function BusinessThank() {
  return (
    <ThankYou
      iconName="document_tick"
      header="Business Name Registration Completed!"
      linkTo="/business"
    >
      <p className="text--sm thank-you__description">
      Your business name application has been and has begun processing. 
      You’ll be notified once it is successful.
      </p>
    </ThankYou>
  );
}
