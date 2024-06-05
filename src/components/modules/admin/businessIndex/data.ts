// import StatisticsCard from "./StatisticsCard"

interface BusinessCardData {
  title: string
  amount: number
  //icon: string
  backgroundColor: string
  fontColor: string
}

export const BusinessCardData: BusinessCardData[] = [
  {
    title: 'Total Business Registrations',
    amount: 1000,
    backgroundColor: '#F3F4F6',
    fontColor: '#0E2557',
  },
  {
    title: 'Approved Registrations',
    amount: 2000,
    backgroundColor: '#F2F8F8',
    fontColor: '#008171',
  },
  {
    title: 'In Progress Registrations',
    amount: 3000,
    backgroundColor: '#FEFBF2',
    fontColor: '#F2B300',
  },
  {
    title: 'Failed Registrations',
    amount: 4000,
    backgroundColor: '#FDF2F4',
    fontColor: '#D30021',
  },
]
