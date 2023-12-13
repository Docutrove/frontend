import Accordion from "../../ui/accordion";
import "./index.scss"

interface FaqProps {
  data: {
    q: string;
    a: string;
  }[];
}

export default function FAQ({ data }: FaqProps) {
  return (
    <div className="app__faq app-container">
      <div className="app-container__section">
        <h2>FAQ</h2>
        <div className="app__faq__list">
          {data?.map(({ q, a }) => (
            <Accordion title={q} content={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
