import { Link } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import Modal from "../../ui/modal";

export default function SubscriptionSettings() {
  const [modalVisible, openModal, closeModal] = useModal();
  return (
    <>
      <table className="settings__table settings-subscription app-container">
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
              <button className="cell-button" onClick={openModal}>
                Cancel renewal
              </button>
            </td>
          </tr>
          <tr className="settings__table__body__row">
            <td className="cell cell-dark text--sm">Payment method</td>
            <td className="cell text--xs">
              <div className="card">
                <img src="/images/master.png" className="card__type" alt="" />
                <p>••• 04/14 | 01/28</p>
              </div>
            </td>
            <td className="cell cell-end">
              <Link to="/editpayment" className="cell-button">
                Edit
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal
        title="Cancellation renewal"
        isOpen={modalVisible}
        onClose={closeModal}
      >
        <p className="text--xs">Are you sure you would like to cancel?</p>
      </Modal>
    </>
  );
}
