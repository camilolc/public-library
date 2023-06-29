import React, { useState, useEffect } from "react";
import "../../styles/prestamos.css";
import DataTable from "react-data-table-component";

interface Prestamos {
  idPrestamo: number;
  idCliente: Cliente;
  fechaPrestamo: string;
  fechaDevolucion: string;
  estado: string;
}

interface Cliente {
  nombres: string;
  apellidos: string;
  documento: string;
}
export const Prestamos = () => {
  const [prestamos, setPrestamos] = useState([]);

  const columns = [
    {
      name: "Id prestamo",
      cell: (row: Prestamos) => "PRE0" + row.idPrestamo,
      sortable: true,
    },
    {
      name: "Nombre cliente",
      cell: (row: Prestamos) => row.idCliente.nombres + row.idCliente.apellidos,
      sortable: true,
    },
    {
      name: "Documento",
      cell: (row: Prestamos) => row.idCliente.documento,
      sortable: true,
    },
    {
      name: "Fecha de prestamo",
      cell: (row: Prestamos) => row.fechaPrestamo,
      sortable: true,
    },
    {
      name: "Fecha de devolución",
      cell: (row: Prestamos) => row.fechaDevolucion,
      sortable: true,
    },
    {
      name: "Estado",
      cell: (row: Prestamos) => row.estado,
      sortable: true,
    },
  ];

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

  console.log({ prestamos });

  return (
    <div className="ps-container">
      <h1>Prestamos</h1>
      {/* <DataTable columns={columns} data={prestamos}></DataTable> */}
      <div className="ps-list">
        {prestamos.map((e: any) => (
          <div className="ps-li" key={e.idPrestamo}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                marginRight: "10px",
              }}
            >
              <small>ID: PRE0{e.idPrestamo} </small>
              <small>
                Cliente: {e.idCliente.nombres + " " + e.idCliente.apellidos}
              </small>
              <small>Documento: {e.idCliente.documento}</small>
              <small>Fecha de prestamo: {e.fechaPrestamo}</small>
              <small>Fecha de devolución: {e.fechaDevolucion}</small>
              <small>Estado: {e.estado}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
