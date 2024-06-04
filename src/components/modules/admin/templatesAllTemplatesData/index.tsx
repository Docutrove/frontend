import '../../../../assets/styles/_tablestyles.scss'

import './index.scss'
import { StatisticsCardData } from './Data/downloads'

export default function TempDownloadView() {
  return (
    <div className="main-content">
      <div className="controls">
        <div className="control-item search-bar">
          <input type="text" placeholder="Search..." />
          <i className="search-icon">🔍</i>
        </div>
        <div className="control-item filter-dropdown">
          <span>Filter by:</span>
          <select>
            <option value="all">All</option>
            <option value="typeA">Type A</option>
            <option value="typeB">Type B</option>
            <option value="typeC">Type C</option>
            <option value="typeD">Type D</option>
          </select>
        </div>
        <div className="control-item date-filters">
          <form>
            <input type="text" placeholder="Start date" />
            <i className="calendar-icon">📅</i>
          </form>
          <span> --- </span>
          <form>
            <input type="text" placeholder="End date" />
            <i className="calendar-icon">📅</i>
          </form>
        </div>
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
            {StatisticsCardData.map((data, index) => (
              <tr key={index}>
                <td>{data.datetime}</td>
                <td>{data.templateType}</td>
                <td>{data.registeredBy}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
