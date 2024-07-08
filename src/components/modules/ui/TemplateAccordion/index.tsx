import { useState } from 'react'
import { Icon } from '../../ui/Icon' // Adjust the import path as necessary

interface AccordionItem {
  header: string
  body: string
}

interface TemplateAccordionProps {
  items: AccordionItem[]
}

export default function TemplateAccordion({ items }: TemplateAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="template-accordion">
      {items.map((item, index) => (
        <div key={index} className="template-accordion-item">
          <div
            className="template-accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.header}</span>
            <Icon name={activeIndex === index ? 'caret-up' : 'caret-down'} />
          </div>
          {activeIndex === index && (
            <div className="template-accordion-body">{item.body}</div>
          )}
        </div>
      ))}
    </div>
  )
}
