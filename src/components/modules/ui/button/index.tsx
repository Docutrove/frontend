import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { ClipLoader } from "react-spinners";

interface ButtonProps {
  variant: "primary" | "secondary" | "inverted";
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function BaseButton({
  variant,
  children,
  className,
  href,
  onClick,
  isLoading,
  disabled,
}: ButtonProps) {
  const Component: any = href ? Link : "button";

  return (
    <Component
      to={href}
      className={`base-button--${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? (
        <ClipLoader
          color="#f2f7ff"
          loading={isLoading}
          size={24}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        children
      )}
    </Component>
  );
}
