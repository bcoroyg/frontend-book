import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Estas Seguro?",
      text: "¡Un Libro eliminado no se puede recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si Eliminar!",
      cancelButtonText: "Cancelar",
    });

    if (result.value) {
      //Elimina  en la rest API
      const response = await bookAPI.deleteBook(id, auth.token);
      Swal.fire("¡Eliminar!", response.data.msg, "success");

      //Eliminar del state
      const data = books.filter((book) => book._id !== id);
      setBooks(data);
    }
  };

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
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.description.substring(0, 40)}...</td>
                  <td>
                    <img src={book.image} alt="" width={"50px"} />
                  </td>
                  <td>
                    <div className="d-flex justify-content-md-between">
                      <Link
                        to={`/dashboard/edit/${book._id}`}
                        className="btn btn-warning rounded-0 col-md-5"
                      >
                        Editar
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger rounded-0 col-md-5"
                        onClick={() => handleDelete(book._id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center fw-bold">
                  No hay libros
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListBooks;
