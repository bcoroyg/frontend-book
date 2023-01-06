import { useState } from "react";
import authContext from "./authContext";

const AuthProvider = (props) => {
  // definir el state inicial
  const [auth, setAuth] = useState({
    token: "",
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
