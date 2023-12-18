import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Layout from "../layout";
import "./index.scss";

export default function ComingSoon() {
  return (
    <Layout className="bg-gradient">
      <div className="coming-soon app-container">
        <div className="coming-soon__content">
          <h2>Coming Soon</h2>
          <h6 className="coming-soon__content__description">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </h6>
          <div className="coming-soon__content__input">
            <BaseInput placeholder="Enter your email address" />
            <BaseButton variant="primary" className="coming-button">
              Notify Me
            </BaseButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}
