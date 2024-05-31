import { useCustomiseDocContext } from ".";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import InvoiceDetails from "../../ui/invoiceDetails";
import { useState } from "react";

export default function TemplateDetails() {
  const { goBack, setTemplateData, templateData, template } = useCustomiseDocContext();
  const [ data, setData ] = useState(templateData);

  let bs: any;

  const handleInputChange = (field: string, value: string) => {
    const obj = {...data, [field]: value};
    setData(obj);
  }

  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title={template?.name}
      back_button
      backClick={goBack}
      document_text={template?.name}
    >
      <div className="document-details">
        <>
        { template?.configuration.fields.map((field) => {
          { templateData ? (
            bs = <BaseInput
              className="document-details__input"
              label={field}
              placeholder={field}
              value={templateData[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
            />
          ) : (
            bs = <BaseInput
              className="document-details__input"
              label={field}
              placeholder={field}
              onChange={(e) => handleInputChange(field, e.target.value)}
            />
          )}
          return (
            bs
          )
        })}
        </>
      </div>
      <div className="direction-buttons">
        <button className="invoice-back-button" onClick={goBack}>
          <div className="back-button">
            <Icon name="caret-right" className="back-icon" />
          </div>
          <p className="text--xs">Back</p>
        </button>
        <BaseButton variant="primary" onClick={() => setTemplateData(data)}>
            Next
        </BaseButton>
      </div>
    </InvoiceDetails>
  );
}
