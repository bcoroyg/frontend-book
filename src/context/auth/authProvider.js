import { useState } from "react";
import authContext from "./authContext";

const AuthProvider = (props) => {

  //Obtener el token de localstorage
  //const token = localStorage.getItem("token");

  // definir el state inicial
  const [auth, setAuth] = useState({
    //token: token ? token : "",
    token: '',
    auth: false,
  });

  return (
    <authContext.Provider
      value={
        [
          auth, 
          setAuth
        ]
      }
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthProvider;
