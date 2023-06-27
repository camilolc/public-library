import React, { useState, useEffect } from "react";
import "../../styles/prestamos.css";
export const Prestamos = () => {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `${import.meta.env.VITE_LIBRARY}/${
        import.meta.env.VITE_LISTAR_PRESTAMOS
      }`;
      const resp = await fetch(url);
      const data = await resp.json();
      setPrestamos(data);
    })();
  }, []);

  fechaDevolucion: "2023-07-04";
  fechaPrestamo: "2023-06-27";
  idPrestamo: 1;

  return (
    <div className="ps-container">
      <h1>Prestamos</h1>
      <div style={{ display: "flex" }}>
        <ul>
          {prestamos.map((e: any) => (
            <li className="ps-li" key={e.idPrestamo}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <small>ID: PRE0{e.idPrestamo} </small>
                <small>
                  Cliente: {e.idCliente.nombres + " " + e.idCliente.apellidos}
                </small>
                <small>Documento: {e.idCliente.documento}</small>
                <small>Fecha de prestamo: {e.fechaPrestamo}</small>
                <small>Fecha de devolución: {e.fechaDevolucion}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
