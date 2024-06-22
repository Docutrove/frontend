import { Offer } from "../../ui/offer";

interface Category {
  variant: "purple" | "green" | "blue" | "plain";
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    variant: "purple",
    title: "Independent Contractors & Freelancers:",
    description: "Client contracts, independent contractor agreements, NDAs, copyright transfer agreements, and more.",
  },

  {
    variant: "green",
    description: "Business registration documents, shareholder agreements, stock option plans, website terms & conditions, and privacy policies.",
    title: "Startups",
  },

  {
    variant: "blue",
    title: "Small Businesses & SMEs",
    description: "Employment contracts, non-compete agreements, intellectual property protection documents, website legal, and business licenses.",
  },
];

export default function HomeOffers() {

  return (
    <div className="home__offers app-container">
    <h3 className="customise__category">Template Categories</h3>
      <div className="home__offers__content app-container__section">
        <>
        { categories.map((category) => {
          return (
            <Offer
            variant={category.variant}
            title={category.title}
            description={category.description}
            />
          )
        })}
        </>
      </div>
    </div>
  );
}
