import ServiceSection from "../../ui/serviceSection";

export default function HomeServices() {
  return (
    <div className="customise__how app-container">
      <div className="customise-content app-container__section">
        <p className="customise-subtitle subtitle">DOCUTROVE FOR INDEPENDENT CONTRACTORS</p>
        <div className="customise__how__content">
          <ServiceSection
            title="Focus on your craft, Trust us with legalese"
            buttonText="See Our Templates"
            imgSrc="/images/How1.png"
            subtitle="How it works"
            path="/customise"
            description="Ensure you have the right agreements to protect your interests and 
            income. You can get the documents you need in minutes from client contracts and 
            independent contractor agreements to non-disclosure agreements (NDAs)."
          />

          <ServiceSection
            title="Build a strong legal foundation for your startup"
            buttonText="Schedule A Consultation"
            imgSrc="/images/How2.png"
            path="/consultation"
            description="DocuTrove by Templars understands the unique legal needs of startups 
            and is here to help you navigate the legalities from day one. Start with everything 
            you need - business registration, employment contracts, shareholder agreements and more."
          />

          <ServiceSection
            title="Scale confidently with legal solutions"
            buttonText="See how we can support you"
            imgSrc="/images/How3.png"
            path="/business"
            description="Your legal needs become more complex as your small business or SME grows. 
            DocuTrove by Templars provides the scalable legal support you need to get through 
            every stage of your journey."
          />
        </div>
      </div>
    </div>
  );
}
