import useModal from "../../../hooks/useModal";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import Modal from "../../ui/modal";

export default function AccountSettings() {
  const [showNameModal, openNameModal, closeNameModal] = useModal();
  const [showEmailModal, openEmailModal, closeEmailModal] = useModal();
  const [showPasswordModal, openPasswordModal, closePasswordModal] = useModal();

  return (
    <>
      <table className="settings__table account app-container">
        <tbody className="settings__table__body">
          <tr className="settings__table__body__row">
            <td className="cell cell-dark text--sm">Account name</td>
            <td className="cell text--xs">Andrew Smith</td>
            <td className="cell">
              <BaseButton
                variant="inverted"
                className="cell-button"
                onClick={openNameModal}
              >
                Edit
              </BaseButton>
            </td>
          </tr>
          <tr className="settings__table__body__row">
            <td className="cell cell-dark text--sm">Account email</td>
            <td className="cell text--xs">Andrew.Smith@instinctif.com</td>
            <td className="cell">
              <BaseButton
                variant="inverted"
                className="cell-button"
                onClick={openEmailModal}
              >
                Edit
              </BaseButton>
            </td>
          </tr>
          <tr className="settings__table__body__row">
            <td className="cell cell-dark text--sm">Password</td>
            <td className="cell text--xs">**************</td>
            <td className="cell">
              <BaseButton
                variant="inverted"
                className="cell-button"
                onClick={openPasswordModal}
              >
                Edit
              </BaseButton>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="settings__table account app-container settings-table-mobile">
        <div className="settings__table__body">
          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="cell-dark text--sm">Account name</p>
              <p className="text--xs">Andrew Smith</p>
            </div>

            <BaseButton
              variant="inverted"
              className="cell-button"
              onClick={openNameModal}
            >
              Edit
            </BaseButton>
          </div>
          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="cell-dark text--sm">Account email</p>
              <p className="text--xs">Andrew.Smith@instinctif.com</p>
            </div>

            <BaseButton
              variant="inverted"
              className="cell-button"
              onClick={openEmailModal}
            >
              Edit
            </BaseButton>
          </div>
          <div className="settings__table__body__row settings-mobile">
            <div className="table-cells">
              <p className="cell-dark text--sm">Password</p>
              <p className="text--xs">**************</p>
            </div>

            <BaseButton
              variant="inverted"
              className="cell-button"
              onClick={openPasswordModal}
            >
              Edit
            </BaseButton>
          </div>
        </div>
      </div>

      <Modal
        title="Edit profile"
        isOpen={showNameModal}
        onClose={closeNameModal}
      >
        <BaseInput label="First name*" placeholder="Andrew" />
        <BaseInput label="Last name*" placeholder="Smith" />
      </Modal>
      <Modal
        title="Edit profile"
        isOpen={showEmailModal}
        onClose={closeEmailModal}
      >
        <BaseInput
          label="Email address*"
          placeholder="Andrew.Smith@instinctif.com"
        />
        <BaseInput label="New email address*" />
        <BaseInput label="Confirm new email address*" />
      </Modal>
      <Modal
        title="Edit profile"
        isOpen={showPasswordModal}
        onClose={closePasswordModal}
      >
        <BaseInput label="Password*" placeholder="Andrew" />
        <BaseInput label="New password*" />
        <BaseInput label="Confirm New password*" />
      </Modal>
    </>
  );
}
