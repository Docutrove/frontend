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
              <span> Template Type </span>

              <span className="card-content-row-value">
                {' '}
                {templateDetails.templateType}
              </span>
            </p>
            <p>
              Template File
              <span className="card-content-row-value">
                <span className="templates-data">
                  <a
                    href={templateDetails.templateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {templateDetails.templateFile}
                  </a>
                </span>
              </span>
            </p>
            <p>
              Amount Paid
              <span className="card-content-row-value">
                {templateDetails.amountPaid}
              </span>
            </p>
            <p>
              Date
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
              Full Name
              <span className="card-content-row-value">
                {userDetails.fullName}
              </span>
            </p>
            <p>
              Email Address
              <span className="card-content-row-value">
                {userDetails.emailAddress}
              </span>
            </p>
            <p>
              Phone Number
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
