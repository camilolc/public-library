import React, { useEffect, useState } from "react";

import "../../styles/verclientes.css";
export const VerClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `${import.meta.env.VITE_LIBRARY}/${
        import.meta.env.VITE_LISTAR_CLIENTES
      }`;

      const resp = await fetch(url);
      const data = await resp.json();
      setClientes(data);
    })();
  }, []);

  return (
    <div className="vc-container">
      <h1>Ver clientes</h1>
      <div>
        <ol>
          {clientes.map((e: any) => (
            <li className="vc-li" key={e.documento}>
              Nombre: {e.nombres} {e.apellidos} - Email: {e.mail} - Telefono:
              {e.telefono} - Documento: {e.documento}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
