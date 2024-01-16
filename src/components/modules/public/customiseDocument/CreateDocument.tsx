import { useCustomiseDocContext } from ".";
import ChooseDocumentType from "./ChooseDocumentType";
import ChooseTemplate from "./ChooseTemplate";
import TemplateDetails from "./TemplateInvoice";

export default function CreateDocument() {
  const { activeScreen } = useCustomiseDocContext();

  return (
    <>
      {activeScreen === "choose_document_type" && <ChooseDocumentType />}
      {activeScreen === "choose_template" && <ChooseTemplate />}
      {activeScreen === "template_details" && <TemplateDetails />}
    </>
  );
}
