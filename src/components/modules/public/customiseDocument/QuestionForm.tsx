import React, { useState, useEffect } from 'react';
import { Icon } from '../../ui/Icon'
import BaseButton from '../../ui/button'
import { useCustomiseDocContext } from '.'
import ProgressBar from '../../ui/ProgressBar';
import BaseInput from '../../ui/input';

interface Question {
  label: string;
  name: string;
  type: string;
  options?: string[];
  isConfig?: boolean;
  questions?: { [key: string]: Question[] };
}

interface FormProps {
  questions: Question[];
  formData: { [key: string]: string | string[] };
  handleChange: (field: string, value: string | string[]) => void;
  handleSubmit: () => void;
  finaldata:any
}

const QuestionForm: React.FC<FormProps> = ({ questions, formData, handleChange, handleSubmit,finaldata }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>(questions);
  const { goBack, setTemplateData, templateData, template } =
  useCustomiseDocContext()

  useEffect(() => {
    const updateQuestions = () => {
      let updatedQuestions: Question[] = [];
      let shouldUpdate = false;

      questions.forEach((question, index) => {
        updatedQuestions.push(question);
        if (question.isConfig && formData[question.name]) {
          const configValue = formData[question.name] as string;
          const nestedQuestions = question.questions?.[configValue] || [];
          updatedQuestions = [
            ...updatedQuestions,
            ...nestedQuestions
          ];
          shouldUpdate = true;
        }
      });

      if (shouldUpdate) {
        setCurrentQuestions(updatedQuestions);
      }
    };

    updateQuestions();
  }, [formData, questions]);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, currentQuestions.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleMultiSelectChange = (field: string, selectedOptions: HTMLSelectElement) => {
    const values = Array.from(selectedOptions.selectedOptions, (option) => option.value);
    handleChange(field, values);
  };

  const currentQuestion = currentQuestions[currentStep];
  if (!currentQuestion) return null;

  const { label, name, options, type } = currentQuestion;

  return (
    <>
    <div>
      <div>{<ProgressBar currentStep={currentStep} totalQuestions={currentQuestions.length} />
      }</div>
    </div>
    <div>
      <div>
        <label>{label}</label>
        {type === 'text' && (
          <BaseInput
          className="document-details__input"
            type="text"
            value={formData[name] as string || ''}
            onChange={(e) => handleChange(name, e.target.value)}
          />
        )}
        {type === 'date' && (
          <BaseInput
          className="document-details__input"
            type="date"
            value={formData[name] as string || ''}
            onChange={(e) => handleChange(name, e.target.value)}
          />
        )}
        {type === 'textarea' && (
          <textarea
          className="document-details__input"
            value={formData[name] as string || ''}
            onChange={(e) => handleChange(name, e.target.value)}
          />
        )}
        {type === 'dropdown' && (
          <select
            value={formData[name] as string || ''}
            onChange={(e) => handleChange(name, e.target.value)}
          >
            <option value="">Select an option</option>
            {options?.map((option: string, index: number) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        )}
        {type === 'radio' && (
          <div>
            {options?.map((option: string, index: number) => (
              <label key={index}>
                <input
                className="document-details__input"
                  type="radio"
                  name={name}
                  value={option}
                  checked={formData[name] === option}
                  onChange={(e) => handleChange(name, e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
        {type === 'select' && (
          <select
            multiple
            value={formData[name] as string[] || []}
            onChange={(e) => handleMultiSelectChange(name, e.target)}
          >
            {options?.map((option: string, index: number) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        )}
      </div>
      {/* <div>
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        {currentStep < currentQuestions.length - 1 ? (
          <button onClick={nextStep}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div> */}

      <div className="direction-buttons">
        <button
          className="invoice-back-button"
          onClick={prevStep}
        >
          <div className="back-button">
            <Icon name="caret-right" className="back-icon" />
          </div>
          <p className="text--xs">Back</p>
        </button>

        {currentStep < currentQuestions.length - 1 ? (
          <BaseButton variant="primary" onClick={nextStep}>
            Next
          </BaseButton>
        ) : (
          <BaseButton variant="primary" onClick={() => setTemplateData(finaldata)}>
            Next
          </BaseButton>
        )}
      </div>
    </div>
    </>
    
  );
};

export default QuestionForm;
