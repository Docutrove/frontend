import { Icon } from "../../ui/Icon";

export default function DocumentSettings() {
  return (
    <>
      <table className="settings__table document app-container">
        <thead className="settings__table__head">
          <tr>
            <td className="settings__table__head__title">
              <h6>Date</h6>
            </td>
            <td className="settings__table__head__title document">
              <h6>Document</h6>
            </td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody className="settings__table__body">
          <tr className="settings__table__body__row">
            <td className="cell text--2xs">16/10/2023</td>
            <td className="cell cell-dark text--xs">Template one</td>
            <td className="cell text--xs">₦0,000.00</td>
            <td className="cell">
              <button className="download">
                <Icon name="download" />
              </button>
            </td>
          </tr>
          <tr className="settings__table__body__row">
            <td className="cell text--2xs">04/06/2023</td>
            <td className="cell cell-dark text--xs">Template six</td>
            <td className="cell text--xs">₦0,000.00</td>
            <td className="cell">
              <button className="download">
                <Icon name="download" />
              </button>
            </td>
          </tr>
          <tr className="settings__table__body__row">
            <td className="cell text--2xs">04/06/2023</td>
            <td className="cell cell-dark text--xs">Template four</td>
            <td className="cell text--xs">₦0,000.00</td>
            <td className="cell">
              <button className="download">
                <Icon name="download" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="settings__table document app-container settings-table-mobile">
        <div className="settings__table__body">
          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="text--2xs">16/10/2023</p>
              <p className="cell-dark text--xs">Template one</p>
              <p className="text--xs">₦0,000.00</p>
            </div>

            <button className="download">
              <Icon name="download" />
            </button>
          </div>

          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="text--2xs">04/06/2023</p>
              <p className="cell-dark text--xs">Template six</p>
              <p className="text--xs">₦0,000.00</p>
            </div>

            <button className="download">
              <Icon name="download" />
            </button>
          </div>
          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="text--2xs">04/06/2023</p>
              <p className="cell-dark text--xs">Template four</p>
              <p className="text--xs">₦0,000.00</p>
            </div>

            <button className="download">
              <Icon name="download" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
