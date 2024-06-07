import ServiceSection from "../../ui/serviceSection";

export default function CustomiseHow() {
  return (
    <div className="customise__how app-container">
      <div className="customise-content app-container__section">
        <p className="customise-subtitle subtitle">How it works</p>
        <div className="customise__how__content">
          <ServiceSection
            title="Browse our template Library"
            buttonText="Customize a document"
            imgSrc="/images/How1.png"
            subtitle="How it works"
            path="/customise/document"
            description="Explore a wide range of lawyer-approved templates categorised by 
            business type. Find the document you need, whether it's a client contract for 
            independent contractors, a non-disclosure agreement (NDA) for startups, or 
            website terms & conditions for SMEs."
          />

          <ServiceSection
            title="Easy Customization"
            buttonText="Customize a document"
            imgSrc="/images/How2.png"
            path="/customise/document"
            description="Answer a few simple questions to tailor the template to your needs. 
            We guide you through the process, ensuring you put the right information in the right places.."
          />

          <ServiceSection
            title="Download and Use"
            buttonText="Customize a document"
            imgSrc="/images/How3.png"
            path="/customise/document"
            description="Once customized, download your document in a format that's easy to use and share."
          />
        </div>
      </div>
    </div>
  );
}
