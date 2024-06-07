import React, { useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from '../../../../assets'
import { data } from './data'

const BusinessDetails: React.FC = () => {
  const [companyTypeOpen, setCompanyTypeOpen] = useState(false)
  const [proposedNameOpen, setProposedNameOpen] = useState(false)
  const [businessDetailsOpen, setBusinessDetailsOpen] = useState(false)
  const [principalPlaceOpen, setPrincipalPlaceOpen] = useState(false)
  const [branchNameOpen, setBranchNameOpen] = useState(false)
  const [natureOfBusinessOpen, setNatureOfBusinessOpen] = useState(false)
  const [documentUploadsOpen, setDocumentUploadsOpen] = useState(false)

  const {
    companyType,
    proposedNames,
    businessDetails,
    principalPlaceOfBusiness,
    branchName,
    natureOfBusiness,
    documentUploads,
  } = data

  return (
    <div className="business-details">
      <div>
        <h1 className="section-heading">BUSINESS NAME RESERVATION DETAILS</h1>
      </div>

      <div className="accordion-section">
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setCompanyTypeOpen(!companyTypeOpen)}
          >
            <h2 className="accordion-header-text">Company Type</h2>
            <img
              className="accordion-header-caret"
              src={companyTypeOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {companyTypeOpen && (
            <div className="accordion-content">
              <p>
                Classification
                <span className="accordion-content-row-value">
                  {companyType.classification}{' '}
                </span>
              </p>
              <p>
                Specific Type{' '}
                <span className="accordion-content-row-value">
                  {companyType.specificType}
                </span>{' '}
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setProposedNameOpen(!proposedNameOpen)}
          >
            <h2 className="accordion-header-text">Proposed Name</h2>
            <img
              src={proposedNameOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {proposedNameOpen && (
            <div className="accordion-content">
              <p>
                Option 1{' '}
                <span className="accordion-content-row-value">
                  {proposedNames.option1}
                </span>
              </p>
              <p>
                Option 2
                <span className="accordion-content-row-value">
                  {' '}
                  {proposedNames.option2}
                </span>
              </p>
              <p>
                Option 3
                <span className="accordion-content-row-value">
                  {' '}
                  {proposedNames.option3}{' '}
                </span>
              </p>
              <p>
                Option 4{' '}
                <span className="accordion-content-row-value">
                  {proposedNames.option4}{' '}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      <h1 className="section-heading">BUSINESS DETAILS</h1>
      <div className="accordion-section">
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setBusinessDetailsOpen(!businessDetailsOpen)}
          >
            <h2 className="accordion-header-text">
              Business Commencement Date
            </h2>
            <img
              src={businessDetailsOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {businessDetailsOpen && (
            <div className="accordion-content">
              <p>
                Commencement Date
                <span className="accordion-content-row-value">
                  {businessDetails.commencementDate}
                </span>
              </p>
              <p>
                Email Address
                <span className="accordion-content-row-value">
                  {businessDetails.emailAddress}
                </span>
              </p>
              <p>
                Phone Number
                <span className="accordion-content-row-value">
                  {businessDetails.phoneNumber}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setPrincipalPlaceOpen(!principalPlaceOpen)}
          >
            <h2 className="accordion-header-text">
              Principal Place of Business
            </h2>
            <img
              src={principalPlaceOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {principalPlaceOpen && (
            <div className="accordion-content">
              <p>
                State
                <span className="accordion-content-row-value">
                  {principalPlaceOfBusiness.state}
                </span>
              </p>
              <p>
                LGA
                <span className="accordion-content-row-value">
                  {principalPlaceOfBusiness.lga}
                </span>
              </p>
              <p>
                City
                <span className="accordion-content-row-value">
                  {principalPlaceOfBusiness.city}
                </span>
              </p>
              <p>
                Post Code
                <span className="accordion-content-row-value">
                  {principalPlaceOfBusiness.postCode}
                </span>
              </p>
              <p>
                House Number
                <span className="accordion-content-row-value">
                  {principalPlaceOfBusiness.houseNumber}
                </span>
              </p>
              <p>
                Street Name
                <span className="accordion-content-row-value">
                  {principalPlaceOfBusiness.streetName}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setBranchNameOpen(!branchNameOpen)}
          >
            <h2 className="accordion-header-text">Branch Name</h2>
            <img src={branchNameOpen ? CaretUp : CaretDown} alt="toggle icon" />
          </div>
          {branchNameOpen && (
            <div className="accordion-content">
              <p>
                State
                <span className="accordion-content-row-value">
                  {branchName.state}
                </span>
              </p>
              <p>
                LGA
                <span className="accordion-content-row-value">
                  {branchName.lga}
                </span>
              </p>
              <p>
                City
                <span className="accordion-content-row-value">
                  {branchName.city}
                </span>
              </p>
              <p>
                Post Code
                <span className="accordion-content-row-value">
                  {branchName.postCode}
                </span>
              </p>
              <p>
                House Number
                <span className="accordion-content-row-value">
                  {branchName.houseNumber}
                </span>
              </p>
              <p>
                Street Name
                <span className="accordion-content-row-value">
                  {branchName.streetName}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      <h1 className="section-heading">NATURE OF BUSINESS</h1>
      <div className="accordion-section">
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setNatureOfBusinessOpen(!natureOfBusinessOpen)}
          >
            <h2 className="accordion-header-text">Nature of Business</h2>
            <img
              src={natureOfBusinessOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {natureOfBusinessOpen && (
            <div className="accordion-content">
              <p>
                Category{' '}
                <span className="accordion-content-row-value">
                  {natureOfBusiness.category}
                </span>
              </p>
              <p>
                Specific Nature{' '}
                <span className="accordion-content-row-value">
                  {natureOfBusiness.specificNature}
                </span>
              </p>
              <p>
                Other Description{' '}
                <span className="accordion-content-row-value">
                  {natureOfBusiness.otherDescription}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      <h1 className="section-heading">DOCUMENT UPLOADS</h1>
      <div className="accordion-section">
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setDocumentUploadsOpen(!documentUploadsOpen)}
          >
            <h2 className="accordion-header-text">Document Uploads</h2>
            <img
              src={documentUploadsOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {documentUploadsOpen && (
            <div className="accordion-content">
              <p>
                Means of Identification
                <span className="accordion-content-row-value document-data">
                  {documentUploads.meansOfIdentification}
                </span>
              </p>
              <p>
                Proprietor Signature
                <span className="accordion-content-row-value document-data">
                  {documentUploads.proprietorSignature}
                </span>
              </p>
              <p>
                Proprietor Photo
                <span className="accordion-content-row-value document-data">
                  {documentUploads.proprietorPhoto}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessDetails
