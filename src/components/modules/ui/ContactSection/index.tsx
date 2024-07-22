import React, { useState } from 'react'
import { Icon } from '../../ui/Icon'
import TemplateModal from '../TemplateModal'

interface ContactSectionProps {
  faqs: { title: string; description: string }[]
}

const ContactSection: React.FC<ContactSectionProps> = ({ faqs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="contact-section">
      <h1>Need Help?</h1>
      <p>Reach out to our Support for guidance</p>
      <div className="contact-button" onClick={openModal}>
        Contact Support <Icon name="support-icon" />
      </div>
      <TemplateModal isOpen={isModalOpen} onClose={closeModal} faqs={faqs} />
    </div>
  )
}

export default ContactSection
