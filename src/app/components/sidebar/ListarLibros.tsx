import React from "react";
import "../../styles/listarlibros.css";
export const ListarLibros = () => {
  const libros = [
    {
      id: 1,
      nombre: "El rey lear",
    },
    {
      id: 2,
      nombre: "100 años de soledad",
    },
    {
      id: 3,
      nombre: "1989",
    },
    {
      id: 4,
      nombre: "Revelión en la granja",
    },
    {
      id: 5,
      nombre: "Candida Erendira",
    },
  ];
  return (
    <div className="ll-container">
      <h1 className="ll-title">Lista de libros</h1>
      <div>
        <ol>
          {libros.map((e) => (
            <li className="ll-list" key={e.id}>
              {e.nombre}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
