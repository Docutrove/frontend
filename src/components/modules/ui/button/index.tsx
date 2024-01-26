import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface ButtonProps {
  variant: "primary" | "secondary" | "inverted";
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function BaseButton({
  variant,
  children,
  className,
  href,
  onClick,
}: ButtonProps) {
  const Component: any = href ? Link : "button";

  return (
    <Component
      to={href}
      className={`base-button--${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
