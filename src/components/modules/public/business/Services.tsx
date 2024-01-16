import ServiceSection from "../../ui/serviceSection";

export default function BusinessServices() {
  return (
    <div className="business__services app-container">
      <h5 className="business__services__subtitle">
        Our full range of business services
      </h5>
      <div className="business__services__content app-container__section">
        <ServiceSection
          title="Formation of a business headline lorem"
          buttonText="Get started"
          imgSrc="/images/Business1.png"
          path="/businessregistration"
          lists={[
            "Tortor interdum condimentum nunc molestie",
            "Purus orci netus suscipit sagittis nec duis",
            "Tortor interdum condimentum nunc molestie",
            "Feugiat in nunc nunc eget sit eus agit is nec dui",
          ]}
          description="Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
          facilisis arcu elit. Fames adipiscing lorem ultrices faucibus fusce."
        />

        <ServiceSection
          title="Business compliance services"
          buttonText="Get started"
          imgSrc="/images/Business2.png"
          path="/coming"
          lists={[
            "Tortor interdum condimentum nunc molestie",
            "Purus orci netus suscipit sagittis nec duis",
            "Tortor interdum condimentum nunc molestie",
            "Feugiat in nunc nunc eget sit eus agit is nec dui",
          ]}
          description="Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
          facilisis arcu elit. Fames adipiscing lorem ultrices faucibus."
        />

        <ServiceSection
          title="Bespoke contract solutions"
          buttonText="Get started"
          imgSrc="/images/Business3.png"
          path="/coming"
          lists={[
            "Tortor interdum condimentum nunc molestie",
            "Purus orci netus suscipit sagittis nec duis",
            "Tortor interdum condimentum nunc molestie",
          ]}
          description="Lorem ipsum dolor sit amet consectetur. Pellentesque nibh aliquam
          semper pharetra mauris pharetra massa non. Non commodo purus eu
          nunc. Molestie magna ut sed venenatis adipiscing diam interdum.
          Praesent consequat eleifend in."
        />

        <ServiceSection
          title="Intellectual property services"
          buttonText="Get started"
          imgSrc="/images/Business4.png"
          path="/coming"
          lists={[
            "Tortor interdum condimentum nunc molestie",
            "Purus orci netus suscipit sagittis nec duis",
            "Tortor interdum condimentum nunc molestie",
            "Tortor interdum condimentum nunc molestie",
          ]}
          description="Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
          facilisis arcu elit."
        />

        <ServiceSection
          title="Tax insurance VAT services"
          buttonText="Get started"
          imgSrc="/images/Business5.png"
          path="/coming"
          lists={[
            "Tortor interdum condimentum nunc molestie",
            "Purus orci netus suscipit sagittis nec duis",
            "Tortor interdum condimentum nunc molestie",
            "Tortor interdum condimentum nunc molestie",
          ]}
          description="Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat
          facilisis arcu elit."
        />
      </div>
    </div>
  );
}
