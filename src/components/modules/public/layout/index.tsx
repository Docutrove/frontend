import { ReactNode } from "react";
import Footer from "../footer";
import NavBar from "../navbar";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

export default function Layout({ className, children }: LayoutProps) {
  return (
    <div className={`${className}`}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
