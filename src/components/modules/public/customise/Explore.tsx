import Service from "../../ui/service";

export default function CustomiseExplore() {
  return (
    <Service
      className="customise__explore"
      title="Explore our other services headline lorem"
      description="Lorem ipsum dolor sit amet consectetur. Mattis ante feugiat facilisis arcu elit. Fames adipiscing lorem ultrices faucibus fusce sagittis sed imperdiet dolor. Nulla morbi tempor enim vitae."
      path="/services"
      buttonText="Discover more"
      imageURL="/images/explore.png"
    />
  );
}
