import { Outlet } from "react-router-dom";

const LayoutClient = () => {
  return (
    <div className="container-fluid">
      <nav>Navbar Client</nav>
      <Outlet/>
    </div>
  );
};

export default LayoutClient;
