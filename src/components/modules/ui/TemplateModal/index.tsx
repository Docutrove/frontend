import React, { useState, useEffect } from 'react'
import { Icon } from '../../ui/Icon'
import TemplateAccordion from '../TemplateAccordion'

export const accordionItems = [
  {
    header: 'What is an MOU?',
    body: 'DocuTrove caters to independent contractors, freelancers, startups, small businesses, and SMEs.',
  },
  {
    header: 'Who needs an MOU?',
    body: 'DocuTrove caters to independent contractors, freelancers, startups, small businesses, and SMEs.',
  },
  {
    header: 'How can an MOU be used?',
    body: 'DocuTrove caters to independent contractors, freelancers, startups, small businesses, and SMEs.',
  },
]

interface TemplateModalProps {
  isOpen: boolean
  onClose: () => void
}

const TemplateModal: React.FC<TemplateModalProps> = ({ isOpen, onClose }) => {
  const [modalContent, setModalContent] = useState<'accordion' | 'form'>(
    'accordion'
  )

  const handleOutsideClick = (e: MouseEvent) => {
    if (e.target === document.querySelector('.template-modal-overlay')) {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    } else {
      document.removeEventListener('click', handleOutsideClick)
      setModalContent('accordion') // Reset to accordion content when closed
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  const openForm = () => {
    setModalContent('form')
  }

  if (!isOpen) return null

  return (
    <div className="template-modal-overlay">
      <div className="template-modal-content">
        <div className="template-modal-header">
          <div className="template-modal-header-text">
            <h3>
              {modalContent === 'accordion' ? 'Need Help?' : 'Contact Support'}
            </h3>
            <p>
              {modalContent === 'accordion'
                ? 'Read our FAQs below to get answers you might need'
                : 'Fill in the fields below to contact our customer support'}
            </p>
          </div>
          <button className="template-modal-close" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <div className="template-modal-body">
          {modalContent === 'accordion' ? (
            <TemplateAccordion items={accordionItems} />
          ) : (
            <form className="contact-form">
              <label className="label">First Name</label>
              <input type="text" placeholder="Enter First Name" required />
              <label>Last Name</label>
              <input type="text" placeholder="Enter Last Name" required />
              <label>Email </label>
              <input
                type="email"
                placeholder="Andre.smith@templars.com"
                required
              />
              <label>Phone Number</label>
              <input type="tel" placeholder="+234 000 000 000" required />
              <label>Message</label>
              <textarea placeholder="Write here" rows={4} required></textarea>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
        {modalContent === 'accordion' && (
          <div className="template-modal-footer">
            <h1>Couldn't find an answer?</h1>
            <p>
              We will be happy to hear from you, reach out to our support team
            </p>
            <div className="contact-button" onClick={openForm}>
              Contact Support <Icon name="support-icon" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TemplateModal
