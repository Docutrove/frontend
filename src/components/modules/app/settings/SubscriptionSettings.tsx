import useModal from "../../../hooks/useModal";
import Modal from "../../ui/modal";
import BaseButton from "../../ui/button";

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
              <BaseButton
                variant="inverted"
                href="/changeplan"
                className="cell-button"
              >
                Change plan
              </BaseButton>
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
              <BaseButton
                variant="inverted"
                className="cell-button"
                onClick={openModal}
              >
                Cancel renewal
              </BaseButton>
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
              <BaseButton
                variant="inverted"
                href="/editpayment"
                className="cell-button"
              >
                Edit
              </BaseButton>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="settings__table settings-subscription app-container settings-table-mobile">
        <div className="settings__table__body">
          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="cell-dark text--sm">Your Subscription</p>
              <p className="text--xs">Tier one</p>
            </div>

            <BaseButton
              variant="inverted"
              href="/changeplan"
              className="cell-button"
            >
              Change plan
            </BaseButton>
          </div>

          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="cell-dark text--sm">Cost</p>
              <p className="text--xs">₦0,000.00</p>
            </div>
          </div>
          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="cell-dark text--sm">New renewal</p>
              <p className="text--xs">16/04/2024</p>
            </div>

            <BaseButton
              variant="inverted"
              className="cell-button"
              onClick={openModal}
            >
              Cancel renewal
            </BaseButton>
          </div>

          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="cell-dark text--sm">Payment method</p>
              <div className="card">
                <img src="/images/master.png" className="card__type" alt="" />
                <p>••• 04/14 | 01/28</p>
              </div>
            </div>

            <BaseButton
              variant="inverted"
              href="/editpayment"
              className="cell-button"
            >
              Edit
            </BaseButton>
          </div>
        </div>
      </div>

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
