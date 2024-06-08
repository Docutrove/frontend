import '../../../../assets/styles/_tablestyles.scss'

import './index.scss'
import { Calendar } from '../../../../assets'
import { StatisticsCardData } from './Data/downloads'
import SearchBar from '../bodySearchBar' 

export default function TempDownloadView() {
  return (
    <div className="main-content">
      <div className="controls">
        <div className="control-item search-div">
        <SearchBar />
        </div>

        <div className="control-item filter-dropdown">
          <span>Filter by:</span>
          <select>
            <option value="all">All Template types</option>
            <option value="typeA">Type A</option>
            <option value="typeB">Type B</option>
            <option value="typeC">Type C</option>
            <option value="typeD">Type D</option>
          </select>
        </div>

        <div className="control-item date-filters">
          <form>
            {/* <div className="date-input"> */}
            <input type="text" placeholder="Start date" />
            <i className="calendar-icon">
              <img src={Calendar} />
            </i>
            {/* </div> */}
          </form>
          <span> --- </span>
        </div>
        <div className="control-item date-filters">
          <form>
            {/* <div className="date-input"> */}
            <input type="text" placeholder="End date" />
            <i className="calendar-icon">
              <img src={Calendar} />
            </i>
            {/* </div> */}
          </form>
        </div>
      </div>
      <div className="table-section">
        <table className="striped-table">
          <tbody>
            <tr>
              <td> Date & Time</td>
              <td> Template Type</td>
              <td> Registered by</td>
              <td> Amount </td>
            </tr>
            {StatisticsCardData.map((data, index) => (
              <tr
                key={index}
                onClick={() =>
                  (window.location.href =
                    'http://localhost:5173/admin/template-downloads')
                }
              >
                <td>{data.datetime}</td>
                <td>{data.templateType}</td>
                <td>{data.registeredBy}</td>
                <td>₦{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
