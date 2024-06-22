export interface TemplateDetails {
  templateTitle: string
  description: string
  category: string
  amount: string
  templateFile: string
  dateCreated: string
  totalDownloads: number
  totalAmountReceived: string
  status: string
}

export interface UserData {
  templateDetails: TemplateDetails
}

export const userData: UserData = {
  templateDetails: {
    templateTitle: 'Graphic Design Contract',
    description: 'Description goes here...',
    category: 'Labour & Employment Agreement',
    amount: ' ₦ 5,000.00',
    templateFile: 'myloanagreement.docx',
    dateCreated: 'NOVEMBER 15, 2024 12:00 AM',
    totalDownloads: 15,
    totalAmountReceived: '₦500,0000,000',
    status: 'Active',
  },
}
