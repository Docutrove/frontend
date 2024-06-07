import BaseButton from "../../ui/button";

export default function HomeCTABanner() {
  return (
    <div className="home__banner app-container">
      <div className="home__banner__content">
        <p className="subtitle">SIGN UP</p>
        <h2 className="home__banner__content__title">Create your account now to access legal services easily.</h2>
        <BaseButton href="/signup" variant="primary">
          Get Started
        </BaseButton>
        <div>
          <img src="/images/Polygon_7.png" alt="" className="polygon" />
          <img src="/images/Polygon_8.png" alt="" className="polygon" />
          <img src="/images/Polygon_9.png" alt="" className="polygon" />
        </div>
      </div>
    </div>
  );
}
