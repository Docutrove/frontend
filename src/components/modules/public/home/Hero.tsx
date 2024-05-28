import BaseButton from "../../ui/button";

export default function HomeHero() {
  return (
    <div className="home__hero app-container">
      <div className="home__hero__content app-container__section">
        <div className="home__hero__content__text">
          <h1 className="home__hero__content__text__title">
            You & Docutrove: Better Together
          </h1>
          <h6 className="home__hero__content__text__description">
            DocuTrove by Templars allows you to access easy-to-customise legal documents, 
            quick business registration and the expertise of experienced lawyers putting 
            you in control of your legal matters
          </h6>
          <BaseButton
            href="/services"
            variant="primary"
            className="home-button"
          >
            Get started
          </BaseButton>
        </div>
        <div className="home__hero__content__image">
          <img src="/images/Graphic.png" alt="" />
        </div>
      </div>
    </div>
  );
}
