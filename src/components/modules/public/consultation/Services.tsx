import ServiceSection from "../../ui/serviceSection";

export default function ConsultationServices() {
  return (
    <div className="consultation__services app-container">
      <div className="consultation__services__content app-container__section">
        <ServiceSection
          title="Meet a Lawyer"
          buttonText="Book a Lawyer"
          imgSrc="/images/consultation1.png"
          path="/consultation/book"
          description="Connect with a lawyer specialising in your industry or legal 
          area of concern. Consultations can be conducted virtually for your convenience. 
          Discuss your legal concerns, receive expert advice, and understand your options."
        />

        <ServiceSection
          title="Get Counsel"
          buttonText="Book a counsel"
          imgSrc="/images/consultation2.png"
          path="/consultation/book"
          description="Develop a Legal Strategy; a team of lawyers can help you develop a 
          comprehensive legal strategy aligned with your business goals. Focus on running 
          your business with the confidence of knowing your legal needs are covered."
        />
      </div>
    </div>
  );
}
