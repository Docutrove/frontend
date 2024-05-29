import './StatisticsCard.scss'
import { StatisticsCardData } from './Data'

const icons = {
  money: '👥',
  posts: '📝',
  comments: '💬',
  likes: '👍',
}

function StatisticsCard() {
  return (
    <div className="card-container">
      <div className="statistics-card">
        {StatisticsCardData.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="icon">
                {item.title === 'Total Users'
                  ? icons.money
                  : item.title === 'Total Posts'
                  ? icons.posts
                  : item.title === 'Total Comments'
                  ? icons.comments
                  : item.title === 'Total Likes'
                  ? icons.likes
                  : ''}
              </div>
              <div className="content">
                <p className="title">{item.title}</p>
                <p className="value">{item.value}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StatisticsCard
