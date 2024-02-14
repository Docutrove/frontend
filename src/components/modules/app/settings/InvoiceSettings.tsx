import { Icon } from "../../ui/Icon";

export default function InvoiceSettings() {
  return (
    <>
      <table className="settings__table document app-container">
        <thead className="settings__table__head">
          <tr>
            <td className="settings__table__head__title text--sm">
              Invoice ID
            </td>
            <td className="settings__table__head__title text--sm">Date</td>
            <td className="settings__table__head__title text--sm">Cost</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="settings__table__body">
          <tr className="settings__table__body__row">
            <td className="cell text--xs">11842TUYJDC</td>
            <td className="cell text--xs">16/10/2023</td>
            <td className="cell text--xs">₦0,000.00</td>
            <td className="cell">
              <button className="download">
                <Icon name="download" />
              </button>
            </td>
          </tr>
          <tr className="settings__table__body__row">
            <td className="cell text--xs">23435TIHGVK</td>
            <td className="cell text--xs">04/06/2023</td>
            <td className="cell text--xs">₦0,000.00</td>
            <td className="cell">
              <button className="download">
                <Icon name="download" />
              </button>
            </td>
          </tr>
          <tr className="settings__table__body__row">
            <td className="cell text--xs">857653IRUTHG</td>
            <td className="cell text--xs">30/02/2023</td>
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
              <p className="text--xs">11842TUYJDC</p>
              <p className="text--xs">16/10/2023</p>
              <p className="text--xs">₦0,000.00</p>
            </div>

            <button className="download">
              <Icon name="download" />
            </button>
          </div>

          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="text--xs">23435TIHGVK</p>
              <p className="text--xs">04/06/2023</p>
              <p className="text--xs">₦0,000.00</p>
            </div>

            <button className="download">
              <Icon name="download" />
            </button>
          </div>
          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="text--xs">857653IRUTHG</p>
              <p className="text--xs">30/02/2023</p>
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
