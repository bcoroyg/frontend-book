import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";

const LayoutAdmin = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
