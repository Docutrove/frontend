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

export interface BusinessData {
  companyType: CompanyType
  proposedNames: ProposedNames
}

export const data: BusinessData = {
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
}
