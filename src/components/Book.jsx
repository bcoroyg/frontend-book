import { Link } from "react-router-dom";

const Book = (book) => {
  return (
    <div className="card h-100 mx-auto" style={{ width: "250px" }}>
      <img
        src={`${book.image}`}
        alt={`${book.title}`}
        className="card-img-top card-fluid"
        style={{ height: 300 }}
      />
      <div className="card-body">
        <h4 className="card-title">{book.title}</h4>
        <p className="card-text">{book.description.substring(0, 75)}</p>
        <Link to={`/books/${book.id}`} className="btn btn-outline-primary">
          Ver más...
        </Link>
      </div>
    </div>
  );
};

export default Book;
