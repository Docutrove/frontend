// import StatisticsCard from "./StatisticsCard"

interface StatisticsCardData {
  title: string
  value: number
  icon: string
}

export const StatisticsCardData: StatisticsCardData[] = [
  {
    title: 'Total Users',
    value: 1000,
    icon: '👥',
  },
  {
    title: 'Total Posts',
    value: 2000,
    icon: '📝',
  },
  {
    title: 'Total Comments',
    value: 3000,
    icon: '💬',
  },
  {
    title: 'Total Likes',
    value: 4000,
    icon: '👍',
  },
]
