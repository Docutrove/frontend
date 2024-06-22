import { ReactNode } from "react";
import { Icon } from "../Icon";
import GradientLayout from "../gradientLayout";
import "./index.scss";
import { Link } from "react-router-dom";

interface ThankYouProps {
  iconName: "document_tick" | "pie" | "user" | "plane";
  header: string;
  children: ReactNode;
  linkTo?: string
}

export default function ThankYou({
  iconName,
  header,
  children,
  linkTo,
}: ThankYouProps) {
  return (
    <GradientLayout className="thank-you">
      <div className="">
        <Icon name={iconName} className="thank-you__icon" />
        <h2 className="thank-you__title">{header}</h2>
        {children}

        <Link to={linkTo || '/'} className="invoice-back-button thank-you__back">
          <div className="back-button">
            <Icon name="caret-right" className="back-icon" />
          </div>
          <p className="text--xs">Back</p>
        </Link>
      </div>
    </GradientLayout>
  );
}
