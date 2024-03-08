import { useEffect, useState } from "react";
import { Offer } from "../../ui/offer";
import useRequest from "../../../hooks/useRequest";
import { toast } from "react-hot-toast";
import { getCategories } from "../../../../api/home";

interface Category {
  name: string;
  displayName: string;
  description: string;
}

interface Offers {
  name: string;
  variant: "purple" | "green" | "blue" | "plain";
  iconName: "document" | "pie" | "user";
  path: string;
}

const offers: Offers[] = [
  {
    name: "template",
    variant: "purple",
    iconName: "document",
    path: "/customisedocument",
  },

  {
    name: "business_registration",
    variant: "green",
    iconName: "pie",
    path: "/coming",
  },

  {
    name: "consultation",
    variant: "blue",
    iconName: "user",
    path: "/coming",
  },
];

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

          const offerItem = offers.find(
            (offer) => offer.name === category.name
          );

          if (!offerItem) {
            console.warn(`No offer found for category: ${category.name}`);
            return null;
          }

          return (
            <Offer
              key={i}
              variant={offerItem.variant}
              iconName={offerItem.iconName}
              title={category.displayName}
              description={category.description}
              path={offerItem.path}
              buttonText="Discover More"
              buttonVariant="secondary"
            />
          );
        })}
      </div>
    </div>
  );
}
