import { useEffect, useState } from "react";
import { Offer } from "../../ui/offer";
import { useAuthContext } from "../../../context/authContext";

interface Category {
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
  const { token } = useAuthContext();
  const [categories, setCategories] = useState<Category[]>();

  async function getCategories() {
    try {
      const res = await fetch(
        "http://3.142.252.101/api/v1/item/categories?page=1&limit=100",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const response = await res.json();
      console.log(response);
      if (response) {
        console.log("CATEGORIES>>>>", response.data);
        setCategories(response.data);
      }
    } catch (err: any) {
      // toast.error(err.message);
      console.log(err.message);
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
