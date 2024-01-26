import { useCustomiseDocContext } from ".";
import ChooseDocumentType from "./ChooseDocumentType";
import ChooseTemplate from "./ChooseTemplate";
import ConfirmTemplate from "./ConfirmTemplate";
import TemplateDetails from "./TemplateDetails";
import TemplateInvoice from "./TemplateInvoice";

export default function CreateDocument() {
  const { activeScreen } = useCustomiseDocContext();

  return (
    <>
      {activeScreen === "choose_document_type" && <ChooseDocumentType />}
      {activeScreen === "choose_template" && <ChooseTemplate />}
      {activeScreen === "template_invoice" && <TemplateInvoice />}
      {activeScreen === "template_details" && <TemplateDetails />}
      {activeScreen === "confirm_template" && <ConfirmTemplate />}
    </>
  );
}
