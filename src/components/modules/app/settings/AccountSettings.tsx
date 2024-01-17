export default function AccountSettings() {
  return (
    <table className="settings__table app-container">
      <tbody className="settings__table__body">
        <tr className="settings__table__body__row">
          <td className="cell cell-dark text--sm">Account name</td>
          <td className="cell text--xs">Andrew Smith</td>
          <td className="cell">
            <button className="cell-button">Edit</button>
          </td>
        </tr>
        <tr className="settings__table__body__row">
          <td className="cell cell-dark text--sm">Account email</td>
          <td className="cell text--xs">Andrew.Smith@instinctif.com</td>
          <td className="cell">
            <button className="cell-button">Edit</button>
          </td>
        </tr>
        <tr className="settings__table__body__row">
          <td className="cell cell-dark text--sm">Password</td>
          <td className="cell text--xs">**************</td>
          <td className="cell">
            <button className="cell-button">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
