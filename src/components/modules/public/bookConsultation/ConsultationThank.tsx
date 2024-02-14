import BaseButton from "../../ui/button";
import ThankYou from "../../ui/thankYou";

export default function ConsultationThank() {
  return (
    <ThankYou
      iconName="user"
      header="Thank you for using Docutrove to register your business"
    >
      <p className="text--sm meeting">Your meeting details:</p>
      <p className="meeting-details">2pm - 4pm on the 12th June 2023</p>
      <BaseButton variant="primary" className="thank-you__button">
        Add to calendar
      </BaseButton>

      <p className="text--sm thank-you__description">
        A copy of your document has also been emailed to email@addresslorem.com
        for your records.
      </p>
    </ThankYou>
  );
}
