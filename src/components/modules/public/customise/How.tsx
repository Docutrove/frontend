import ServiceSection from "../../ui/serviceSection";

export default function CustomiseHow() {
  return (
    <div className="customise__how app-container">
      <div className="customise-content app-container__section">
        <p className="customise-subtitle subtitle">How it works</p>
        <div className="customise__how__content">
          <ServiceSection
            title="Independent Contractors & Freelancers"
            buttonText="Customize a document"
            imgSrc="/images/How1.png"
            subtitle="Template Categories"
            path="/customise/document"
            description="Client contracts, independent contractor agreements, NDAs, copyright 
            transfer agreements, and more."
          />

          <ServiceSection
            title="Startups"
            buttonText="Customize a document"
            imgSrc="/images/How2.png"
            path="/customise/document"
            description="Business registration documents, shareholder agreements, stock option plans, 
            website terms & conditions, and privacy policies."
          />

          <ServiceSection
            title="Small Businesses & SMEs"
            buttonText="Customize a document"
            imgSrc="/images/How3.png"
            path="/customise/document"
            description="Employment contracts, non-compete agreements, intellectual property protection documents, website legal, and business licenses."
          />
        </div>
      </div>
    </div>
  );
}
