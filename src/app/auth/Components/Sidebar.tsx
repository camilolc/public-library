import React from "react";

import "../../styles/sidebar.css";
import SearchIcon from "../../../assets/bookIcon.png";

export const Sidebar = () => {
  return (
    <div className="sb-container">
      <h2>PUBLIC LIBRARY</h2>
      <img className="sb-logo" src={SearchIcon}></img>
      <ul>
        <li className="sb-option">Registrar libro</li>
        <li className="sb-option">Stock de libro</li>
        <li className="sb-option">Ver libros</li>
        <li className="sb-option">Gestionar solicituides</li>
        <li className="sb-option">Historico de solicitudes</li>
        <li className="sb-option">Ver clientes</li>
        <li className="sb-option">Prestamos</li>
        <li className="sb-option">Cerrar sesión</li>
      </ul>
    </div>
  );
};
