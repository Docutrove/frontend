export interface TemplateDetails {
  templateTitle: string
  description: string
  category: string
  amount: string
  templateFile: string // Assuming this is a URL to a docx or pdf file
  dateCreated: string // Following the format "OCTOBER 28, 2024 11:30 PM"
  totalDownloads: number
  totalAmountReceived: string
  status: string
}

export interface UserData {
  templateDetails: TemplateDetails
}

export const userData: UserData = {
  templateDetails: {
    templateTitle: 'Updated Template Title', // Example value
    description: 'This is an updated description.', // Example value
    category: 'New Category', // Example value
    amount: '$200', // Example value
    templateFile: 'https://example.com/new-template.docx', // Example URL
    dateCreated: 'NOVEMBER 15, 2024 12:00 AM', // Example date
    totalDownloads: 150,
    totalAmountReceived: '$3000', // Example value
    status: 'Active', // Example value
  },
}
