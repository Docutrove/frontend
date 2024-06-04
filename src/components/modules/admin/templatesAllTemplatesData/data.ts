export interface TemplateDetails {
  templateType: string
  templateFile: string // Assuming this is a URL to a docx or pdf file
  amountPaid: string
  date: string // Following the format "OCTOBER 28, 2024 11:30 PM"
}

export interface UserDetails {
  fullName: string
  emailAddress: string
  phoneNumber: string
}

export interface UserData {
  templateDetails: TemplateDetails
  userDetails: UserDetails
}

export const userData: UserData = {
  templateDetails: {
    templateType: 'Example Type', // Placeholder value
    templateFile: 'https://example.com/template.docx', // Example URL
    amountPaid: '$100', // Example amount
    date: 'OCTOBER 28, 2024 11:30 PM', // Example date
  },
  userDetails: {
    fullName: 'John Doe',
    emailAddress: 'john.doe@example.com',
    phoneNumber: '+1234567890',
  },
}
