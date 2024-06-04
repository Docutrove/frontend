import React from 'react'
import './index.scss'
import { data } from './data'

const TemplateDownloadDetails: React.FC = () => {
  const companyTypeData = data.companyType
  const proposedNamesData = data.proposedNames

  return (
    <div className="template-download-details">
      <div className="card-section">
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-text">Company Type</h2>
          </div>
          <div className="card-content">
            <p>
              <strong>Classification:</strong>{' '}
              <span className="card-content-row-value">
                {companyTypeData.classification}
              </span>
            </p>
            <p>
              <strong>Specific Type:</strong>{' '}
              <span className="card-content-row-value">
                {companyTypeData.specificType}
              </span>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-text">Proposed Name</h2>
          </div>
          <div className="card-content">
            <p>
              <strong>Option 1:</strong>{' '}
              <span className="card-content-row-value">
                {proposedNamesData.option1}
              </span>
            </p>
            <p>
              <strong>Option 2:</strong>
              <span className="card-content-row-value">
                {proposedNamesData.option2}
              </span>
            </p>
            <p>
              <strong>Option 3:</strong>
              <span className="card-content-row-value">
                {proposedNamesData.option3}
              </span>
            </p>
            <p>
              <strong>Option 4:</strong>{' '}
              <span className="card-content-row-value">
                {proposedNamesData.option4}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateDownloadDetails
