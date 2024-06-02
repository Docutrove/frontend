export interface CompanyType {
  classification: string
  specificType: string
}

export interface ProposedNames {
  option1: string
  option2: string
  option3: string
  option4: string
}

export interface BusinessDetails {
  commencementDate: string
  emailAddress: string
  phoneNumber: string
}

export interface PrincipalPlaceOfBusiness {
  state: string
  lga: string
  city: string
  postCode: string
  houseNumber: string
  streetName: string
}

export interface Data {
  companyType: CompanyType
  proposedNames: ProposedNames
  businessDetails: BusinessDetails
  principalPlaceOfBusiness: PrincipalPlaceOfBusiness
  branchName: string
}

export const data: Data = {
  companyType: {
    classification: 'Private',
    specificType: 'Limited',
  },
  proposedNames: {
    option1: 'Example Name 1',
    option2: 'Example Name 2',
    option3: 'Example Name 3',
    option4: 'Example Name 4',
  },
  businessDetails: {
    commencementDate: '2024-01-01',
    emailAddress: 'example@business.com',
    phoneNumber: '123-456-7890',
  },
  principalPlaceOfBusiness: {
    state: 'State Name',
    lga: 'Local Government Area',
    city: 'City Name',
    postCode: '123456',
    houseNumber: 'House 123',
    streetName: 'Street Name',
  },
  branchName: 'Main Branch',
}
