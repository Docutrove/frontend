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
          <span className="view_all">
            View all <img src={ArrowUp} className="arrow-icon" />
          </span>
        </div>
        <table className="striped-table">
          <thead>
            <tr>
              <th> Date & Time</th>
              <th> Template Type</th>
              <th> Registered by</th>
              <th> Amount </th>
            </tr>
          </thead>
          <tbody>
            {StatisticsCardData.map((item, index) => (
              <tr key={index}>
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
          <span className="view_all">
            View all <img src={ArrowUp} className="arrow-icon" />
          </span>
        </div>
        <table className="striped-table">
          <thead>
            <tr>
              <th> Date & Time</th>
              <th> Company Type</th>
              <th> Registered by</th>
              <th> Amount </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {BusinessRegistrationsData.map((item, index) => (
              <tr key={index}>
                <td>{item.datetime}</td>
                <td>{item.companyType}</td>
                <td>{item.registeredBy}</td>
                <td>{item.amount}</td>
                <td>
                  <span>
                    <button className="view-button">View</button>{' '}
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
