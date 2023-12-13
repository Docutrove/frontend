import "./index.scss";

interface HeroTitleProps {
  title: string;
  description: string;
}

export default function HeroTitle({ title, description }: HeroTitleProps) {
  return (
    <div className="hero-title app-container">
      <div className="hero-title__content app-container__section">
        <h1 className="hero-title__content__header">{title}</h1>
        <h6 className="hero-title__content__description">{description}</h6>
        <img src="/images/Polygon_6.png" alt="" className="polygon" />
      </div>
    </div>
  );
}
