import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bookAPI } from "../../api";
import { AuthContext } from "../../context/auth";

//rafce
const AddBook = () => {
  const navigate = useNavigate();
  //state
  const [book, setBook] = useState({
    title: "",
    description: "",
    file: "",
  });

  //Context Auth
  const [auth, setAuth] = useContext(AuthContext);

  //Almacenar lo que el usuario escribe en el state
  const handleChange = ({ target }) => {
    setBook((state) => ({
      ...state,
      [target.name]: target.type === "file" ? target.files[0] : target.value,
    }));
  };

  //Iniciar sesion en el servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviando formData y token y realizando la petición
      const response = await bookAPI.createBook(book, auth.token);
      if(response.status === 201) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-8 col-lg-6 card py-5 rounded-0 mt-2">
      <h2 className="text-center">Nuevo libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label className="form-label fw-bold fs-5" for="nombre">
            Titulo:
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="title"
            placeholder="Ingresar nombre"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <label className="form-label fw-bold fs-5" for="pais">
            Descripción:
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="description"
            placeholder="Ingresar país"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold fs-5" for="pais">
            Image:
          </label>
          <input
            className="form-control form-control-lg"
            type="file"
            name="file"
            required
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-md-between">
          <button
            className="btn btn-primary btn-lg col-md-5 rounded-0 mb-1 mb-md-0"
            type="submit"
          >
            Crear
          </button>
          <Link
            className="btn btn-danger btn-lg col-md-5 rounded-0"
            to={"/dashboard"}
            role="button"
          >
            Volver
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
