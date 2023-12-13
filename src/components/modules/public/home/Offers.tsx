import { Offer } from "../../ui/offer";

export default function HomeOffers() {
  return (
    <div className="home__offers app-container">
      <div className="home__offers__content app-container__section">
        <Offer
          variant="purple"
          iconName="document"
          title="Customize a document"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum. 
          "
          path="/customise"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
        <Offer
          variant="green"
          iconName="pie"
          title="Business services"
          description="Tincidunt nulla in hac viverra lobortis proin. Magna nibh turpis facilisi urna nisi. Nulla morbi tempor enim vitae."
          path="/business"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
        <Offer
          variant="blue"
          iconName="user"
          title="Consult with an expert"
          description="Fames adipiscing lorem ultrices faucibus fusce sagittis sed imperdiet dolor sagittis."
          path="/consultation"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
      </div>
    </div>
  );
}
