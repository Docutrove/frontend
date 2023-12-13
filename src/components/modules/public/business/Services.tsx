import ServiceSection from "../../ui/serviceSection";

export default function BusinessServices() {
  return (
    <div className="business__services app-container">
      <h5 className="business__services__subtitle">Our full range of business services</h5>
      <div className="business__services__content app-container__section">
        <ServiceSection
          title="Formation of a business headline lorem"
          buttonText="Get started"
          imgSrc="/images/Business1.png"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
            facilisis arcu elit. Fames adipiscing lorem ultrices faucibus fusce.
          </p>
        </ServiceSection>

        <ServiceSection
          title="Business compliance services"
          buttonText="Get started"
          imgSrc="/images/Business2.png"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
            facilisis arcu elit. Fames adipiscing lorem ultrices faucibus.
          </p>
        </ServiceSection>

        <ServiceSection
          title="Bespoke contract solutions"
          buttonText="Get started"
          imgSrc="/images/Business3.png"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque nibh aliquam
            semper pharetra mauris pharetra massa non. Non commodo purus eu
            nunc. Molestie magna ut sed venenatis adipiscing diam interdum.
            Praesent consequat eleifend in.
          </p>
        </ServiceSection>

        <ServiceSection
          title="Intellectual property services"
          buttonText="Get started"
          imgSrc="/images/Business4.png"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
            facilisis arcu elit.
          </p>
        </ServiceSection>

        <ServiceSection
          title="Tax insurance VAT services"
          buttonText="Get started"
          imgSrc="/images/Business5.png"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
            facilisis arcu elit.
          </p>
        </ServiceSection>
      </div>
    </div>
  );
}
