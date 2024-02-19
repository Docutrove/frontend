import { useState } from "react";

interface UseFormProps {
  onSubmit: any;
  validationSchema: any;
  initialValues: Record<string,any>;
}

export default function useForm({ onSubmit, validationSchema, initialValues }: UseFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  async function handleSubmit() {
    const isvalid = validateForm();
    if (isvalid) onSubmit(values);
  }

  function handleInputChange({ target: { name, value } }: any) {
    setFieldValue(name, value);
  }

  function setFieldValue(name: string, value: string | boolean | number) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function getFieldProps(name: string) {
    return {
      name,
      onChange: handleInputChange,
      onBlur: () => null,
      onFocus: () => null,
    };
  }

  function validateForm() {
    if (!validationSchema) return true;
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return true;
    } catch (err: any) {
      let errorDump: any = {};
      if (!err.inner) return;
      err.inner.forEach((innerError: any) => {
        errorDump[innerError.path] = innerError.message;
      });

      console.log(errorDump);
      setErrors(errorDump);
      return false;
    }
  }

  return {
    handleSubmit,
    getFieldProps,
    setFieldValue,
    values,
    errors,
  };
}
