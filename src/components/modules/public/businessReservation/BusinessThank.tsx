import ThankYou from "../../ui/thankYou";

export default function BusinessThank() {
  return (
    <ThankYou
      iconName="user"
      header="Thank you for using Docutrove to register your business"
    >
      <h6 className="meeting">What happens now?</h6>

      <div className="lists business-thank-lists">
        <div className="lists__list">
          <div className="tick-icon--black">
            <p className="text--2xs">1</p>
          </div>
          <p className="text--xs">
            Lorem ipsum dolor sit amet consectetur. Amet auctor adipiscing
            egestas.
          </p>
        </div>
        <div className="lists__list">
          <div className="tick-icon--black">
            <p className="text--2xs">2</p>
          </div>
          <p className="text--xs">
            Egestas in laoreet in nunc non urna sodales. Euismod diam vulputate
            velit
          </p>
        </div>
        <div className="lists__list">
          <div className="tick-icon--black">
            <p className="text--2xs">3</p>
          </div>
          <p className="text--xs">
            Tortor interdum condimentum nunc molestie quam lectus.
          </p>
        </div>
        <div className="lists__list">
          <div className="tick-icon--black">
            <p className="text--2xs">4</p>
          </div>
          <p className="text--xs">
            Lorem ipsum dolor sit amet consectetur. Amet auctor adipiscing
            egestas.
          </p>
        </div>
      </div>

      <p className="text--sm thank-you__description">
        A copy of your document has also been emailed to email@addresslorem.com
        for your records.
      </p>
    </ThankYou>
  );
}
