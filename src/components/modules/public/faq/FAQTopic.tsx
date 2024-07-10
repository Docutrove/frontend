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
    q: "Who is DocuTrove for?",
    a: "DocuTrove caters to independent contractors, freelancers, startups, small businesses, and SMEs.",
  },
  {
    q: "Is DocuTrove a substitute for legal advice?",
    a: "DocuTrove’s legal document templates and general legal information are not substitutes for legal advice. For personalised legal advice from a lawyer, you can schedule a consultation.",
  },
  {
    q: "What types of legal documents does DocuTrove offer?",
    a: "DocuTrove offers a wide range of templates, including client contracts, NDAs, business registration documents, and more.",
  },
  {
    q: "Are the document templates lawyer-approved?",
    a: "Yes, our document templates are created and reviewed by experienced lawyers at TEMPLARS to ensure accuracy and compliance.",
  },
  {
    q: "How do I customise a document",
    a: "Before you fill out a document, you will be required to fill out forms with all the relevant questions that would tailor your document to your needs.",
  },
  {
    q: "Can I save my documents and come back to them later?",
    a: "Yes, DocuTrove allows you to save and access your customised documents anytime.",
  },
  {
    q: "Do I need to meet with a lawyer in person?",
    a: "Consultations can be both conducted physically and virtually through phone or video conferencing for your convenience.",
  },
  {
    q: "How much does DocuTrove cost?",
    a: "DocuTrove offers subscription plans for our services. You can choose the one best suited for you.",
  }
];
