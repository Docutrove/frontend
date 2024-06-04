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
                <strong>Classification:</strong>{' '}
                <span className="accordion-content-row-value">
                  {companyTypeData.classification}{' '}
                </span>
              </p>
              <p>
                <strong>Specific Type:</strong>{' '}
                <span className="accordion-content-row-value">
                  {companyTypeData.specificType}
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
                <strong>Option 1:</strong>{' '}
                <span className="accordion-content-row-value">
                  {proposedNamesData.option1}
                </span>
              </p>
              <p>
                <strong>Option 2:</strong>
                <span className="accordion-content-row-value">
                  {' '}
                  {proposedNamesData.option2}
                </span>
              </p>
              <p>
                <strong>Option 3:</strong>
                <span className="accordion-content-row-value">
                  {' '}
                  {proposedNamesData.option3}{' '}
                </span>
              </p>
              <p>
                <strong>Option 4:</strong>{' '}
                <span className="accordion-content-row-value">
                  {proposedNamesData.option4}{' '}
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
                <strong>Commencement Date:</strong>
                <span className="accordion-content-row-value">
                  {businessDetailsData.commencementDate}{' '}
                </span>
              </p>
              <p>
                <strong>Email Address:</strong>
                <span className="accordion-content-row-value">
                  {businessDetailsData.emailAddress}{' '}
                </span>
              </p>
              <p>
                <strong>Phone Number:</strong>{' '}
                <span className="accordion-content-row-value">
                  {businessDetailsData.phoneNumber}
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
                <strong>State:</strong>{' '}
                <span className="accordion-content-row-value">
                  {principalPlaceData.state}
                </span>
              </p>
              <p>
                <strong>LGA:</strong>{' '}
                <span className="accordion-content-row-value">
                  {principalPlaceData.lga}
                </span>
              </p>
              <p>
                <strong>City/Town/Village:</strong>
                <span className="accordion-content-row-value">
                  {' '}
                  {principalPlaceData.city}{' '}
                </span>
              </p>
              <p>
                <strong>Post Code:</strong>
                <span className="accordion-content-row-value">
                  {' '}
                  {principalPlaceData.postCode}{' '}
                </span>
              </p>
              <p>
                <strong>House Number/Building Name:</strong>
                <span className="accordion-content-row-value">
                  {principalPlaceData.houseNumber}{' '}
                </span>
              </p>
              <p>
                <strong>Street Name:</strong>{' '}
                <span className="accordion-content-row-value">
                  {principalPlaceData.streetName}{' '}
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
                <strong>State:</strong>{' '}
                <span className="accordion-content-row-value">
                  {' '}
                  {branchNameData.state}{' '}
                </span>
              </p>
              <p>
                <strong>LGA:</strong>{' '}
                <span className="accordion-content-row-value">
                  {branchNameData.lga}
                </span>
              </p>
              <p>
                <strong>City/Town/Village:</strong>{' '}
                <span className="accordion-content-row-value">
                  {branchNameData.city}{' '}
                </span>
              </p>
              <p>
                <strong>Post Code:</strong>{' '}
                <span className="accordion-content-row-value">
                  {branchNameData.postCode}
                </span>
              </p>
              <p>
                <strong>House Number/Building Name:</strong>
                <span className="accordion-content-row-value">
                  {branchNameData.houseNumber}{' '}
                </span>
              </p>
              <p>
                <strong>Street Name:</strong>{' '}
                <span className="accordion-content-row-value">
                  {branchNameData.streetName}{' '}
                </span>
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
            <h2 className="accordion-header-text">Personal Details</h2>
            <img
              src={personalDetailsOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {personalDetailsOpen && (
            <div className="accordion-content">
              <p>
                <strong>Surname:</strong>
                <span className="accordion-content-row-value">
                  {' '}
                  {personalDetailsData.surname}{' '}
                </span>
              </p>
              <p>
                <strong>First Name:</strong>{' '}
                <span className="accordion-content-row-value">
                  {personalDetailsData.firstName}{' '}
                </span>
              </p>
              <p>
                <strong>Other Name:</strong>{' '}
                <span className="accordion-content-row-value">
                  {personalDetailsData.otherName}{' '}
                </span>
              </p>
              <p>
                <strong>Date of Birth:</strong>{' '}
                <span className="accordion-content-row-value">
                  {personalDetailsData.dateOfBirth}{' '}
                </span>
              </p>
              <p>
                <strong>Gender:</strong>{' '}
                <span className="accordion-content-row-value">
                  {personalDetailsData.gender}
                </span>
              </p>
              <p>
                <strong>Nationality:</strong>
                <span className="accordion-content-row-value">
                  {' '}
                  {personalDetailsData.nationality}{' '}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setAddressOpen(!addressOpen)}
          >
            <h2 className="accordion-header-text">Address</h2>
            <img src={addressOpen ? CaretUp : CaretDown} alt="toggle icon" />
          </div>
          {addressOpen && (
            <div className="accordion-content">
              <p>
                <strong>Country:</strong>{' '}
                <span className="accordion-content-row-value">
                  {addressData.country}{' '}
                </span>
              </p>
              <p>
                <strong>State:</strong>
                <span className="accordion-content-row-value">
                  {' '}
                  {addressData.state}{' '}
                </span>
              </p>
              <p>
                <strong>LGA:</strong>{' '}
                <span className="accordion-content-row-value">
                  {addressData.lga}{' '}
                </span>
              </p>
              <p>
                <strong>City/Town/Village:</strong>{' '}
                <span className="accordion-content-row-value">
                  {' '}
                  {addressData.city}{' '}
                </span>
              </p>
              <p>
                <strong>Post Code:</strong>{' '}
                <span className="accordion-content-row-value">
                  {addressData.postCode}{' '}
                </span>
              </p>
              <p>
                <strong>House Number/Building Name:</strong>{' '}
                <span className="accordion-content-row-value">
                  {' '}
                  {addressData.houseNumber}{' '}
                </span>
              </p>
              <p>
                <strong>Street Name:</strong>{' '}
                <span className="accordion-content-row-value">
                  {addressData.streetName}{' '}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setResidentialAddressOpen(!residentialAddressOpen)}
          >
            <h2 className="accordion-header-text">Residential Address</h2>
            <img
              src={residentialAddressOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {residentialAddressOpen && (
            <div className="accordion-content">
              <p>
                <strong>Country:</strong>{' '}
                <span className="accordion-content-row-value">
                  {residentialAddressData.country}{' '}
                </span>
              </p>
              <p>
                <strong>State:</strong>{' '}
                <span className="accordion-content-row-value">
                  {residentialAddressData.state}{' '}
                </span>
              </p>
              <p>
                <strong>LGA:</strong>{' '}
                <span className="accordion-content-row-value">
                  {residentialAddressData.lga}{' '}
                </span>
              </p>
              <p>
                <strong>City/Town/Village:</strong>{' '}
                <span className="accordion-content-row-value">
                  {residentialAddressData.city}{' '}
                </span>
              </p>
              <p>
                <strong>Post Code:</strong>{' '}
                <span className="accordion-content-row-value">
                  {residentialAddressData.postCode}{' '}
                </span>
              </p>
              <p>
                <strong>House Number/Building Name:</strong>{' '}
                <span className="accordion-content-row-value">
                  {residentialAddressData.houseNumber}{' '}
                </span>
              </p>
              <p>
                <strong>Street Name:</strong>
                <span className="accordion-content-row-value">
                  {residentialAddressData.streetName}{' '}
                </span>
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
            <h2 className="accordion-header-text">Means of Identification</h2>
            <img
              src={meansOfIdentificationOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {meansOfIdentificationOpen && (
            <div className="accordion-content">
              <p>
                <strong>Type:</strong>
                <span className="accordion-content-row-value">
                  {' '}
                  {meansOfIdentificationData.type}{' '}
                </span>
              </p>
              <p>
                <strong>Identity Number:</strong>
                <span className="accordion-content-row-value">
                  {meansOfIdentificationData.identityNumber}{' '}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setProprietorPartnerOpen(!proprietorPartnerOpen)}
          >
            <h2 className="accordion-header-text">Proprietor / Partner</h2>
            <img
              src={proprietorPartnerOpen ? CaretUp : CaretDown}
              alt="toggle icon"
            />
          </div>
          {proprietorPartnerOpen && (
            <div className="accordion-content">
              <p>{proprietorPartnerData} </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessDetails
