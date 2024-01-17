export default function SubscriptionSettings() {
  return (
    <table className="settings__table app-container">
      <tbody className="settings__table__body">
        <tr className="settings__table__body__row">
          <td className="cell cell-dark text--sm">Your Subscription</td>
          <td className="cell text--xs">Tier one</td>
          <td className="cell cell-end">
            <button className="cell-button">Change plan</button>
          </td>
        </tr>
        <tr className="settings__table__body__row">
          <td className="cell cell-dark text--sm">Cost</td>
          <td className="cell text--xs">₦0,000.00</td>
          <td className="cell"></td>
        </tr>
        <tr className="settings__table__body__row">
          <td className="cell  cell-dark text--sm">New renewal</td>
          <td className="cell text--xs">16/04/2024</td>
          <td className="cell cell-end">
            <button className="cell-button">Cancel renewal</button>
          </td>
        </tr>
        <tr className="settings__table__body__row">
          <td className="cell cell-dark text--sm">Payment method</td>
          <td className="cell text--xs card">
            <img src="/images/master.png" className="card__type" alt="" /> •••
            04/14 | 01/28
          </td>
          <td className="cell cell-end">
            <button className="cell-button">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
