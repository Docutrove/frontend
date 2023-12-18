import { ReactNode, useEffect } from "react";
import Footer from "../footer";
import NavBar from "../navbar";
import { useLocation } from "react-router";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

export default function Layout({ className, children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <div className={`${className}`}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
