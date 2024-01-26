import { ReactNode } from "react";
import { Icon } from "../Icon";
import GradientLayout from "../gradientLayout";

interface ThankYouProps {
  iconName: "document" | "pie" | "user" | "plane";
  header: string;
  children: ReactNode;
}

export default function ThankYou({
  iconName,
  header,
  children,
}: ThankYouProps) {
  return (
    <GradientLayout>
      <div className="thank-you">
        <Icon name={iconName} />
        <h2 className="thank-you__title">{header}</h2>
        {children}
      </div>
    </GradientLayout>
  );
}
