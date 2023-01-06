import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="body">
      <form action="" method="post">
        <img className="logo" src={"./assets/login.png"} alt="" srcset="" />
        <h3 className="mb-3">Login</h3>
        <div className="form-floating mb-3">
          <input className="form-control" type="text" name="username" />
          <label>Usuario</label>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control" type="password" name="password" />
          <label>Contraseña</label>
        </div>
        <div class="d-grid">
          <button className="btn btn-primary btn-lg rounded-0">
            Iniciar sesión
          </button>
        </div>
        <p class="mt-3 mb-0">
          <Link class="text-decoration-none" to={"/"}>
            Ir a inicio
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
