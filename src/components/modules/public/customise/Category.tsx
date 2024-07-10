import { Offer } from "../../ui/offer";

interface Category {
  variant: "purple" | "green" | "blue" | "plain";
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    variant: "purple",
    title: "Browse our template Library",
    description: "Explore a wide range of lawyer-approved templates categorised by business type. Find the document you need, whether it's a client contract for independent contractors, a non-disclosure agreement (NDA) for startups, or website terms & conditions for SMEs.",
  },

  {
    variant: "green",
    description: "Answer a few simple questions to tailor the template to your needs. We guide you through the process, ensuring you put the right information in the right places..",
    title: "Easy Customization",
  },

  {
    variant: "blue",
    title: "Download and Use",
    description: "Once customized, download your document in a format that's easy to use and share.",
  },
];

export default function HomeOffers() {

  return (
    <div className="home__offers app-container">
    <h3 className="customise__category">How it works</h3>
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
