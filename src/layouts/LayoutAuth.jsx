import { Outlet } from "react-router-dom";
import "./LayoutAuth.css"
const LayoutAuth = () => {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
