import { ReactNode } from "react";
import BaseButton from "../button";
import "./index.scss";

interface ServiceSectionProps {
  subtitle?: string;
  title: string;
  children: ReactNode;
  buttonText: string;
  imgSrc: string;
}
export default function ServiceSection({
  subtitle,
  title,
  children,
  buttonText,
  imgSrc,
}: ServiceSectionProps) {
  return (
    <div className="service-section">
      <div className="service-section__text">
        <p className="service-section__subtitle subtitle">{subtitle}</p>
        <h3 className="title">{title}</h3>
        <div className="description text--sm">{children}</div>
        {/* <p className="description text--sm">{description}</p> */}
        <BaseButton variant="primary">{buttonText}</BaseButton>
      </div>
      <div className="service-section__image">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}
