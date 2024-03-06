import { useEffect, useState } from "react";
import { Offer } from "../../ui/offer";
import useRequest from "../../../hooks/useRequest";
import { toast } from "react-hot-toast";

interface Category {
  name: string;
  displayName: string;
  description: string;
}

// const offers = [
//   {
//     variant: "purple",
//     iconName: "document",
//     path: "/customisedocument",
//   },

//   {
//     variant: "green",
//     iconName: "pie",
//     path: "/coming",
//   },

//   {
//     variant: "blue",
//     iconName: "user",
//     path: "/coming",
//   },
// ];

export default function HomeOffers() {
  const [categories, setCategories] = useState<Category[]>();
  const { makeRequest } = useRequest(getCategories);

  async function getCategories() {
    const [res, err] = await makeRequest();

    if (err) {
      toast.error(err.message);
    }
    if (res) {
      setCategories(res.data);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="home__offers app-container">
      <div className="home__offers__content app-container__section">
        {categories?.map((category, i) => {
          // const offerItems = offers[i];
          return (
            <Offer
              key={i}
              variant="purple"
              iconName="document"
              title={category.displayName}
              description={category.description}
              path="/customisedocument"
              buttonText="Discover More"
              buttonVariant="secondary"
            />
          );
        })}
        {/* 
        <Offer
          variant="green"
          iconName="pie"
          title="Business services"
          description="Comprehensive Legal Support for Your Enterprise."
          path="/coming"
          buttonText="Discover More"
          buttonVariant="secondary"
        />
        <Offer
          variant="blue"
          iconName="user"
          title="Consult a lawyer"
          description="Our team, qualified across multiple jurisdictions, delivers customized legal solutions.
          "
          path="/coming"
          buttonText="Discover More"
          buttonVariant="secondary"
        /> */}
      </div>
    </div>
  );
}
