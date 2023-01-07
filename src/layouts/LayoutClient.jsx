import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

const LayoutClient = () => {
  return (
    <>
      <Navbar/>
      <div className="container-fluid">
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};

export default LayoutClient;
