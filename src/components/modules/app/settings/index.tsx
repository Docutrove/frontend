import { useState } from "react";
import DocumentSettings from "./DocumentSettings";
import SubscriptionSettings from "./SubscriptionSettings";
import InvoiceSettings from "./InvoiceSettings";
import AccountSettings from "./AccountSettings";
import NavBar from "../../public/navbar";
import Footer from "../../public/footer";
import "./index.scss";
import classNames from "classnames";

const TABS = ["Documents", "Subscription", "Invoices", "Account Settings"];

export default function Settings() {
  const [activeTab, switchTab] = useState(TABS[3]);

  return (
    <div className="settings bg-gradient">
      <NavBar />
      <h5 className="settings__header">Account Settings</h5>
      <div className="tabs-wrapper">
        <div className="settings__content__tabs">
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => switchTab(tab)}
              className={classNames({ "active-tab": activeTab === tab })}
            >
              <h6>{tab}</h6>
            </button>
          ))}
        </div>
      </div>
      <div className="app-container">
        <div className="settings__content">
          {activeTab === "Documents" && <DocumentSettings />}
          {activeTab === "Subscription" && <SubscriptionSettings />}
          {activeTab === "Invoices" && <InvoiceSettings />}
          {activeTab === "Account Settings" && <AccountSettings />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
