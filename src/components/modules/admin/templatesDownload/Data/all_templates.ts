// import StatisticsCard from "./StatisticsCard"

interface StatisticsCardData {
  title: string
  value: number
  //icon: string
  backgroundColor: string
}

export const StatisticsCardData: StatisticsCardData[] = [
  {
    title: 'Total Users',
    value: 1000,
    backgroundColor: '#F2FBFC',
  },
  {
    title: 'Total Posts',
    value: 2000,
    backgroundColor: '#F3F4F6',
  },
  {
    title: 'Total Comments',
    value: 3000,
    backgroundColor: '#F9FAFA',
  },
  {
    title: 'Total Likes',
    value: 4000,
    backgroundColor: '#F2F8F8',
  },
]
