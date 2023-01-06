import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const ListBooks = () => {
  //useNavigate
  const navigate = useNavigate();
  //Utilizar valores del context
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    if (auth.token !== "") {
      
    } else {
      return navigate("/login");
    }
  }, [auth.token, navigate]);

  return <h1>Tabla de libros</h1>;
};

export default ListBooks;
