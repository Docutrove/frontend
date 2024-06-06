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
              onClick={() =>
                (window.location.href =
                  'http://localhost:5173/admin/Business-Details')
              }
              className="card"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <div className="content">
                <p className="title">{item.title}</p>

                <p className="value" style={{ color: item.fontColor }}>
                  {item.amount.toLocaleString()}
                </p>
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
            <td> Company Type</td>
            <td> Registered by</td>
            <td> Amount </td>
          </thead>
          <tbody>
            <tr>
              <td>Sept 29, 2023 11:00 AM</td>
              <td>Limited Liability</td>
              <td>Ronald Richards</td>
              <td>#24,350</td>
            </tr>
            <tr>
              <td>Sept 29, 2023 11:00 AM</td>
              <td>Incorporated Trusted</td>
              <td>Stella Richards</td>
              <td>#24,350</td>
            </tr>
            <tr>
              <td>Sept 29, 2023 11:00 AM</td>
              <td>Limited Liability</td>
              <td>Ronald Richards</td>
              <td>#24,350</td>
            </tr>
            <tr>
              <td>Sept 29, 2023 11:00 AM</td>
              <td>Incorporated Trusted</td>
              <td>Stella Richards</td>
              <td>#24,350</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
