import { Icon } from "../../ui/Icon";

export default function FAQHelp() {
  return (
    <div className="faq__help app-container">
      <div className="bg-arrow"></div>
      <div className="faq__help__content">
        <p className="faq__help__content__subtitle text--sm">
          Help and support
        </p>
        <h2 className="faq__help__content__title">
          Need more information? Choose your topic below
        </h2>
        <div className="faq__help__content__links">
          <div className="faq__help__content__links__link">
            <h5>Customize documents</h5>
            <div className="faq__help__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div>

          <div className="faq__help__content__links__link">
            <h5>Consultations & secondments</h5>
            <div className="faq__help__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div>

          <div className="faq__help__content__links__link">
            <h5>Business services</h5>
            <div className="faq__help__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div>

          <div className="faq__help__content__links__link">
            <h5>Subscription services</h5>
            <div className="faq__help__content__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
