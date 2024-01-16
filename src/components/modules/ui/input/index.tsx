import "./index.scss";

interface BaseInputProps {
  className?: string;
  placeholder?: string;
  label?: string;
  type?:string;
}

export default function BaseInput({
  className,
  placeholder,
  label,
  type
}: BaseInputProps) {
  return (
    <label className={`base-input ${className}`}>
      <span className="text--2xs label">{label}</span>
      <input className="input" placeholder={placeholder} type={type} />
    </label>
  );
}
