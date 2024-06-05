// import StatisticsCard from "./StatisticsCard"

interface StatisticsCardData {
  title: string
  value: string | number
  //icon: string
  backgroundColor: string
  fontColor: string
}

export const StatisticsCardData: StatisticsCardData[] = [
  {
    title: 'Total Amount Recieved',
    value: 23328.82,
    backgroundColor: '#F2FBFC',
    fontColor: '#00B8BF',
  },
  {
    title: 'Total Business Registrations',
    value: 2000,
    backgroundColor: '#F3F4F6',
    fontColor: '#162650',
  },
  {
    title: 'Total Template Downloads',
    value: 3000,
    backgroundColor: '#F9FAFA',
    fontColor: '#425669',
  },
  {
    title: 'Total Lawyer Bookings',
    value: 4000,
    backgroundColor: '#F2F8F8',
    fontColor: '#008171',
  },
]
