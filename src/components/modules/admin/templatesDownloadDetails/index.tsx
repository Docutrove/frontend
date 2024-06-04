import React from 'react'
import './index.scss'
import { userData } from './data'

const TemplateDownloadDetails: React.FC = () => {
  const { templateDetails, userDetails } = userData

  return (
    <div className="template-download-details">
      <div className="card-section">
        <div className="downloadcard">
          <div className="card-header">
            <h2 className="card-header-text">Template Details</h2>
          </div>
          <div className="card-content">
            <p>
              <strong>Template Type:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.templateType}
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
                  {templateDetails.templateFile}
                </a>
              </span>
            </p>
            <p>
              <strong>Amount Paid:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.amountPaid}
              </span>
            </p>
            <p>
              <strong>Date:</strong>{' '}
              <span className="card-content-row-value">
                {templateDetails.date}
              </span>
            </p>
          </div>
        </div>
        <div className="downloadcard">
          <div className="card-header">
            <h2 className="card-header-text">User Details</h2>
          </div>
          <div className="card-content">
            <p>
              <strong>Full Name:</strong>{' '}
              <span className="card-content-row-value">
                {userDetails.fullName}
              </span>
            </p>
            <p>
              <strong>Email Address:</strong>{' '}
              <span className="card-content-row-value">
                {userDetails.emailAddress}
              </span>
            </p>
            <p>
              <strong>Phone Number:</strong>{' '}
              <span className="card-content-row-value">
                {userDetails.phoneNumber}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateDownloadDetails
