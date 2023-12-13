import { Icon } from "../Icon";
import "./index.scss";

interface SelectProps {
  label: string;
}

export default function Select({ label }: SelectProps) {
  return (
    <label className="select">
      <h6>{label}</h6>
      <div className="select__box">
        <select name="" id="" className="text--xs">
          <option value="">Lorem ipsum</option>
        </select>
        <Icon name="caret-right" className="select__box__icon" />
      </div>
    </label>
  );
}
