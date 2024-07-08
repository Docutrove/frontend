import { Link } from 'react-router-dom';
import { useCustomiseDocContext } from '.';
import BaseButton from '../../ui/button';
import InvoiceDetails from '../../ui/invoiceDetails';
import { useEffect, useState, useMemo } from 'react';
import useRequest from '../../../hooks/useRequest';
import { getTemplate } from '../../../../api/templates';
import toast from 'react-hot-toast';

interface TemplateModule {
  name: string;
  label: string;
  dropDownOptions: string[];
  isDropDown: boolean;
}


export default function TemplateInvoice() {
  const { goBack, setTemplate, templateId } = useCustomiseDocContext();
  const { makeRequest } = useRequest(getTemplate, templateId);

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
    };
  }>();

  const [formData, setFormData] = useState<{ [key: string]: string | string[] }>({});
  const [questions, setQuestions] = useState<any[]>([]);
  const [templateHtml, setTemplateHtml] = useState<string>('');
  const [_, setIsLoaded] = useState<boolean>(false);

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
      setIsLoaded(true);
    }
  }, [localTemplate]);

  const processedTemplate = useMemo(() => {
    let processedHtml = templateHtml;

    const getNestedQuestions = (configName: string, configValue: string) => {
      const configQuestion = questions.find(q => q.name === configName && q.isConfig);
      return configQuestion?.questions?.[configValue] || [];
    };

    const replaceDynamicSections = (html: string): string => {
      try {
        return html.replace(/#Dynamic (.*?)#([\s\S]*?)\\Dynamic\\/g, (_, condition, content) => {
          const [key, value] = condition.split('=').map((str: string) => str.trim());
          const formDataValue = typeof formData[key] === 'string' ? formData[key].trim() : '';

          if (formDataValue === value) {
            let processedContent = content;

            const nestedQuestions = getNestedQuestions(key, value);
            nestedQuestions.forEach((question: { name: string }) => {
              const placeholderRegex = new RegExp(`{{${question.name}}}`, 'g');
              processedContent = processedContent.replace(placeholderRegex, formData[question.name] || '------');
            });

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
    console.log(processedHtml);

    // processedHtml = processedHtml.replace(/\[(.*?)\]/g, (match, key) => {
    //   console.log("Match:", match);
    //   console.log("Key:", key); 
    //   const value = formData[key.trim()]; 
    //   console.log("Value:", value); 
    //   return value || '------';
    // });


    processedHtml = processedHtml.replace(/{{(.*?)}}/g, (_, key) => {
      const value = formData[key.trim()];
      if (Array.isArray(value)) {
        console.log(value);
        return value.join(', ') || '------';
      }
      return value || '------';
    });


    return processedHtml;
  }, [formData, templateHtml, questions]);

  return (
    <InvoiceDetails
      subtitle="Customize and download a legal document"
      title={localTemplate?.name}
      back_button
      document_text={processedTemplate}
      backClick={goBack}
    >
      <h5 className="invoice-price">Price: ₦{localTemplate?.price}</h5>
      <p className="text--sm">{localTemplate?.description}</p>
      {localTemplate && (
        <div className="privacy-info">
          <p className="privacy-info__title text--2xs">
            We value your privacy and information
          </p>
          <p className="privacy-info__description text--2xs">
            {localTemplate?.description}. View our{' '}
            <Link to="/coming" className="underline">
              Privacy and Information Policy.
            </Link>
          </p>
        </div>
      )}
      <BaseButton
        variant="primary"
        className="privacy-info__button"
        onClick={() => setTemplate(localTemplate)}
      >
        Customize a document
      </BaseButton>
    </InvoiceDetails>
  );
}
