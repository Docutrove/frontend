import { ReactNode, ChangeEvent } from "react";
import "./index.scss";

interface BaseInputProps {
  className?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  children?: ReactNode;
  textarea?: boolean;
  value?: string;
  name?: string;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function BaseInput({
  className = "",
  placeholder = "",
  label = "",
  type = "text",
  children,
  textarea = false,
  name = "",
  value = "",
  errorMessage = "",
  onChange,
  ...props
}: BaseInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label className={`base-input ${className}`}>
      {label && <span className="label text--2xs">{label}</span>}
      <div className="input-container">
        {textarea ? (
          <textarea
            className={`textarea input ${errorMessage ? "error-input" : ""}`}
            {...{ placeholder, name, value, onChange: handleChange, ...props }}
          />
        ) : (
          <input
            className={`input ${errorMessage ? "error-input" : ""}`}
            {...{ placeholder, type, name, value, onChange: handleChange, ...props }}
          />
        )}
        <div className="input-icons">{children}</div>
      </div>
      {errorMessage && <p className="error-message text--2xs">{errorMessage}</p>}
    </label>
  );
}
