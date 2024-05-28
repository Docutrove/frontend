import ServiceSection from "../../ui/serviceSection";

export default function BusinessServices() {
  return (
    <div className="business__services app-container">
      <h5 className="business__services__subtitle">
        Our full range of business services
      </h5>
      <div className="business__services__content app-container__section">
        <ServiceSection
          title="Company Formation & Registration"
          buttonText="Get started"
          imgSrc="/images/Business1.png"
          path="/business/formation"
          lists={[
            "Business Name Reservation",
            "Business Registration",
            "Regulatory Compliance",
          ]}
          description="Ensure a smooth launch with expert guidance on everything you need to start well."
        />

        <ServiceSection
          title="Ongoing Legal Maintenance:"
          buttonText="Schedule Consultation"
          imgSrc="/images/Business2.png"
          path="/coming"
          lists={[
            "Company secretarial services",
            "Annual report filing",
            "Permit Renewal",
          ]}
          description="We handle essential tasks that keep your business compliant such as"
        />

        <ServiceSection
          title="Contract Review & Negotiation"
          buttonText="Schedule Consultation"
          imgSrc="/images/Business3.png"
          path="/coming"
          lists={[
            "Contract Review",
            "Identification of potential Risks",
            "Negotiation of terms that protect your interest",
          ]}
          description="Our experienced lawyers can help and protect you from bad decisions through."
        />

        <ServiceSection
          title="Compliance support"
          buttonText="Schedule consultation"
          imgSrc="/images/Business4.png"
          path="/coming"
          lists={[
            "Data Privacy Laws",
            "Employment laws",
            "Industry-specific regulations",
          ]}
          description="Navigate complex legal regulations with confidence. DocuTrove helps you stay compliant with."
        />

        {/* <ServiceSection
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
        /> */}
      </div>
    </div>
  );
}
