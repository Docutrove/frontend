import { Icon } from "../Icon";
import NavBar from "../../public/navbar";
import { ReactNode } from "react";

interface InvoiceDetailsProps {
  subtitle: string;
  title: string | undefined;
  back_button?: boolean;
  children: ReactNode;
  document_text: string | undefined;
  backClick?: () => void;
}

export default function InvoiceDetails({
  subtitle,
  title,
  back_button,
  children,
  document_text,
  backClick,
}: InvoiceDetailsProps) {
  return (
    <>
      <NavBar hasBorder />
      <div className="invoice-details">
        <div className="invoice-details__content">
          <div className="invoice-details__text">
            <p className="invoice-subtitle gradient-subtitle">{subtitle}</p>
            {back_button ? (
              <button className="invoice-back-button" onClick={backClick}>
                <div className="back-button">
                  <Icon name="caret-right" className="back-icon" />
                </div>
                <p className="text--xs">All templates</p>
              </button>
            ) : (
              ""
            )}

            <div className="invoice-description">
              <h2 className="invoice-description__header">{title}</h2>

              {children}
            </div>
          </div>
          <div className="template-container">
            <div className="template-image">
              <p className="text--sm template-image__text">{document_text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
