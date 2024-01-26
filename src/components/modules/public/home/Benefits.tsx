import BaseButton from "../../ui/button";

export default function HomeBenefits() {
  return (
    <div className="home__benefits app-container">
      <div className="home__benefits__content app-container__section">
        <div className="mobile-header">
          {/* <p className="subtitle">Benefits</p> */}
          <h2 className="home__benefits__title">Benefits</h2>
        </div>

        <div className="home__benefits__wrapper">
          <div className="home__benefits__benefit green">
            <h4>Automated Legal Templates</h4>
            <div className="benefit-descriptions">
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  <span>Wide Selection:</span> Choose from a diverse range of
                  templates covering various business scenarios, ensuring
                  comprehensive legal protection.
                </p>
              </div>
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  <span>Ease of Use:</span> Our user-friendly platform
                  simplifies the document creation process, allowing you to
                  access and customize templates with ease.
                </p>
              </div>
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  <span>Compliance Assurance:</span> Rest assured that our
                  templates are designed to meet legal compliance standards,
                  reducing the risk of errors and legal issues.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="web-header">
              {/* <p className="subtitle">Benefits</p> */}
              <h2 className="home__benefits__title">Benefits</h2>
            </div>
            <div className="home__benefits__benefit purple">
              <h4>Expert Legal Consultation</h4>
              <div className="benefit-descriptions">
                <div className="benefit-descriptions__description">
                  <div className="bullet"></div>
                  <p className="text--sm">
                    <span>Experienced Legal Team:</span> Connect with our team
                    of seasoned lawyers, each with expertise in multiple
                    jurisdictions, ensuring a wealth of legal knowledge.
                  </p>
                </div>
                <div className="benefit-descriptions__description">
                  <div className="bullet"></div>
                  <p className="text--sm">
                    <span>Personalized Advice:</span> Receive tailored legal
                    guidance and bespoke solutions tailored to your specific
                    business needs.
                  </p>
                </div>
                <div className="benefit-descriptions__description">
                  <div className="bullet"></div>
                  <p className="text--sm">
                    <span>Confidence and Assurance:</span> Benefit from the
                    confidence of knowing that your legal matters are in the
                    hands of professionals with a track record of success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="home__benefits__benefit blue">
            <h4>Efficient and Cost-Effective</h4>
            <div className="benefit-descriptions">
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  <span>Time Savings:</span> Streamline your legal documentation
                  process, saving valuable time that can be better spent on your
                  core business activities.
                </p>
              </div>
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  <span>Reduced Costs:</span> Minimize legal expenses with our
                  cost-effective platform, which eliminates the need for
                  extensive legal consultations.
                </p>
              </div>
              <div className="benefit-descriptions__description">
                <div className="bullet"></div>
                <p className="text--sm">
                  <span>User-Friendly Interface:</span> Our platform ensures
                  that even users with limited legal knowledge can navigate and
                  create documents efficiently
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
