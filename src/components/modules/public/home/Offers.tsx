import { useEffect, useState } from "react";
import { Offer } from "../../ui/offer";
import useRequest from "../../../hooks/useRequest";
import { toast } from "react-hot-toast";
import { getCategories } from "../../../../api/home";

interface Category {
  name: string;
  displayName: string;
  description: string;
  variant: "purple" | "green" | "blue" | "plain";
  iconName: string;
  path: string;
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

  const getCategory = async () => {
    const [res, err] = await makeRequest();

    if (err) {
      toast.error(err.message);
    }
    if (res) {
      console.log("CATEGORIES>>>>", res.data);
      setCategories(res.data);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="home__offers app-container">
      <div className="home__offers__content app-container__section">
        {categories?.map((category, i) => {
          // const offerItems = offers[category.name];

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
      </div>
    </div>
  );
}
