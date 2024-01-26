import { ReactNode } from "react";
import "./index.scss";

interface RadioProps {
  children: ReactNode;
  isChecked?: boolean;
  variant: "primary" | "inverted"
}

export default function Radio({ children, isChecked, variant }: RadioProps) {
  return (
    <div className={`radio--${variant}`}>
      <label className={`radio--${variant}__container ${isChecked ? "active" : ""}`}>
        <span></span>
        <input type="radio" checked={isChecked} className="radio-input" />
      </label>
      <div className="text--xs radio__text">{children}</div>
    </div>
  );
}
