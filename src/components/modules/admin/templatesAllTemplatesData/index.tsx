import React from 'react'
import './index.scss'
import { userData } from './data'

const TemplateDownloadAllDetails: React.FC = () => {
  const { templateDetails } = userData // Destructure only templateDetails since userDetails is not used

  return (
    <div className="template-download-details">
      <div className="card-section">
        <div className="downloadcard">
          <div className="card-header">
            <h2 className="card-header-text">Template Details</h2>
          </div>
          <div className="card-content">
            <p>
              Template Title
              <span className="card-content-row-value">
                <strong> {templateDetails.templateTitle} </strong>
              </span>
            </p>
            <p>
              Description
              <span className="card-content-row-value">
                {templateDetails.description}
              </span>
            </p>
            <p>
              Category
              <span className="card-content-row-value">
                {templateDetails.category}
              </span>
            </p>
            <p>
              Amount{' '}
              <span className="card-content-row-value">
                {templateDetails.amount}
              </span>
            </p>
            <p>
              Template File:
              <span className="card-content-row-value">
                <span className="template-identifier">
                  <a
                    href={templateDetails.templateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    myloanagreement.docx
                  </a>
                </span>
              </span>
            </p>
            <p>
              Date Created
              <span className="card-content-row-value">
                {templateDetails.dateCreated}
              </span>
            </p>
            <p>
              Total Downloads
              <span className="card-content-row-value">
                {templateDetails.totalDownloads}
              </span>
            </p>
            <p>
              Total Amount Received
              <span className="card-content-row-value">
                {templateDetails.totalAmountReceived}
              </span>
            </p>
            <p>
              Status
              <span className="card-content-row-value">
                <span className="template-identifier">
                  {templateDetails.status}
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateDownloadAllDetails
