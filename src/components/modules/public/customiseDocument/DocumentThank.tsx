import BaseButton from "../../ui/button";
import ThankYou from "../../ui/thankYou";

export default function DocumentThank() {
  return (
    <ThankYou iconName="document_tick" header="Thank you for using Docutrove">
        <h6 className="thank-you__subtitle">Your document is not ready to be downloaded</h6>
      <BaseButton variant="primary" className="thank-you__button">Download</BaseButton>

      <p className="text--sm thank-you__description">
        A copy of your document has also been emailed to email@addresslorem.com
        for your records.
      </p>
    </ThankYou>
  );
}
