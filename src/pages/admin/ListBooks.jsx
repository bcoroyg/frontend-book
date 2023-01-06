import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bookAPI } from "../../api";
import { AuthContext } from "../../context/auth";

const ListBooks = () => {
  //useNavigate
  const navigate = useNavigate();

  //States
  const [books, setBooks] = useState([]);

  //Utilizar valores del context
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    if (auth.token !== "") {
      bookAPI
        .getBooks()
        .then((res) => setBooks(res.data))
        .catch((err) => console.error(err));
    } else {
      return navigate("/login");
    }
  }, [auth.token, navigate]);

  return (
    <>
      <h2 className="text-center mt-2">Listado de Libros</h2>
      <div className="d-grid">
        <Link
          to={"/dashboard/add"}
          className="btn btn-primary btn-lg rounded-0 mb-1"
          role="button"
        >
          Nuevo Libro
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>No.</th>
              <th>Titulo</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.description.substring(0, 40)}...</td>
                  <td>
                    <img src={book.image} alt="" srcset="" width={"50px"} />
                  </td>
                  <td>
                    <div className="d-flex justify-content-md-between">
                      <button className="btn btn-warning rounded-0 col-md-5">
                        Editar
                      </button>
                      <button className="btn btn-danger rounded-0 col-md-5">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <h1>No hay libros</h1>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListBooks;
