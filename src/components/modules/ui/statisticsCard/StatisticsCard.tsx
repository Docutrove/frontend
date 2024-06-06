import './StatisticsCard.scss'
import { StatisticsCardData } from './Data'
import { Tiles1, Tiles2, Tiles3, Tiles4 } from '../../../../assets'

const icons = {
  money: Tiles1,
  posts: Tiles2,
  comments: Tiles3,
  likes: Tiles4,
}

function StatisticsCard() {
  return (
    <div className="card-container">
      <div className="statistics-card">
        {StatisticsCardData.map((item, index) => {
          let iconSrc
          if (item.title === 'Total Amount Recieved') iconSrc = icons.money
          else if (item.title === 'Total Business Registrations')
            iconSrc = icons.posts
          else if (item.title === 'Total Template Downloads')
            iconSrc = icons.comments
          else if (item.title === 'Total Lawyer Bookings') iconSrc = icons.likes

          return (
            <div
              key={index}
              className="card"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <div className="icon">
                <img src={iconSrc} alt={`${item.title} icon`} />
              </div>
              <br />
              <div className="content">
                <p className="title">{item.title}</p>
                <p className="value" style={{ color: item.fontColor }}>
                  {item.title === 'Total Amount Received' ||
                  item.title === 'Total Lawyer Bookings'
                    ? '₦'
                    : ''}
                  {item.value.toLocaleString()}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StatisticsCard
