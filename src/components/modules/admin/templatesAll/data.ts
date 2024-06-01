interface StatisticsCardData {
  templateType: string
  category: string
  price: number
  downloads: string
  buttonState: 'active' | 'inactive'
  buttonBackgroundColor: string
  buttonTextColor: string
}

export const StatisticsCardData: StatisticsCardData[] = [
  {
    templateType: 'Type A',
    category: 'Category 1',
    price: 29.99,
    downloads: '100',
    buttonState: 'active',
    buttonBackgroundColor: '#4CAF50', // Green
    buttonTextColor: '#FFFFFF', // White
  },
  {
    templateType: 'Type B',
    category: 'Category 2',
    price: 19.99,
    downloads: '200',
    buttonState: 'inactive',
    buttonBackgroundColor: '#F44336', // Red
    buttonTextColor: '#FFFFFF', // White
  },
  {
    templateType: 'Type C',
    category: 'Category 3',
    price: 39.99,
    downloads: '150',
    buttonState: 'active',
    buttonBackgroundColor: '#4CAF50', // Green
    buttonTextColor: '#FFFFFF', // White
  },
  {
    templateType: 'Type D',
    category: 'Category 4',
    price: 49.99,
    downloads: '250',
    buttonState: 'inactive',
    buttonBackgroundColor: '#F44336', // Red
    buttonTextColor: '#FFFFFF', // White
  },
]
