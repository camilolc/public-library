import React from "react";
import "../../styles/prestamos.css";
export const Prestamos = () => {
  const prestamos = [
    "prestamo opt123",
    "prestamo opt124",
    "prestamo opt125",
    "prestamo opt126",
  ];
  return (
    <div className="ps-container">
      <h1>Prestamos</h1>
      <div>
        <ol>
          {prestamos.map((e) => (
            <li className="ps-li" key={e}>
              {e}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
