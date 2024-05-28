import ThankYou from "../../ui/thankYou";

export default function BusinessThank() {
  return (
    <ThankYou
      iconName="user"
      header="Thank you for using Docutrove to register your business"
      linkTo="/business"
    >
      <p className="text--sm thank-you__description">
        A copy of your document has also been emailed to email@addresslorem.com
        for your records.
      </p>
    </ThankYou>
  );
}
