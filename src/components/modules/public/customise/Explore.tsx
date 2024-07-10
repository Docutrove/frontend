import Service from "../../ui/service";

export default function CustomiseExplore() {
  return (
    <Service
      className="customise__explore"
      title="Not what you are looking for?"
      description="Explore our other services or schedule a consultation with an expert to guide you through your situation."
      path="/services"
      buttonText="Schedule a Consultation"
      imageURL="/images/explore.png"
    />
  );
}
