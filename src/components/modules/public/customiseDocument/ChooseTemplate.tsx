import { useCustomiseDocContext } from ".";
import GradientLayout from "../../ui/gradientLayout";

export default function ChooseTemplate() {
  const { goNext } = useCustomiseDocContext();
  return (
    <GradientLayout arrow>
      <div className="choose-document-type">
        <p className="gradient-subtitle text--sm">
          Customize and download a legal document
        </p>
        <h2 className="gradient-title">
          Select the specific template you need
        </h2>
        <p className="choose-document-type__text text--sm">
          Tech / Startup agreement templates:
        </p>
        <div className="options-grid">
          <div className="option" onClick={goNext}>
            <p>Template one</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template two</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template three</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template four</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template five</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template six</p>
          </div>
        </div>
      </div>
    </GradientLayout>
  );
}
