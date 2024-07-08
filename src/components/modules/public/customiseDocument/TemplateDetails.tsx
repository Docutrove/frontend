import { useCustomiseDocContext } from '.'
import InvoiceDetails from '../../ui/invoiceDetails'
import { useEffect, useState } from 'react'
import ContactSection from '../../ui/ContactSection'
import QuestionForm from './QuestionForm'
import './index.css';
import useRequest from '../../../hooks/useRequest';
import { getTemplate } from '../../../../api/templates';
import { useMemo } from 'react'
import toast from 'react-hot-toast';


interface TemplateModule {
  name: string
  label: string
  dropDownOptions: string[]
  isDropDown: boolean
}

interface DynamicObject {
  [key: string]: any
}



// interface RecordsProps {
//   payload: TemplateModule[] | undefined
//   templateData: DynamicObject | undefined
//   data: DynamicObject | undefined
//   handleInputChange: any
// }

// const Records = (props: RecordsProps) => {
//   return (
//     <>
//       {props.payload?.map((field, index) => {
//         let bs
//         if (field.isDropDown) {
//           bs = (
//             <Select
//               key={index}
//               label={field?.label}
//               options={field?.dropDownOptions}
//             />
//           )
//         } else if (props.data) {
//           bs = (
//             <BaseInput
//               key={index}
//               className="document-details__input"
//               label={field?.label}
//               placeholder={field?.name}
//               value={props.data[field?.name]}
//               onChange={(e) =>
//                 props.handleInputChange(field?.name, e.target.value)
//               }
//             />
//           )
//         } else {
//           bs = (
//             <BaseInput
//               key={index}
//               className="document-details__input"
//               label={field?.label}
//               placeholder={field?.name}
//               onChange={(e) =>
//                 props.handleInputChange(field?.name, e.target.value)
//               }
//             />
//           )
//         }
//         return bs
//       })}
//     </>
//   )
// }

// interface Template {
//   name: string;
//   price: number;
//   description: string;
//   configuration: {
//     fields: any[];
//     formConfig: {
//       modules: any[];
//     };
//     previewHtml: string;
//   };
// }

