import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Ajuste de padding para compensar el navbar */}
      <main className="flex-grow ">
        {children}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};


export default Layout;