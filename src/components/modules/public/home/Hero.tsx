import BaseButton from "../../ui/button";

export default function HomeHero() {
  return (
    <div className="home__hero app-container">
      <div className="home__hero__content app-container__section">
        <div className="home__hero__content__text">
          <h1 className="home__hero__content__text__title">
            Access legal services and customize legal documents in minutes
          </h1>
          <h6 className="home__hero__content__text__description">
            Answer a few simple questions to generate a customized legal
            document, register your business or book an appointment with an
            experienced lawyer with just a few clicks.
          </h6>
          <BaseButton href="/customise" variant="primary" className="home-button">
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
