import { useCustomiseDocContext } from ".";
import GradientLayout from "../../ui/gradientLayout";
import { getTemplatesByCategory } from "../../../../api/templates";
import useRequest from "../../../hooks/useRequest";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Icon } from "../../ui/Icon";

export default function ChooseTemplate() {
  const { setTemplateId, categoryId, categories, goBack } = useCustomiseDocContext();
  const { makeRequest } = useRequest(getTemplatesByCategory, categoryId);
  const [templates, setTemplates] = useState<[{name: string, id: string}]>()
  const [ category, setCategory ] = useState<string | undefined>('')

  const requestTemplateByCategory = async () => {
    const [allTemplates, err] = await makeRequest();

    if (err) {
      toast.error(err.message);
    }
    setTemplates(allTemplates?.data)
    const cat = categories?.filter(item => item.id === categoryId)[0];
    setCategory(cat?.name)
  };

  useEffect(() => {
    requestTemplateByCategory();
  }, []);


  return (
    <GradientLayout arrow>
      <div className="choose-document-type">
        <p className="gradient-subtitle text--sm">
          Customize and download a legal document
        </p>
        <h2 className="gradient-title">
          Select the specific template you need
        </h2>
        <p className="choose-document-type__text text--sm">
          {category}
        </p>
        <div className="options-grid">
          <>
          { templates?.map((template) => {
            return (
              <div className="option" onClick={() => setTemplateId(template.id)}>
                <p>{template.name}</p>
              </div>
            )
          })}
          </>
        </div>
      </div>
      <div className="direction-buttons direction-buttons__noboder">
        <button className="invoice-back-button" onClick={goBack}>
          <div className="back-button">
            <Icon name="caret-right" className="back-icon" />
          </div>
          <p className="text--xs">Back</p>
        </button>
        
      </div>
    </GradientLayout>
  );
}
