import '../../../../assets/styles/_tablestyles.scss'
import './index.scss'
import { StatisticsCardData } from './data.ts'

export default function TemplatesAll() {
  return (
    <div className="main-content">
      <div className="table-section">
        <table className="striped-table">
          <thead>
            <tr>
              <th>Template Type</th>
              <th>Category</th>
              <th>Price</th>
              <th>Downloads</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {StatisticsCardData.map((data, index) => (
              <tr key={index}>
                <td>{data.templateType}</td>
                <td>{data.category}</td>
                <td>{`$${data.price.toFixed(2)}`}</td>
                <td>{data.downloads}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: data.buttonBackgroundColor,
                      color: data.buttonTextColor,
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    {data.buttonState === 'active' ? 'Active' : 'Inactive'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
