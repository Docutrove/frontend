import ThankYou from "../../ui/thankYou";

export default function BusinessThank() {
  return (
    <ThankYou
      iconName="document_tick"
      header="Business Name Registration Completed!"
      linkTo="/business"
    >

      <p className="text--sm thank-you__description">
      Your business name application has been submitted.
      You’ll be notified when there is an update.
      </p>
    </ThankYou>
  );
}
