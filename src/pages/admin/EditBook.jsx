import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { bookAPI } from "../../api";
import { AuthContext } from "../../context/auth";

const EditBook = () => {
  const navigate = useNavigate();
  //Obtener el ID
  const params = useParams();
  //state
  const [book, setBook] = useState({
    title: "",
    description: "",
    file: "",
  });

  //Cuando el componente se carga
  useEffect(() => {
    const response = async () => {
      const data = await bookAPI.getBook(params.id);
      setBook(data.data);
    };
    response();
  }, [params.id]);

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
      const response = await bookAPI.updateBook(book, auth.token);
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-8 col-lg-6 card py-5 rounded-0 mt-2">
      <h2 className="text-center">Actualizar libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label className="form-label fw-bold fs-5" htmlFor="nombre">
            Titulo:
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="title"
            placeholder="Ingresar nombre"
            onChange={handleChange}
            defaultValue={book.title}
          />
        </div>
        <div className="mb-1">
          <label className="form-label fw-bold fs-5" htmlFor="pais">
            Descripción:
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            name="description"
            placeholder="Ingresar país"
            onChange={handleChange}
            defaultValue={book.description}
          />
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold fs-5" htmlFor="pais">
            Image:
          </label>
          {book.image ? (
            <img
              className="img-thumbnail d-block mx-auto"
              src={book.image}
              alt={"imagen"}
              width={"200"}
            />
          ) : null}
          <input
            className="form-control form-control-lg"
            type="file"
            name="file"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-md-between">
          <button
            className="btn btn-primary btn-lg col-md-5 rounded-0 mb-1 mb-md-0"
            type="submit"
          >
            Editar
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

export default EditBook;
