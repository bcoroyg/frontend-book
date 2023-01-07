import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark pt-4 pb-5 mt-3 text-white">
      <p className="float-start ms-3 mb-0 fw-bold">Copyright © 2023</p>
      <Link to={"/"} className="float-end me-3 text-decoration-none link-light">
        Página Principal
      </Link>
    </footer>
  );
};

export default Footer;
