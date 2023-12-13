import ServiceSection from "../../ui/serviceSection";

export default function CustomiseHow() {
  return (
    <div className="customise__how app-container">
      <div className="app-container__section">

        <div className="customise__how__content">
          <ServiceSection
            title="Lorem ipsum dolor sit amet consectetur"
            buttonText="Customize a document"
            imgSrc="/images/How1.png"
            subtitle="How it works"
          >
            Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
            facilisis arcu elit. Fames adipiscing lorem ultrices faucibus fusce
            sagittis sed imperdiet dolor. Nulla morbi tempor enim vitae.
          </ServiceSection>

          <ServiceSection
            title="Lorem ipsum dolor sit amet consectetur"
            buttonText="Customize a document"
            imgSrc="/images/How2.png"
          >
            Nulla morbi tempor enim vitae, mattis ante feugiat facilisis arcu
            elit. Fames adipiscing lorem ultrices faucibus fusce sagittis sed
            imperdiet dolor.
          </ServiceSection>

          <ServiceSection
            title="Lorem ipsum dolor sit amet consectetur"
            buttonText="Customize a document"
            imgSrc="/images/How3.png"
          >
            Fames adipiscing lorem ultrices faucibus fusce sagittis sed
            imperdiet dolor. Nulla morbi tempor enim vitae.
          </ServiceSection>
        </div>
      </div>
    </div>
  );
}
