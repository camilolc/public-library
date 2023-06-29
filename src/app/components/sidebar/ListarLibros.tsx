import React, { useState, useEffect } from "react";
import "../../styles/listarlibros.css";
export const ListarLibros = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `${import.meta.env.VITE_LIBRARY}/${
        import.meta.env.VITE_LISTAR_LIBROS
      }`;

      const resp = await fetch(url);
      const data = await resp.json();
      setLibros(data);
    })();
  }, []);

  return (
    <div className="ll-container">
      <h1 className="ll-title">Lista de libros</h1>
      <div>
        <ol>
          {libros.map((e: any) => (
            <li className="ll-list" key={e.idLibro}>
              Nombre libro: {e.nombreLibro} - Autor: {e.autor?.nombreAutor} -
              Stock {e.stock}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
