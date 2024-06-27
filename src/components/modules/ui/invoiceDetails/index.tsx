import { Icon } from '../Icon'
import NavBar from '../../public/navbar'
import { ReactNode } from 'react'
import parse from 'html-react-parser'
import classNames from 'classnames'
//import { Link } from 'react-router-dom'

interface InvoiceDetailsProps {
  subtitle?: string
  categories?: string
  title?: string | undefined
  back_button?: boolean
  children: ReactNode
  document_text: string | undefined
  backClick?: () => void
  backgroundColor?: string // New prop for background color
  fullWidth?: boolean // New prop for full width
  hideBackButton?: boolean // New prop for hiding back button
  showPrivacyInfo?: boolean // New prop for showing privacy info
}

export default function InvoiceDetails({
  subtitle,
  categories,
  title,
  back_button,
  children,
  document_text,
  backClick,
  backgroundColor, // Destructure backgroundColor from props
  fullWidth, // Destructure fullWidth from props
  hideBackButton, // Destructure hideBackButton from props
}: // showPrivacyInfo = false, // Destructure showPrivacyInfo from props with default value
InvoiceDetailsProps) {
  const invoiceDetailsClass = classNames('invoice-details', {
    'full-width': fullWidth, // Add 'full-width' class conditionally
  })

  const templateContainerStyle = fullWidth ? { width: '50vw' } : {} // Adjust width style conditionally

  return (
    <>
      <NavBar hasBorder />
      <div className={invoiceDetailsClass} style={{ backgroundColor }}>
        <div className="invoice-details__content">
          <div className="invoice-details__text">
            <p className="invoice-subtitle gradient-subtitle">{subtitle}</p>

            {back_button &&
              !hideBackButton && ( // Conditionally render back button section
                <button className="invoice-back-button" onClick={backClick}>
                  <div className="back-button">
                    <Icon name="caret-right" className="back-icon" />
                  </div>
                  <p className="text--xs">All templates / {categories}</p>
                </button>
              )}

            <div className="invoice-description">
              <h2 className="invoice-description__header">{title}</h2>
              {children}
            </div>
          </div>

          <div className="template-container" style={templateContainerStyle}>
            <div className="template-image">
              <p className="text--sm template-image__text">
                {parse(document_text || '')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
