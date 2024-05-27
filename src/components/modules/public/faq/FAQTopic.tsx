import Accordion from "../../ui/accordion";
import BaseButton from "../../ui/button";
import GradientLayout from "../../ui/gradientLayout";

export default function FAQTopic() {
  return (
    <GradientLayout arrow className="faq-topic">
      <div className="faq__help">
        <p className="gradient-subtitle text--sm">Help and support</p>
        <h2 className="gradient-title">Chosen topic lorem ipsum</h2>
        <div className="app__faq__list">
          {DATA?.map(({ q, a }) => (
            <Accordion title={q} content={a} />
          ))}
        </div>
        <BaseButton variant="primary" className="faq-button" href="/faq">
          View all topics
        </BaseButton>
      </div>
    </GradientLayout>
  );
}

const DATA = [
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    a: "Lorem ipsum dolor sit amet consectetur. Sem egestas vitae eget gravida gravida amet magna sit. At augue vitae lectus imperdiet eu justo. Mi aliquet pretium quisque eros hendrerit facilisis ultricies. Aliquam eget tincidunt pulvinar felis est. Etiam sit donec elementum leo at. Justo ac aliquet amet libero odio. Morbi enim amet adipiscing facilisis tempus.",
  },
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    a: "Lorem ipsum dolor sit amet consectetur. Sem egestas vitae eget gravida gravida amet magna sit. At augue vitae lectus imperdiet eu justo. Mi aliquet pretium quisque eros hendrerit facilisis ultricies. Aliquam eget tincidunt pulvinar felis est. Etiam sit donec elementum leo at. Justo ac aliquet amet libero odio. Morbi enim amet adipiscing facilisis tempus.",
  },
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    a: "Lorem ipsum dolor sit amet consectetur. Sem egestas vitae eget gravida gravida amet magna sit. At augue vitae lectus imperdiet eu justo. Mi aliquet pretium quisque eros hendrerit facilisis ultricies. Aliquam eget tincidunt pulvinar felis est. Etiam sit donec elementum leo at. Justo ac aliquet amet libero odio. Morbi enim amet adipiscing facilisis tempus.",
  },
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    a: "Lorem ipsum dolor sit amet consectetur. Sem egestas vitae eget gravida gravida amet magna sit. At augue vitae lectus imperdiet eu justo. Mi aliquet pretium quisque eros hendrerit facilisis ultricies. Aliquam eget tincidunt pulvinar felis est. Etiam sit donec elementum leo at. Justo ac aliquet amet libero odio. Morbi enim amet adipiscing facilisis tempus.",
  },
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    a: "Lorem ipsum dolor sit amet consectetur. Sem egestas vitae eget gravida gravida amet magna sit. At augue vitae lectus imperdiet eu justo. Mi aliquet pretium quisque eros hendrerit facilisis ultricies. Aliquam eget tincidunt pulvinar felis est. Etiam sit donec elementum leo at. Justo ac aliquet amet libero odio. Morbi enim amet adipiscing facilisis tempus.",
  },
];
