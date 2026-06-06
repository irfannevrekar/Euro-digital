import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ServicesLayout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Navigation with the Services Dropdown */}
      <Header />
      
      {/* Main Content Area 
          mt-[88px] accounts for the fixed header height 
      */}
      <main className="mt-[88px] min-h-[calc(100vh-88px)] animate-in fade-in duration-500">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default ServicesLayout;