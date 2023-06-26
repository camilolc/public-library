import React from "react";

import "../../styles/stockLibros.css";
import Combobox from "react-widgets/Combobox";
import DropdownContext from "react-bootstrap/esm/DropdownContext";

export const StockLibros = () => {
  const data = ["Rey lear", "Mackbet", "100 años de soledad"];
  return (
    <div className="sl-container">
      <h1>Stock de libros</h1>
      <div className="sl-form">
        <select>
          {data.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        <input className="sl-input" placeholder="Cantidad a agregar" />
        <button className="cl-button">Guardar</button>
      </div>
    </div>
  );
};
