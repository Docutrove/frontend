import '../../../../assets/styles/_tablestyles.scss'
import './index.scss'
import { BusinessCardData } from './data'

function BusinessCard() {
  return (
    <div className="card-container">
      <div className="statistics-card">
        {BusinessCardData.map((item, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <div className="content">
                <p className="title">{item.title}</p>
                <p className="value">{item.amount}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function BusinessCardIndex() {
  return (
    <div className="main-content">
      <div className="dashboard-stats">
        <BusinessCard />
      </div>
      <div className="table-section">
        <table className="striped-table">
          <thead>
            <td> Date & Time</td>
            <td> Template Type</td>
            <td> Registered by</td>
            <td> Amount </td>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
