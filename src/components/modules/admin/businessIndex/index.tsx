import React from 'react'
import '../../../../assets/styles/_tablestyles.scss'
import './index.scss'
import { BusinessCardData } from './data'

function BusinessCard() {
  return (
    <div className="card-container">
      <div className="statistics-card">
        {BusinessCardData.map((item, index) => (
          <div
            key={index}
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
        ))}
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
            <tr>
              <th>Date & Time</th>
              <th>Company Type</th>
              <th>Registered by</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {BusinessCardData.map((rowData, index) => (
              <tr
                key={index}
                onClick={() =>
                  (window.location.href =
                    'http://localhost:5173/admin/business-details')
                }
              >
                <td>{rowData.date}</td>
                <td>{rowData.companyType}</td>
                <td>{rowData.registeredBy}</td>
                <td>{rowData.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
