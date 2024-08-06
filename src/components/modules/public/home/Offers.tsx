// import { useEffect } from "react";
import { Offer } from '../../ui/offer'
// import useRequest from "../../../hooks/useRequest";
// import { toast } from "react-hot-toast";
// import { getCategories } from "../../../../api/home";

// interface Category {
//   name: string;
//   displayName: string;
//   description: string;
// }

interface Offers {
  name: string
  variant: 'purple' | 'green' | 'blue' | 'plain'
  iconName: 'document' | 'pie' | 'user'
  path: string
  title: string
  description: string
}

const offers: Offers[] = [
  {
    name: 'template',
    variant: 'purple',
    iconName: 'document',
    path: '/customise',
    title: 'Create Customized Legal Documents',
    description:
      'Choose from our templates, answer a few questions and get lawyer-vetted documents tailored to your needs.',
  },

  {
    name: 'business_registration',
    variant: 'green',
    iconName: 'pie',
    path: '/business',
    description:
      'From registration to compliance, DocuTrove provides everything your business needs to stay on the right side of the law.',
    title: 'Business Legal Support',
  },

  {
    name: 'consultation',
    variant: 'blue',
    iconName: 'user',
    path: '/consultation',
    title: 'Schedule a Consultation',
    description:
      'Speak to qualified experts on legal matters across several disciplines. Consult with top legal minds in the Country and find a resolution easily.',
  },
]

export default function HomeOffers() {
  // const { makeRequest, response } = useRequest(getCategories);

  // const getCategory = async () => {
  //   const [_, err] = await makeRequest();

  //   if (err) {
  //     toast.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   getCategory();
  // }, []);

  return (
    <div className="home__offers app-container">
      <div className="home__offers__content app-container__section">
        <>
          {offers.map((offer, index) => {
            return (
              <Offer
                key={index}
                variant={offer.variant}
                iconName={offer.iconName}
                title={offer.title}
                description={offer.description}
                path={offer.path}
                buttonText="Discover More"
                buttonVariant="secondary"
              />
            )
          })}
        </>

        {/* {response?.data?.map((category: Category, i: number) => {
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
        })} */}
      </div>
    </div>
  )
}
