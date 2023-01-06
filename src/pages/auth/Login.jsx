import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../api";
import { AuthContext } from "../../context/auth";

const Login = () => {
  //Navigate
  const navigate = useNavigate();

  //State con los datos del formulario
  const [credentials, setCredentials] = useState({});

  //Context Auth
  const [auth, setAuth] = useContext(AuthContext);

  //Almacenar lo que el usuario escribe en el state
  const handleChange = ({ target }) => {
    setCredentials((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  //Iniciar sesion en el servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //autenticar usuario
      const response = await authAPI.login(credentials);
      //Extraer el token y colocarlo en localstorage
      const { token } = response;
      localStorage.setItem("token", token);

      //Colocarlo en el Context
      setAuth({
        token,
        auth: true,
      });

      //Redireccionar
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <img className="logo" src={"./assets/login.png"} alt={"logo login"} />
        <h3 className="mb-3">Login</h3>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Ingresar username."
            required
            onChange={handleChange}
          />
          <label>Usuario</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Ingresar contraseña."
            required
            onChange={handleChange}
          />
          <label>Contraseña</label>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary btn-lg rounded-0">
            Iniciar sesión
          </button>
        </div>
        <p className="mt-3 mb-0">
          <Link className="text-decoration-none" to={"/"}>
            Ir a inicio
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
