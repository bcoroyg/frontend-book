import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div className="container-fluid">
      <nav>Navbar Admin</nav>
      <Outlet/>
    </div>
  );
};

export default LayoutAdmin;
