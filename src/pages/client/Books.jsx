import { useEffect, useState } from "react";
import { bookAPI } from "../../api";
import Book from "../../components/Book";

const Books = () => {
  //usf
  const [books, setBooks] = useState([]);

  //uef
  useEffect(() => {
    bookAPI
      .getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <h1 className="text-center mt-4 display-4 fw-bold">Libros</h1>
      <hr />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 justify-content-center">
        {books ? (
          books.map(({ _id, image, title, description }) => (
            <div key={`${_id}`} className="col-md-4 col-lg-3 mb-4">
              <Book
                id={_id}
                image={image}
                title={title}
                description={description}
              />
            </div>
          ))
        ) : (
          <span>Cargando...</span>
        )}
      </div>
    </>
  );
};

export default Books;
