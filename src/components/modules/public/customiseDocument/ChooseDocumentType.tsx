import { useCustomiseDocContext } from ".";
import GradientLayout from "../../ui/gradientLayout";

export default function ChooseDocumentType() {
  const {setCategoryId, categories} = useCustomiseDocContext()
    
  return (
    <GradientLayout arrow>
      <div className="choose-document-type">
        <p className="gradient-subtitle text--sm">
          Customize and download a legal document
        </p>
        <h2 className="gradient-title">
          What type of legal document would you like to create?
        </h2>
        <div className="options-grid">
          <>
          { categories?.map((category) => {
            return (
              <div className="option" onClick={() => setCategoryId(category.id)}>
                <p className="text--sm">{category?.name}</p>
              </div>
            )
          })}
          </>
        </div>
      </div>
    </GradientLayout>
  );
}
