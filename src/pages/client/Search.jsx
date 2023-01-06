import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchAPI } from "../../api";
import Book from "../../components/Book";

const Search = () => {
  const params = useParams();
  //usf
  const [books, setBooks] = useState([]);
  //uef
  useEffect(() => {
    searchAPI
      .getSearch(params.query)
      .then((response) => setBooks(response.data))
      .catch((e) => console.log(e));
  }, [params.query]);
  return (
    <>
      <h1 className="text-center mt-4 display-4">
        Resultados de busqueda: {params.query}
      </h1>
      <hr />
      {books.length ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 justify-content-center">
          {books.map(({ _id, image, title, description }) => (
            <div key={`${_id}`} className="mx-1 col-7 col-md-4 col-lg-3 mb-4">
              <Book
                id={_id}
                image={image}
                title={title}
                description={description}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center fs-4 fw-bold">No hay resultados</p>
      )}
    </>
  );
};

export default Search;
