import { useCustomiseDocContext } from ".";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import InvoiceDetails from "../../ui/invoiceDetails";
import Radio from "../../ui/radio";

export default function TemplateDetails() {
  const { goBack, goNext } = useCustomiseDocContext();
  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title="Template name"
      back_button
      document_text="Template One"
    >
      <div className="document-details">
        <BaseInput
          className="document-details__input"
          label="1. Forem ipsum dolor sit amet, consectetur?"
          placeholder="DD/MM/YY"
          type="date"
        >
          <Icon name="calendar" />
        </BaseInput>

        <BaseInput
          className="document-details__input"
          label="2. Ipsum dolor sit amet, consectetur?"
          placeholder="Free text field answer"
        />
        <BaseInput
          label="3. Forem ipsum dolor sit amet, consectetur?"
          placeholder=""
        />
        <BaseInput
          className="document-details__input"
          label="4. Ipsum dolor sit amet, consectetur?"
          placeholder="Free text field answer"
        />
        <BaseInput
          label="5. Forem ipsum dolor sit amet, consectetur?"
          placeholder=""
        />
        <div>
          <h6 className="document-details__input">
            6. Ipsum dolor sit amet, consectetur?
          </h6>
          <div className="document-check">
            <Radio variant="inverted" isChecked>
              <p>Choice one lorem ipsum</p>
            </Radio>
            <Radio variant="inverted">
              <p>Choice two</p>
            </Radio>
            <Radio variant="inverted">
              <p>Choice three</p>
            </Radio>
          </div>
        </div>
      </div>
      <div className="direction-buttons">
        <button className="invoice-back-button" onClick={goBack}>
          <div className="back-button">
            <Icon name="caret-right" className="back-icon" />
          </div>
          <p className="text--xs">Back</p>
        </button>
        <BaseButton variant="primary" onClick={goNext}>
          Next
        </BaseButton>
      </div>
    </InvoiceDetails>
  );
}
