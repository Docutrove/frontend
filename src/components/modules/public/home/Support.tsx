import { Link } from "react-router-dom";
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
          <Link to="/customise" className="home__support__content__links__link">
            <h5>Create documents</h5>
            <div className="home__support__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </Link>

          <Link to="/business" className="home__support__content__links__link">
            <h5>Business services</h5>
            <div className="home__support__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </Link>

          <Link to="/consultation" className="home__support__content__links__link">
            <h5>Consultations</h5>
            <div className="home__support__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </Link>

          <Link to="/subscription" className="home__support__content__links__link">
            <h5>Subscription services</h5>
            <div className="home__support__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
