import "./index.scss";

interface HeroTitleProps {
  title: string;
  description: string;
  imgSrc: string;
  className?: string;
}

export default function HeroTitle({
  title,
  description,
  imgSrc,
  className,
}: HeroTitleProps) {
  return (
    <div className="hero-title app-container">
      <div className="hero-title__content app-container__section">
        <h1 className="hero-title__content__header">{title}</h1>
        <h6 className="hero-title__content__description">{description}</h6>
        <img src={imgSrc} alt="" className={`polygon ${className}`} />
      </div>
    </div>
  );
}
