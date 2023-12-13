import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function BaseButton({
  variant,
  children,
  className,
  href
}: ButtonProps) {
  const Component: any = href ? Link : "button";

  return (
    <Component to={href} className={`base-button--${variant} ${className}`}>
      {children}
    </Component>
  );
}
