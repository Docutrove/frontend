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
    templateTitle: 'Updated Template Title',
    description: 'This is an updated description.',
    category: 'New Category',
    amount: '$200',
    templateFile: 'https://example.com/new-template.docx',
    dateCreated: 'NOVEMBER 15, 2024 12:00 AM',
    totalDownloads: 150,
    totalAmountReceived: '$3000',
    status: 'Active',
  },
}
