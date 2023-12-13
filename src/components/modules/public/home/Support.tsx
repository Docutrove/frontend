import { Icon } from "../../ui/Icon";


export default function HomeSupport() {
  return (
    <div className="home__support app-container">
      <div className="home__support__content app-container__section">
        <p className="subtitle">Help & support</p>
        <h2 className="home__support__content__title">
          Need more information? Choose your topic below
        </h2>

        <div className="home__support__content__links">
          <div className="home__support__content__links__link">
            <h5>Customize documents</h5>
            <div className="home__support__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div>

          <div className="home__support__content__links__link">
            <h5>Business services</h5>
            <div className="home__support__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div>

          <div className="home__support__content__links__link">
            <h5>Consultations & secondments</h5>
            <div className="home__support__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div>

          <div className="home__support__content__links__link">
            <h5>Subscription services</h5>
            <div className="home__support__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
