import { useState } from "react";
import { Icon } from "../Icon";
import "./index.scss";

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion">
      <div className="accordion__title" onClick={toggle}>
        <h5>{title}</h5>
        <div className="accordion__title__icon">
          <Icon
            name="caret-right"
            className={`${isOpen ? "rotate-down" : "rotate-up"}`}
          />
        </div>
      </div>
      <p className={`accordion__content text--sm ${isOpen ? "active" : ""}`}>
        {content}
      </p>
    </div>
  );
}