export default function TemplateDetails() {
  const { goBack, template, templateId } =
    useCustomiseDocContext()
  const { makeRequest } = useRequest(getTemplate, templateId);
  const [, setData] = useState<DynamicObject>()
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(1)
  const [, setNPages] = useState(1)
  // const [, setTemplateDatats] = useState<DynamicObject | undefined>(undefined);
  const [formData, setFormData] = useState<{ [key: string]: string | string[] }>({});
  const [questions, setQuestions] = useState<any[]>([]);
  const [templateHtml, setTemplateHtml] = useState<string>('');
  const [completeTemplateHtml, setCompleteTemplateHtml] = useState<string>('');
  const [, setIsLoaded] = useState<boolean>(false);

  //   const { goBack, setTemplateData, templateData, template } = useCustomiseDocContext();
  //   const [ data, setData ] = useState<DynamicObject>();
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [recordsPerPage] = useState(1);
  //   const [nPages, setNPages] = useState(1);

  const templateRequestData = template?.configuration.formConfig.modules
  const initialValues = templateRequestData?.reduce(
    (values: { [key: string]: string }, field) => {
      values[field.name] = ''
      return values
    },
    {}
  )

  const [localTemplate, setLocalTemplate] = useState<{
    name: string;
    price: number;
    description: string;
    configuration: {
      fields: [];
      formConfig: {
        modules: TemplateModule[];
      };
      previewHtml: string;
      html: string;
    };
  }>();

  // const indexOfLastRecord = currentPage * recordsPerPage
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  // const currentRecords = templateRequestData?.slice(
  //   indexOfFirstRecord,
  //   indexOfLastRecord

  // )


  const getTemplateLocal = async () => {
    const [thisTemplate, err] = await makeRequest();

    if (err) {
      toast.error(err.message);
    }
    setLocalTemplate(thisTemplate?.data);
  };

  useEffect(() => {
    getTemplateLocal();
  }, [templateId]);


  useEffect(() => {
    if (localTemplate) {
      const fields = localTemplate.configuration.formConfig.modules;
      const html = localTemplate.configuration.previewHtml;
      const completeHtml = localTemplate.configuration.html;

      const initialFormData: { [key: string]: string | string[] } = {};
      fields.forEach((field: any) => {
        if (field.isConfig) {
          initialFormData[field.name] = field.defaultValue;
        } else {
          initialFormData[field.name] = '';
        }
      });

      setQuestions(fields);
      setFormData(initialFormData);
      setTemplateHtml(html);
      setCompleteTemplateHtml(completeHtml);
      setIsLoaded(true);
    }
  }, [localTemplate]);

  const getNPages = () => {
    if (templateRequestData?.length) {
      setNPages(Math.ceil(templateRequestData?.length / recordsPerPage))
    }
  }



  const processedTemplate = useMemo(() => {
    let processedHtml = templateHtml;



    // Function to get nested questions for a given config question
    const getNestedQuestions = (configName: string, configValue: string) => {
      const configQuestion = questions.find(q => q.name === configName && q.isConfig);
      return configQuestion?.questions?.[configValue] || [];
    };

    // Function to replace dynamic sections
    const replaceDynamicSections = (html: string): string => {
      try {
        return html.replace(/#Dynamic (.*?)#([\s\S]*?)\\Dynamic\\/g, (_, condition, content) => {
          // console.log("Match:", match);
          // console.log("Condition:", condition);
          // console.log("Content:", content);

          const [key, value] = condition.split('=').map((str: string) => str.trim());
          // const formDataValue = formData[key]?.trim();
          const formDataValue = typeof formData[key] === 'string' ? formData[key].trim() : '';

          // console.log("Key:", key);
          // console.log("Value:", value);
          // console.log("formData[key]:", formDataValue);

          if (formDataValue === value) {
            // console.log("Matching value of chakachak", formData);
            let processedContent = content;

            // Handle nested questions
            const nestedQuestions = getNestedQuestions(key, value);
            nestedQuestions.forEach((question: { name: string | number }) => {
              const placeholderRegex = new RegExp(`{{${question.name}}}`, 'g');
              processedContent = processedContent.replace(placeholderRegex, formData[question.name] || '------');
            });

            // console.log("Processed Content:", processedContent);
            return replaceDynamicSections(processedContent);
          }

          return '';
        });
      } catch (error) {
        console.error('Error in replaceDynamicSections:', error);
        return '';
      }
    };


    processedHtml = replaceDynamicSections(processedHtml);


    processedHtml = processedHtml.replace(/{{(.*?)}}/g, (_match, key) => {
      const value = formData[key.trim()];
      if (Array.isArray(value)) {
        // console.log(value);
        return value.join(', ') || '------';
      }
      return value || '------';
    });

    let processedCompleteHtml = replaceDynamicSections(completeTemplateHtml);
    processedCompleteHtml = processedCompleteHtml.replace(/{{(.*?)}}/g, (_match, key) => {
      const value = formData[key.trim()];
      if (Array.isArray(value)) {
        // console.log(value);
        return value.join(', ') || '------';
      }
      return value || '------';
    });
    localStorage.setItem('processedCompleteHtml', processedCompleteHtml)

    return processedHtml;
  }, [formData, templateHtml, questions]);

  // useEffect(() => {
  //   const savedData = localStorage.getItem('formData');
  //   if (savedData) {
  //     setFormData(JSON.parse(savedData));
  //   }

  //   fetch('http://ec2-3-141-13-187.us-east-2.compute.amazonaws.com/api/v1/item/29')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const fields = data.data.configuration.formConfig.modules;
  //       const html = data.data.configuration.html;

  //       // Initialize formData with empty strings for all expected keys
  //       const initialFormData: { [key: string]: string | string[] } = {};
  //       fields.forEach((field: any) => {
  //         if (field.isConfig) {
  //           initialFormData[field.name] = field.defaultValue;
  //         } else {
  //           initialFormData[field.name] = '';
  //         }
  //       });
  //       setQuestions(fields);
  //       setFormData(initialFormData);
  //       setTemplateHtml(html);
  //       setIsLoaded(true);
  //     });
  // }, []);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setTemplateDatats((prevTemplateData) => ({
  //     ...prevTemplateData,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (field: string, value: string | string[]) => {
    setFormData(prevFormData => ({ ...prevFormData, [field]: value }));
  };

  const handleSubmit = () => {
    // console.log('Form submitted:', formData);
  };

  useEffect(() => {
    setData(initialValues)
    getNPages()
  }, [])

  // const goToNextPage = () => {
  //   if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  // }

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <InvoiceDetails
      back_button
      backClick={currentPage === 1 ? goBack : goToPrevPage}
      document_text={processedTemplate}
      backgroundColor="#F9F9F9"
      hideBackButton
    >
      <div className="document-details">
        <QuestionForm
          questions={questions}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          finaldata={processedTemplate}
        />
      </div>

      <div>{<ContactSection />}</div>

      <div>

      </div>
    </InvoiceDetails>
  )
}
