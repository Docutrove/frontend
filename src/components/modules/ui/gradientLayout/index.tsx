import { ReactNode } from "react";
import Layout from "../../public/layout";
import "./index.scss";

interface GradientLayoutProps {
  className?: string;
  children: ReactNode;
}

export default function GradientLayout({
  className,
  children,
}: GradientLayoutProps) {
  return (
    <Layout className={`bg-gradient ${className}`}>
      <div className="gradient-layout app-container">
        <div className="bg-arrow"></div>
        <div className="gradient-layout__content">{children}</div>
      </div>
    </Layout>
  );
}
