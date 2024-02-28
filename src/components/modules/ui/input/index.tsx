import { ReactNode } from "react";
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
}

export default function BaseInput({
  className,
  placeholder,
  label,
  type,
  children,
  textarea,
  name,
  value,
  errorMessage,
  ...props
}: BaseInputProps) {
  return (
    <label className={`base-input ${className}`}>
      <span className="label text--2xs">{label}</span>
      <div className="input-container">
        {textarea ? (
          <textarea className="textarea input"></textarea>
        ) : (
          <input
            className={`input ${errorMessage ? "error-input" : ""}`}
            {...{ placeholder, type, name, value, ...props }}
          />
        )}
        <div className="input-icons">{children}</div>
      </div>
      <p className="error-message text--2xs">{errorMessage}</p>
    </label>
  );
}
