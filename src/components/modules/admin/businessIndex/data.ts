// import StatisticsCard from "./StatisticsCard"

interface BusinessCardData {
  title: string
  amount: number
  //icon: string
  backgroundColor: string
}

export const BusinessCardData: BusinessCardData[] = [
  {
    title: 'Total Business Registrations',
    amount: 1000,
    backgroundColor: '#F3F4F6',
  },
  {
    title: 'Approved Registrations',
    amount: 2000,
    backgroundColor: '#F2F8F8',
  },
  {
    title: 'In Progress Registrations',
    amount: 3000,
    backgroundColor: '#FEFBF2',
  },
  {
    title: 'Failed Registrations',
    amount: 4000,
    backgroundColor: '#FDF2F4',
  },
]
