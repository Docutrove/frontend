import { ReactNode } from "react";
import "./index.scss";

interface BaseInputProps {
  className?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  children?: ReactNode;
  textarea?: boolean;
}

export default function BaseInput({
  className,
  placeholder,
  label,
  type,
  children,
  textarea,
}: BaseInputProps) {
  return (
    <label className={`base-input ${className}`}>
      <span className="label text--2xs">{label}</span>
      <div className="input-container">
        {textarea ? (
          <textarea className="textarea input"></textarea>
        ) : (
          <input className="input" placeholder={placeholder} type={type} />
        )}
        <div className="input-icons">{children}</div>
      </div>
    </label>
  );
}
