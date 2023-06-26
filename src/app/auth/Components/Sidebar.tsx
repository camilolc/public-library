import React from "react";

import "../../styles/sidebar.css";
import SearchIcon from "../../../assets/bookIcon.png";
import { NavLink, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sb-container">
      <h2>PUBLIC LIBRARY</h2>
      <img className="sb-logo" src={SearchIcon}></img>
      <ul>
        <li className="sb-option">
          <NavLink to="crear-libro">Registrar libro</NavLink>
        </li>
        <li className="sb-option">
          <NavLink to="stock-libros">Stock de libros</NavLink>
        </li>
        <li className="sb-option">
          <NavLink to="listar-libros">Ver libros</NavLink>
        </li>
        <li className="sb-option">
          <NavLink to="ges-solic">Gestionar solicituides</NavLink>
        </li>
        <li className="sb-option">
          <NavLink to="his-solic">Historico de solicitudes</NavLink>
        </li>
        <li className="sb-option">
          <NavLink to="clientes">Ver clientes</NavLink>
        </li>
        <li className="sb-option">
          <NavLink to="prestamos">Prestamos</NavLink>
        </li>
        <li
          className="sb-option"
          onClick={() => navigate("/login", { replace: true })}
        >
          Cerrar sesión
        </li>
      </ul>
    </div>
  );
};
