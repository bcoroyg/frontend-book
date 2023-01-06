import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

const Navbar = () => {
  //Aplicando navigate
  const navigate = useNavigate();

  //Utilizar valores del context
  const [auth, setAuth] = useContext(AuthContext);

  const [query, setQuery] = useState({
    q: "",
  });
  //lee los datos del formulario
  const updateState = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const searchTechnology = (e) => {
    e.preventDefault();
    navigate(`/search/${query.q}`);
    setQuery({ q: "" });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Web Libros
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/books"}>
                Libros
              </NavLink>
            </li>
            {auth.token && (
              <li className="nav-item">
                <NavLink className="nav-link" to={"/dashboard"}>
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
          <form onSubmit={searchTechnology} className="d-flex" role="search">
            <input
              className="form-control me-2"
              name="q"
              type="search"
              placeholder="Buscar libro..."
              aria-label="Search"
              value={query.q}
              onChange={updateState}
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
          {auth.token ? (
            <Link
              to={"/"}
              className="btn btn-outline-danger ms-auto mt-2 mt-md-0"
              role="button"
            >
              Cerrar Sesión
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-outline-primary ms-auto mt-2 mt-md-0"
              role="button"
            >
              Iniciar Sesion
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
