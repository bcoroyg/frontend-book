import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";

const LayoutAdmin = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutAdmin;
