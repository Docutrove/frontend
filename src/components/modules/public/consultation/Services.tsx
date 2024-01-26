import ServiceSection from "../../ui/serviceSection";

export default function ConsultationServices() {
  return (
    <div className="consultation__services app-container">
      <div className="consultation__services__content app-container__section">
        <ServiceSection
          title="Book counsel headline lorem ipsum dolor"
          buttonText="Book a counsel"
          imgSrc="/images/consultation1.png"
          path="/bookconsultation"
          description="Lorem ipsum dolor sit amet consectetur. Tellus nisl in nisi nam
          consequat. Facilisi sed senectus euismod risus eget mattis ut rutrum
          nec. Cursus in nisl eget posuere amet. Rhoncus turpis blandit blandit
          enim orci sodales ullamcorper."
        />

        <ServiceSection
          title="Book lawyer headline lorem ipsum dolor"
          buttonText="Book a lawyer"
          imgSrc="/images/consultation2.png"
          path="/bookconsultation"
          description=" Nulla morbi tempor enim vitae, mattis ante feugiat facilisis arcu
          elit. Fames adipiscing lorem ultrices faucibus fusce sagittis sed
          imperdiet dolor. Facilisi sed senectus euismod risus eget mattis ut
          rutrum nec. Cursus in nisl eget posuere amet. Rhoncus turpis blandit
          blandit enim orci sodales."
        />
      </div>
    </div>
  );
}
