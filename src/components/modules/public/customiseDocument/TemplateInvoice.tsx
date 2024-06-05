import { Link } from "react-router-dom";
import { useCustomiseDocContext } from ".";
import BaseButton from "../../ui/button";
import InvoiceDetails from "../../ui/invoiceDetails";
import { useEffect, useState } from "react";
import useRequest from "../../../hooks/useRequest";
import { getTemplate } from "../../../../api/templates";
import toast from "react-hot-toast";

interface TemplateModule {
  name: string,
  label: string,
}

export default function TemplateInvoice() {
  const { goBack, setTemplate, templateId } = useCustomiseDocContext();
  const { makeRequest } = useRequest(getTemplate, templateId);

  const [localTemplate, setLocalTemplate] = useState<{
    name: string,
    price: number,
    description: string,
    configuration: {
      fields: [],
      formConfig: {
        modules: TemplateModule[],
      },
      previewHtml: string,
    }
  }>()

  const getTemplateLocal = async () => {
    const [thisTemplate, err] = await makeRequest();

    if (err) {
      toast.error(err.message);
    }
    setLocalTemplate(thisTemplate?.data)
  }

  useEffect(() => {
    getTemplateLocal();
  }, []);


  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title={localTemplate?.name}
      back_button
      document_text={localTemplate?.configuration.previewHtml}
      backClick={goBack}
    >
      <h5 className="invoice-price">Price: ₦{localTemplate?.price}</h5>
      <p className="text--sm">
        {localTemplate?.description}
      </p>
      <div className="privacy-info">
        <p className="privacy-info__title text--2xs">
          We value your privacy and information
        </p>
        <p className="privacy-info__description text--2xs">
          {localTemplate?.description}. View our{" "}
          <Link to="/coming" className="underline">Privacy and Information Policy.</Link>
        </p>
      </div>
      <BaseButton variant="primary" className="privacy-info__button" onClick={() => setTemplate(localTemplate)}>
        Customize a document
      </BaseButton>
    </InvoiceDetails>
  );
}
