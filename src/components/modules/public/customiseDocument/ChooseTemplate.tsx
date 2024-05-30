import { useCustomiseDocContext } from ".";
import GradientLayout from "../../ui/gradientLayout";
import { getTemplatesByCategory } from "../../../../api/templates";
import useRequest from "../../../hooks/useRequest";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ChooseTemplate() {
  const { goNext, categoryId } = useCustomiseDocContext();
  const { makeRequest } = useRequest(getTemplatesByCategory, categoryId);
  const [templates, setTemplates] = useState<[{name: string, id: string}]>()

  const requestTemplateByCategory = async () => {
    const [allTemplates, err] = await makeRequest();

    if (err) {
      toast.error(err.message);
    }
    setTemplates(allTemplates?.data)
    console.log(templates)
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
          Tech / Startup agreement templates:
        </p>
        <div className="options-grid">
          {/* <>
          { templates?.map((template) => {
            return (
              <div className="option" onClick={() => setTemplateId(template.id)}>
                <p>{template.name}</p>
              </div>
            )
          })}
          </> */}
          <div className="option" onClick={goNext}>
            <p>Template one</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template two</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template three</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template four</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template five</p>
          </div>
          <div className="option" onClick={goNext}>
            <p>Template six</p>
          </div>
        </div>
      </div>
    </GradientLayout>
  );
}
