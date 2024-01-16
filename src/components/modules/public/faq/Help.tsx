import { Icon } from "../../ui/Icon";

export default function FAQHelp() {
  return (
    <div className="faq__help">
      <p className="gradient-subtitle text--sm">Help and support</p>
      <h2 className="gradient-title">
        Need more information? Choose your topic below
      </h2>
      <div className="faq__help__links">
        <div className="faq__help__links__link">
          <h5>Customize documents</h5>
          <div className="faq__help__links__link__icon">
            <Icon name="caret-right" />
          </div>
        </div>

        <div className="faq__help__links__link">
          <h5>Consultations & secondments</h5>
          <div className="faq__help__links__link__icon">
            <Icon name="caret-right" />
          </div>
        </div>

        <div className="faq__help__links__link">
          <h5>Business services</h5>
          <div className="faq__help__links__link__icon">
            <Icon name="caret-right" />
          </div>
        </div>

        {/* <div className="faq__help__links__link">
            <h5>Subscription services</h5>
            <div className="faq__help__links__link__icon">
              <Icon name="caret-right" />
            </div>
          </div> */}
      </div>
    </div>
  );
}
