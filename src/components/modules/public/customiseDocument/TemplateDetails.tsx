import { useCustomiseDocContext } from ".";
import { Icon } from "../../ui/Icon";
import BaseButton from "../../ui/button";
import BaseInput from "../../ui/input";
import InvoiceDetails from "../../ui/invoiceDetails";
import { useState } from "react";

interface TemplateModule {
  name: string,
  label: string,
}

interface DynamicObject {
  [key: string]: any;
}

interface RecordsProps {
  payload: TemplateModule[] | undefined,
  templateData: DynamicObject | undefined,
  data: DynamicObject | undefined,
  handleInputChange: any,
}

interface PaginationProps {
  nPages: number,
  currentPage: number,
  setCurrentPage: any,
}

const Records = (props: RecordsProps) => {
  let bs: any;

  // useEffect(())
  return (
    <>
      { props.payload?.map((field) => {
        { props.templateData ? (
          bs = <BaseInput
            className="document-details__input"
            label={field?.label}
            placeholder={field?.name}
            value={props.templateData[field?.name]}
            onChange={(e) => props.handleInputChange(field?.name, e.target.value)}
          />
        ) : (
          props.data ? (
            bs = <BaseInput
              className="document-details__input"
              label={field?.label}
              placeholder={field?.name}
              value={props.data[field?.name]}
              onChange={(e) => props.handleInputChange(field?.name, e.target.value)}
            />
          ) : (
            bs = <BaseInput
              className="document-details__input"
              label={field?.label}
              placeholder={field?.name}
              onChange={(e) => props.handleInputChange(field?.name, e.target.value)}
            />
          )
        )}
        return (
          bs
        )
      })}
    </>
  )
}

const Pagination = (props: PaginationProps) => {
    const goToNextPage = () => {
      if(props.currentPage !== props.nPages) props.setCurrentPage(props.currentPage + 1)
    }
    const goToPrevPage = () => {
      if(props.currentPage !== 1) props.setCurrentPage(props.currentPage - 1)
    }
    return (
      <nav>
        <ul className='pagination justify-content-center'>
          <li className="page-item">
            <button className="page-link" onClick={goToPrevPage}>  
              &#8592;
            </button>
            &nbsp;
            ||
            &nbsp;
            <button className="page-link" onClick={goToNextPage}>
              &#8594;
            </button>
          </li>
        </ul>
      </nav>
    )
}

export default function TemplateDetails() {
  const { goBack, setTemplateData, templateData, template } = useCustomiseDocContext();
  const [ data, setData ] = useState<DynamicObject>();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const templateRequestData = template?.configuration.formConfig.modules

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = templateRequestData?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(templateRequestData?.length || recordsPerPage / recordsPerPage)

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
      document_text={template?.configuration.previewHtml}
    >
      <div className="document-details">
        <Records payload={currentRecords} templateData={templateData}
        handleInputChange={handleInputChange} data={data}/>
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
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
