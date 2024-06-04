import React from 'react'
import './index.scss'
import { userData } from './data'

const TemplateDownloadDetails: React.FC = () => {
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
              <strong>Template Title:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.templateTitle}
              </span>
            </p>
            <p>
              <strong>Description:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.description}
              </span>
            </p>
            <p>
              <strong>Category:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.category}
              </span>
            </p>
            <p>
              <strong>Amount:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.amount}
              </span>
            </p>
            <p>
              <strong>Template File:</strong>{' '}
              <span className="card-content-row-value">
                <a
                  href={templateDetails.templateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to File
                </a>
              </span>
            </p>
            <p>
              <strong>Date Created:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.dateCreated}
              </span>
            </p>
            <p>
              <strong>Total Downloads:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.totalDownloads}
              </span>
            </p>
            <p>
              <strong>Total Amount Received:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.totalAmountReceived}
              </span>
            </p>
            <p>
              <strong>Status:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateDownloadDetails
