import StatisticsCard from '../../ui/statisticsCard/StatisticsCard'
//import { FaArrowUpRight } from 'react-icons/fa'; // Import the arrow icon from react-icons library

export default function Main() {
  return (
    <div className="main-content">
      <div className="dashboard-stats">
        <StatisticsCard />
      </div>
      <div className="table-section">
        <table className="striped-table">
          <thead>
            <tr>
              <td style={{ textAlign: 'left' }}>New Template Download</td>{' '}
              {/* Text aligned to the left */}
              <td style={{ textAlign: 'right' }}>
                {' '}
                {/* Text aligned to the right */}
                View all {/*<FaArrowUpRight />*/} {/* Arrow icon */}
              </td>
            </tr>
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
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
