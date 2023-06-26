import React from "react";

import "../../styles/verclientes.css";
export const VerClientes = () => {
  const clientes = [
    "Camilo Lopez",
    "Carlos Merchan",
    "Marina Jurado",
    "Juan Pablo Pineda",
  ];
  return (
    <div className="vc-container">
      <h1>Ver clientes</h1>
      <div>
        <ol>
          {clientes.map((e) => (
            <li className="vc-li" key={e}>
              {e}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
