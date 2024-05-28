import BaseButton from "../button";
import "./index.scss";

interface ServiceProps {
  className?: string;
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  path?: string;
  buttonText?: string;
  imageURL: string;
}

export default function Service({
  className,
  title,
  description,
  description2,
  description3,
  path,
  buttonText,
  imageURL,
}: ServiceProps) {
  return (
    <div className={`service app-container ${className}`}>
      <div className="service__content app-container__section">
        <div className="service__content__text">
          <h2 className="service__content__text__title">{title}</h2>
          <p className="service__content__text__description text--sm">
            {description}
          </p>
          <p className="service__content__text__description text--sm">
            {description2}
          </p>
          <p className="service__content__text__description text--sm">
            {description3}
          </p>
          <BaseButton href={path} variant="primary" className="service-button">
            {buttonText}
          </BaseButton>
        </div>
        <img src={imageURL} alt="" className="service__content__image" />
      </div>
    </div>
  );
}
