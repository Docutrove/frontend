export interface BusinessCardData {
  title: string
  amount: number
  backgroundColor: string
  fontColor: string
  date?: string // Optional for business card
  companyType?: string // Optional for business card
  registeredBy?: string // Optional for business card
}

export const BusinessCardData: BusinessCardData[] = [
  {
    title: 'Total Business Registrations',
    amount: 1000,
    backgroundColor: '#F3F4F6',
    fontColor: '#0E2557',
    date: 'Sept 29, 2023 11:00 AM',
    companyType: 'Limited Liability',
    registeredBy: 'Ronald Richards',
  },
  {
    title: 'Approved Registrations',
    amount: 2000,
    backgroundColor: '#F2F8F8',
    fontColor: '#008171',
    date: 'Sept 29, 2023 11:00 AM',
    companyType: 'Incorporated Trusted',
    registeredBy: 'Stella Richards',
  },
  {
    title: 'In Progress Registrations',
    amount: 3000,
    backgroundColor: '#FEFBF2',
    fontColor: '#F2B300',
    date: 'Sept 29, 2023 11:00 AM',
    companyType: 'Limited Liability',
    registeredBy: 'Ronald Richards',
  },
  {
    title: 'Failed Registrations',
    amount: 4000,
    backgroundColor: '#FDF2F4',
    fontColor: '#D30021',
    date: 'Sept 29, 2023 11:00 AM',
    companyType: 'Incorporated Trusted',
    registeredBy: 'Stella Richards',
  },
]
