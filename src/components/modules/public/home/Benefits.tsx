import BaseButton from "../../ui/button";

export default function HomeBenefits() {
  return (
    <div className="home__benefits app-container">
      <div className="app-container__section">
        <div className="home__benefits__wrapper">
          <div className="home__benefits__benefit green">
            <h4>Nunc vulputate</h4>
            <div className="benefit-descriptions">
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  Lorem ipsum dolor sit amet consectetur tincidunt nulla
                </p>
              </div>
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  Hac viverra lobortis proin magna nibh turpis facilisi urna
                </p>
              </div>
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  Eget magna tellus interdum interdum eget
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="subtitle">Benefits</p>
            <h2 className="home__benefits__title">
              Sorem ipsum dolor sit amet
            </h2>
            <div className="home__benefits__benefit purple">
              <h4>Consectetur</h4>
              <div className="benefit-descriptions">
                <div className="benefit-descriptions__description">
                  <div className="bullet"></div>
                  <p className="text--sm">
                    Magna nibh turpis facilisi urna nisi
                  </p>
                </div>
                <div className="benefit-descriptions__description">
                  <div className="bullet"></div>
                  <p className="text--sm">
                    Hac viverra lobortis proin magna nibh turpis facilisi urna
                  </p>
                </div>
                <div className="benefit-descriptions__description">
                  <div className="bullet"></div>
                  <p className="text--sm">
                    Eget magna tellus interdum interdum eget
                  </p>
                </div>
                <div className="benefit-descriptions__description">
                  <div className="bullet"></div>
                  <p className="text--sm">
                    Tincidunt nulla in hac viverra lobortis proin
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="home__benefits__benefit blue">
            <h4>Sed imperdiet</h4>
            <div className="benefit-descriptions">
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  Eget magna tellus interdum interdum eget Magna nibh turpis
                  facilisi urna nisi
                </p>
              </div>
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  Hac viverra lobortis proin magna nibh turpis facilisi urna
                  tincidunt nulla in hac viverra lobortis proin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <BaseButton
          href="/services"
          variant="primary"
          className="home__benefits__button"
        >
          View our services
        </BaseButton>
      </div>
    </div>
  );
}
