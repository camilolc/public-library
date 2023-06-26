import React from "react";
import "../../styles/gestionarsolicitudes.css";

export const GestionarSolicitudes = () => {
  const solicitudes = [
    "solicitud opt123",
    "solicitud opt124",
    "solicitud opt125",
    "solicitud opt126",
  ];
  const estados = ["Aceptar", "Rechazar"];
  return (
    <div className="gs-container">
      <h1 className="">Gestionar Solicitudes</h1>
      <div className="gs-opt">
        <small>Solicitud:</small>
        <select className="gs-select">
          {solicitudes.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </div>
      <div className="gs-opt">
        <small>Estado:</small>
        <select className="gs-select">
          {estados.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </div>
      <button className="cl-button">Guardar</button>
    </div>
  );
};
