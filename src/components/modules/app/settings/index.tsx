import { useState } from "react";
import DocumentSettings from "./DocumentSettings";
import SubscriptionSettings from "./SubscriptionSettings";
import InvoiceSettings from "./InvoiceSettings";
import AccountSettings from "./AccountSettings";
import NavBar from "../../public/navbar";
import Footer from "../../public/footer";
import "./index.scss";
import classNames from "classnames";

const TABS = ["Document", "Subscription", "Invoice", "Account"];

export default function Settings() {
  const [activeTab, switchTab] = useState(TABS[3]);

  return (
    <div className="settings bg-gradient">
      <NavBar />
      <h5 className="settings__header">Account Settings</h5>
      <div className="settings__content__tabs">
        {TABS.map((tab) => (
          <button
            onClick={() => switchTab(tab)}
            className={classNames({ "active-tab": activeTab === tab })}
          >
            <h6>{tab}</h6>
          </button>
        ))}
      </div>
      <div className="app-container">
        <div className="settings__content">
          {activeTab === "Document" && <DocumentSettings />}
          {activeTab === "Subscription" && <SubscriptionSettings />}
          {activeTab === "Invoice" && <InvoiceSettings />}
          {activeTab === "Account" && <AccountSettings />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
