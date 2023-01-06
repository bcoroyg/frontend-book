import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";

const LayoutAdmin = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
