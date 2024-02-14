import { Link } from "react-router-dom";
import Layout from "../../public/layout";
import SubscriptionServices from "../../public/subscription/Services";
import { Icon } from "../../ui/Icon";
import "../../public/subscription/index.scss";

export default function ChangePlan() {
  return (
    <Layout className="change-plan">
      <SubscriptionServices title="Our range of subscription services" className="change-plan__subscription" />

      <Link to="/settings" className="invoice-back-button change-plan__button">
        <div className="back-button">
          <Icon name="caret-right" className="back-icon" />
        </div>
        <p className="text--xs">Back to account settings</p>
      </Link>
    </Layout>
  );
}
