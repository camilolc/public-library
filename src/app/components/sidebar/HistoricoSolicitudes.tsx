import React from "react";

import "../../styles/historicosolicitudes.css";

export const HistoricoSolicitudes = () => {
  const solicitudes = [
    "solicitud opt123",
    "solicitud opt124",
    "solicitud opt125",
    "solicitud opt126",
  ];
  return (
    <div className="hs-container">
      <h1>Historico de solicitudes</h1>
      <div>
        <ol>
          {solicitudes.map((e) => (
            <li className="hs-li" key={e}>
              {e}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
