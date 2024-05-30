import StatisticsCard from '../../ui/statisticsCard/StatisticsCard'
import './index.scss'

export default function Main() {
  return (
    <div className="main-content">
      <div className="dashboard-stats">
        <StatisticsCard />
      </div>
      <div className="table-section">
        <div className="table-top">
          <span className="table-heading"> New Template Download </span>{' '}
          <span className="view_all"> View all </span>
        </div>
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

      <div className="table-section second-table">
        <div className="table-top">
          <span className="table-heading"> New Business Registrations </span>{' '}
          <span className="view_all"> View all </span>
        </div>
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
