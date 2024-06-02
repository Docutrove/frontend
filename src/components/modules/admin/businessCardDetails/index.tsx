import React, { useState, useEffect } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from '../../../../assets'
import {
  data,
  Data,
  BusinessDetails as BusinessDetailsType,
  PrincipalPlaceOfBusiness,
} from './data'

const BusinessDetails: React.FC = () => {
  const [companyTypeOpen, setCompanyTypeOpen] = useState(false)
  const [proposedNameOpen, setProposedNameOpen] = useState(false)
  const [businessDetailsOpen, setBusinessDetailsOpen] = useState(false)
  const [principalPlaceOpen, setPrincipalPlaceOpen] = useState(false)
  const [branchNameOpen, setBranchNameOpen] = useState(false)

  const [companyTypeData, setCompanyTypeData] = useState(data.companyType)
  const [proposedNamesData, setProposedNamesData] = useState(data.proposedNames)
  const [businessDetailsData, setBusinessDetailsData] =
    useState<BusinessDetailsType>(data.businessDetails)
  const [principalPlaceData, setPrincipalPlaceData] =
    useState<PrincipalPlaceOfBusiness>(data.principalPlaceOfBusiness)
  const [branchNameData, setBranchNameData] = useState(data.branchName)

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

      <h1 className="section-heading">BUSINESS DETAILS</h1>
      <div className="accordion-section">
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setBusinessDetailsOpen(!businessDetailsOpen)}
          >
            <h2>Business Commencement Date</h2>
            <img
              src={businessDetailsOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {businessDetailsOpen && (
            <div className="accordion-content">
              <p>
                <strong>Commencement Date:</strong>{' '}
                {businessDetailsData.commencementDate}
              </p>
              <p>
                <strong>Email Address:</strong>{' '}
                {businessDetailsData.emailAddress}
              </p>
              <p>
                <strong>Phone Number:</strong> {businessDetailsData.phoneNumber}
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setPrincipalPlaceOpen(!principalPlaceOpen)}
          >
            <h2>Principal Place of Business</h2>
            <img
              src={principalPlaceOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {principalPlaceOpen && (
            <div className="accordion-content">
              <p>
                <strong>State:</strong> {principalPlaceData.state}
              </p>
              <p>
                <strong>LGA:</strong> {principalPlaceData.lga}
              </p>
              <p>
                <strong>City/Town/Village:</strong> {principalPlaceData.city}
              </p>
              <p>
                <strong>Post Code:</strong> {principalPlaceData.postCode}
              </p>
              <p>
                <strong>House Number/Building Name:</strong>{' '}
                {principalPlaceData.houseNumber}
              </p>
              <p>
                <strong>Street Name:</strong> {principalPlaceData.streetName}
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setBranchNameOpen(!branchNameOpen)}
          >
            <h2>Branch Name</h2>
            <img src={branchNameOpen ? CaretUp : CaretDown} alt="toggle icon" />
          </div>
          {branchNameOpen && (
            <div className="accordion-content">
              <p>{branchNameData}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessDetails
