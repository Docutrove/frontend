import { Icon } from "../Icon";
import "./index.scss";

interface SelectProps {
  label: string;
  options: readonly string[];
}

export default function Select({ label, options }: SelectProps) {
  return (
    <label className="select">
      <h6>{label}</h6>
      <div className="select__box">
        <select name="" id="" className="text--xs">
          {options.map((option)=>(
          <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <Icon name="dropdown" className="select__box__icon" />
      </div>
    </label>
  );
}
