import ServiceSection from "../../ui/serviceSection";

export default function CustomiseHow() {
  return (
    <div className="customise__how app-container">
      <div className="customise-content app-container__section">
        <p className="customise-subtitle subtitle">How it works</p>
        <div className="customise__how__content">
          <ServiceSection
            title="Lorem ipsum dolor sit amet consectetur"
            buttonText="Customize a document"
            imgSrc="/images/How1.png"
            subtitle="How it works"
            path="/customisedocument"
            description=" Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
            facilisis arcu elit. Fames adipiscing lorem ultrices faucibus fusce
            sagittis sed imperdiet dolor. Nulla morbi tempor enim vitae."
          />

          <ServiceSection
            title="Lorem ipsum dolor sit amet consectetur"
            buttonText="Customize a document"
            imgSrc="/images/How2.png"
            path="/customisedocument"
            description="Nulla morbi tempor enim vitae, mattis ante feugiat facilisis arcu
            elit. Fames adipiscing lorem ultrices faucibus fusce sagittis sed
            imperdiet dolor."
          />

          <ServiceSection
            title="Lorem ipsum dolor sit amet consectetur"
            buttonText="Customize a document"
            imgSrc="/images/How3.png"
            path="/customisedocument"
            description="Fames adipiscing lorem ultrices faucibus fusce sagittis sed
            imperdiet dolor. Nulla morbi tempor enim vitae."
          />
        </div>
      </div>
    </div>
  );
}
