import '../../../../assets/styles/_tablestyles.scss'
import './index.scss'
import { StatisticsCardData } from './data.ts'

export default function TemplatesAll() {
  return (
    <div className="main-content">
      <div className="table-section">
        <table className="striped-table">
          <thead>
            <td>Template Type</td>
            <td>Category</td>
            <td>Price</td>
            <td>Downloads</td>
            <td>Status</td>
          </thead>
          <tbody>
            {StatisticsCardData.map((data, index) => (
              <tr key={index}>
                <td>{data.templateType}</td>
                <td>{data.category}</td>
                <td>{`$${data.price.toFixed(2)}`}</td>
                <td className="downloads">{data.downloads}</td>
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
