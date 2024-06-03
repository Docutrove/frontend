import React, { useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from '../../../../assets'
import {
  data,
  BusinessDetails as BusinessDetailsType,
  PrincipalPlaceOfBusiness,
  PersonalDetails,
  Address,
  MeansOfIdentification,
  ParticularsOfProprietors,
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

  const [personalDetailsOpen, setPersonalDetailsOpen] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)
  const [residentialAddressOpen, setResidentialAddressOpen] = useState(false)
  const [meansOfIdentificationOpen, setMeansOfIdentificationOpen] =
    useState(false)
  const [proprietorPartnerOpen, setProprietorPartnerOpen] = useState(false)

  const [personalDetailsData, setPersonalDetailsData] = useState(
    data.particularsOfProprietors.personalDetails
  )
  const [addressData, setAddressData] = useState(
    data.particularsOfProprietors.address
  )
  const [residentialAddressData, setResidentialAddressData] = useState(
    data.particularsOfProprietors.residentialAddress
  )
  const [meansOfIdentificationData, setMeansOfIdentificationData] = useState(
    data.particularsOfProprietors.meansOfIdentification
  )
  const [proprietorPartnerData, setProprietorPartnerData] = useState(
    data.particularsOfProprietors.proprietorPartner
  )

  return (
    <div className="business-details">
      <h1 className="section-heading">BUSINESS NAME RESERVATION DETAILS</h1>
      <div className="accordion-section">
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setCompanyTypeOpen(!companyTypeOpen)}
          >
            <h2 className="accordion-header-text">Company Type</h2>
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
              <p>
                <strong>State:</strong> {branchNameData.state}
              </p>
              <p>
                <strong>LGA:</strong> {branchNameData.lga}
              </p>
              <p>
                <strong>City/Town/Village:</strong> {branchNameData.city}
              </p>
              <p>
                <strong>Post Code:</strong> {branchNameData.postCode}
              </p>
              <p>
                <strong>House Number/Building Name:</strong>{' '}
                {branchNameData.houseNumber}
              </p>
              <p>
                <strong>Street Name:</strong> {branchNameData.streetName}
              </p>
            </div>
          )}
        </div>
      </div>

      <h1 className="section-heading">PARTICULARS OF PROPRIETORS</h1>
      <div className="accordion-section">
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setPersonalDetailsOpen(!personalDetailsOpen)}
          >
            <h2>Personal Details</h2>
            <img
              src={personalDetailsOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {personalDetailsOpen && (
            <div className="accordion-content">
              <p>
                <strong>Surname:</strong> {personalDetailsData.surname}
              </p>
              <p>
                <strong>First Name:</strong> {personalDetailsData.firstName}
              </p>
              <p>
                <strong>Other Name:</strong> {personalDetailsData.otherName}
              </p>
              <p>
                <strong>Date of Birth:</strong>{' '}
                {personalDetailsData.dateOfBirth}
              </p>
              <p>
                <strong>Gender:</strong> {personalDetailsData.gender}
              </p>
              <p>
                <strong>Nationality:</strong> {personalDetailsData.nationality}
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setAddressOpen(!addressOpen)}
          >
            <h2>Address</h2>
            <img src={addressOpen ? CaretUp : CaretDown} alt="toggle icon" />
          </div>
          {addressOpen && (
            <div className="accordion-content">
              <p>
                <strong>Country:</strong> {addressData.country}
              </p>
              <p>
                <strong>State:</strong> {addressData.state}
              </p>
              <p>
                <strong>LGA:</strong> {addressData.lga}
              </p>
              <p>
                <strong>City/Town/Village:</strong> {addressData.city}
              </p>
              <p>
                <strong>Post Code:</strong> {addressData.postCode}
              </p>
              <p>
                <strong>House Number/Building Name:</strong>{' '}
                {addressData.houseNumber}
              </p>
              <p>
                <strong>Street Name:</strong> {addressData.streetName}
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setResidentialAddressOpen(!residentialAddressOpen)}
          >
            <h2>Residential Address</h2>
            <img
              src={residentialAddressOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {residentialAddressOpen && (
            <div className="accordion-content">
              <p>
                <strong>Country:</strong> {residentialAddressData.country}
              </p>
              <p>
                <strong>State:</strong> {residentialAddressData.state}
              </p>
              <p>
                <strong>LGA:</strong> {residentialAddressData.lga}
              </p>
              <p>
                <strong>City/Town/Village:</strong>{' '}
                {residentialAddressData.city}
              </p>
              <p>
                <strong>Post Code:</strong> {residentialAddressData.postCode}
              </p>
              <p>
                <strong>House Number/Building Name:</strong>{' '}
                {residentialAddressData.houseNumber}
              </p>
              <p>
                <strong>Street Name:</strong>{' '}
                {residentialAddressData.streetName}
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() =>
              setMeansOfIdentificationOpen(!meansOfIdentificationOpen)
            }
          >
            <h2>Means of Identification</h2>
            <img
              src={meansOfIdentificationOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {meansOfIdentificationOpen && (
            <div className="accordion-content">
              <p>
                <strong>Type:</strong> {meansOfIdentificationData.type}
              </p>
              <p>
                <strong>Identity Number:</strong>{' '}
                {meansOfIdentificationData.identityNumber}
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setProprietorPartnerOpen(!proprietorPartnerOpen)}
          >
            <h2>Proprietor / Partner</h2>
            <img
              src={proprietorPartnerOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {proprietorPartnerOpen && (
            <div className="accordion-content">
              <p>{proprietorPartnerData}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessDetails
