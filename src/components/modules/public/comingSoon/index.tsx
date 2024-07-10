import BaseInput from "../../ui/input";
import Layout from "../layout";
import "./index.scss";

export default function ComingSoon() {
  return (
    <Layout className="bg-gradient">
      <div className="coming-soon app-container">
        <div className="coming-soon__content">
          <h2>Join The Waitlist</h2>
          <div className="coming-soon__content__input">
            <BaseInput placeholder="Enter your email address" />
            <button className="coming-button">Notify Me</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
