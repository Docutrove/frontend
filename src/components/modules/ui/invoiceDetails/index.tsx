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
  backgroundColor?: string
  fullWidth?: boolean
  hideBackButton?: boolean
  showPrivacyInfo?: boolean
}

export default function InvoiceDetails({
  subtitle,
  categories,
  title,
  back_button,
  children,
  document_text,
  backClick,
  backgroundColor,
  fullWidth,
  hideBackButton,
}: InvoiceDetailsProps) {
  const invoiceDetailsClass = classNames('invoice-details', {
    'full-width': fullWidth, // Add 'full-width' class conditionally
  })

  const templateContainerStyle = fullWidth ? { width: '50vw' } : {}

  return (
    <>
      <NavBar hasBorder />
      <div className={invoiceDetailsClass} style={{ backgroundColor }}>
        <div className="invoice-details__content">
          <div className="invoice-details__text">
            <p className="invoice-subtitle gradient-subtitle">{subtitle}</p>

            {back_button && !hideBackButton && (
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
