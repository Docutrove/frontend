interface StatisticsCardData {
  templateType: 'Graphic Design Agreement' | 'Loan Agreement'
  category: 'Tech/Startup Agreement' | 'Loan Agreement'
  price: number
  downloads: string
  buttonState: 'active' | 'inactive'
  buttonBackgroundColor: string
  buttonTextColor: string
}

export const StatisticsCardData: StatisticsCardData[] = [
  {
    templateType: 'Graphic Design Agreement',
    category: 'Tech/Startup Agreement',
    price: 2999, // assuming this is in Naira
    downloads: '100',
    buttonState: 'active',
    buttonBackgroundColor: '#F2FBFC',
    buttonTextColor: '#00B8BF',
  },
  {
    templateType: 'Loan Agreement',
    category: 'Loan Agreement',
    price: 1999, // assuming this is in Naira
    downloads: '200',
    buttonState: 'inactive',
    buttonBackgroundColor: '#FDF2F4',
    buttonTextColor: '#D30021',
  },
  {
    templateType: 'Graphic Design Agreement',
    category: 'Tech/Startup Agreement',
    price: 3999, // assuming this is in Naira
    downloads: '150',
    buttonState: 'active',
    buttonBackgroundColor: '#F2FBFC',
    buttonTextColor: '#00B8BF',
  },
  {
    templateType: 'Loan Agreement',
    category: 'Loan Agreement',
    price: 4999, // assuming this is in Naira
    downloads: '250',
    buttonState: 'inactive',
    buttonBackgroundColor: '#FDF2F4',
    buttonTextColor: '#D30021',
  },
]
