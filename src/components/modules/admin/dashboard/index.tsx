import StatisticsCard from '../../ui/statisticsCard/StatisticsCard'

import './index.scss'

import { ArrowUp } from '../../../../assets'
import { StatisticsCardData, BusinessRegistrationsData } from './data'

export default function Main() {
  return (
    <div className="main-content">
      <div className="dashboard-stats">
        <StatisticsCard />
      </div>
      <div className="table-section">
        <div className="table-top">
          <span className="table-heading"> New Template Download </span>
          <span
            className="view_all"
            onClick={() =>
              (window.location.href =
                'http://localhost:5173/admin/all-templates')
            }
          >
            View all <img src={ArrowUp} className="arrow-icon" />
          </span>
        </div>
        <table className="striped-table">
          <tbody>
            <tr className="first-row">
              <td> Date & Time</td>
              <td> Template Type</td>
              <td> Registered by</td>
              <td> Amount </td>
            </tr>
            {StatisticsCardData.map((item, index) => (
              <tr
                key={index}
                onClick={() =>
                  (window.location.href =
                    'http://localhost:5173/admin/templates-all-details')
                }
              >
                <td>{item.datetime}</td>
                <td>{item.templateType}</td>
                <td>{item.registeredBy}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-section second-table">
        <div className="table-top">
          <span className="table-heading"> New Business Registrations </span>
          <span
            className="view_all"
            onClick={() =>
              (window.location.href =
                'http://localhost:5173/admin/business-details')
            }
          >
            View all <img src={ArrowUp} className="arrow-icon" />
          </span>
        </div>
        <table className="striped-table">
          <tbody>
            <tr>
              <td> Date & Time</td>
              <td> Company Type</td>
              <td> Registered by</td>
              <td> Amount </td>
              <td></td>
            </tr>
            {BusinessRegistrationsData.map((item, index) => (
              <tr key={index}>
                <td>{item.datetime}</td>
                <td>{item.companyType}</td>
                <td>{item.registeredBy}</td>
                <td>{item.amount}</td>
                <td>
                  <span>
                    <button
                      className="view-button"
                      onClick={() =>
                        (window.location.href =
                          'http://localhost:5173/admin/business-details')
                      }
                    >
                      View
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
