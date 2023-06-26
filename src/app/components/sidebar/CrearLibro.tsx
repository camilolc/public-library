import React from "react";

import "../../styles/crearLibro.css";
export const CrearLibro = () => {
  return (
    <div className="cl-container">
      <h1>Registrar libro</h1>
      <form className="cl-form">
        <textarea
          className="cl-input-des"
          placeholder="Descripción del libro"
        />
        <input className="cl-input" placeholder="Nombre del libro" />
        <input className="cl-input" placeholder="Fecha de publicación" />
        <input className="cl-input" placeholder="Cantidad" />
        <button className="cl-button">Registrar</button>
      </form>
    </div>
  );
};
