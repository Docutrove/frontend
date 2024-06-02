import React, { useState, useEffect } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from '../../../../assets'
import { data } from './data'

const BusinessDetails: React.FC = () => {
  const [companyTypeOpen, setCompanyTypeOpen] = useState(false)
  const [proposedNameOpen, setProposedNameOpen] = useState(false)
  const [companyTypeData, setCompanyTypeData] = useState<any>({})
  const [proposedNamesData, setProposedNamesData] = useState<any>({})

  useEffect(() => {
    // Fetching data from JSON file
    setCompanyTypeData(data.companyType)
    setProposedNamesData(data.proposedNames)
  }, [])

  return (
    <div className="business-details">
      <h1 className="section-heading">BUSINESS NAME RESERVATION DETAILS</h1>
      <div className="accordion-section">
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setCompanyTypeOpen(!companyTypeOpen)}
          >
            <h2>Company Type</h2>
            <img
              src={companyTypeOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {companyTypeOpen && (
            <div className="accordion-content">
              <p>
                <strong>Classification:</strong>{' '}
                {companyTypeData.classification}
              </p>
              <p>
                <strong>Specific Type:</strong> {companyTypeData.specificType}
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setProposedNameOpen(!proposedNameOpen)}
          >
            <h2>Proposed Name</h2>
            <img
              src={proposedNameOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {proposedNameOpen && (
            <div className="accordion-content">
              <p>
                <strong>Option 1:</strong> {proposedNamesData.option1}
              </p>
              <p>
                <strong>Option 2:</strong> {proposedNamesData.option2}
              </p>
              <p>
                <strong>Option 3:</strong> {proposedNamesData.option3}
              </p>
              <p>
                <strong>Option 4:</strong> {proposedNamesData.option4}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessDetails
