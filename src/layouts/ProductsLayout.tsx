import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ProductsLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mt-[88px] min-h-[calc(100vh-88px)] animate-in fade-in duration-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default ProductsLayout;
