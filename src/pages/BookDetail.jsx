import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { bookAPI } from "../api";

const BookDetail = () => {
  const params = useParams();
  //usf
  const [book, setBook] = useState();
  //uef
  useEffect(() => {
    const response = async () => {
      const data = await bookAPI.getBook(params.id);
      setBook(data.data);
    };
    response();
  }, [params.id]);
  return (
    <>
      {book && (
        <>
          <h2 className="text-center mt-4 display-4">
            {book.title.toUpperCase()}
          </h2>
          <hr />
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <img
                src={`${book.image}`}
                alt={`${book.title}`}
                className="img-fluid"
                style={{ height: 300 }}
              />
              <Link
                to={"/books"}
                className="mt-3 btn btn-outline-danger d-block"
              >
                Volver a todos los libros
              </Link>
            </div>
            <div className="col-md-8">
              <h3>{book.title}</h3>
              <hr />
              <p>{book.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookDetail;
