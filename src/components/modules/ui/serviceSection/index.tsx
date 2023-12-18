import BaseButton from "../button";
import "./index.scss";
import { Icon } from "../Icon";

interface ServiceSectionProps {
  subtitle?: string;
  title: string;
  buttonText: string;
  imgSrc: string;
  lists?: string[];
  description?: string;
  path: string;
}
export default function ServiceSection({
  subtitle,
  title,
  buttonText,
  imgSrc,
  description,
  lists,
  path,
}: ServiceSectionProps) {
  return (
    <div className="service-section">
      <div className="service-section__text">
        <p className="service-section__subtitle subtitle">{subtitle}</p>
        <h3 className="title">{title}</h3>
        <p className="description text--sm">{description}</p>

        <div className="offer__lists">
          {lists?.map((list, index) => (
            <div key={index} className="offer__lists__list">
              <div className="tick-icon--gradient">
                <Icon name="tick" />
              </div>
              <p className="text--xs">{list}</p>
            </div>
          ))}
        </div>
        <BaseButton href={path} variant="primary" className="service-button">
          {buttonText}
        </BaseButton>
      </div>
      <div className="service-section__image">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}
