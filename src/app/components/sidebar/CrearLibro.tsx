import React, { useState, ChangeEvent } from "react";

// {
//   "autor": {
//       "idAutor": 5
//   },
//   "nombreLibro": "Maria",
//   "genero" : "novela",
//   "anoPublicacion" : "1867",
//   "stock" : "3",
//   "descripcion": ""
// }

import "../../styles/crearLibro.css";
import { ModalDone } from "./ModalDone";
export const CrearLibro = () => {
  const [showModal, setShowModal] = useState(false);
  const [textValidator, setTextValidator] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const initialState = {
    nombreLibro: "",
    genero: "",
    anoPublicacion: "",
    stock: "",
    descripcion: "",
  };
  const [form, setForm] = useState<any>(initialState);

  const validateState = () => {
    if (
      form.nombreLibro &&
      form.genero &&
      form.anoPublicacion &&
      form.stock &&
      form.descripcion
    ) {
      return false;
    }
    return true;
  };

  const onChangeForm = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [name as string]: value,
    });
  };

  console.log({ form });

  const onSubmit = async () => {
    const requestOption: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };
    console.log({ requestOption });
    const url = `${import.meta.env.VITE_LIBRARY}/${
      import.meta.env.VITE_CREAR_LIBRO
    }`;

    console.log({ url });
    await fetch(url, requestOption).then((e) => setTextValidator(e.ok));
    setShowModal(true);
  };

  console.log({ form });

  return (
    <div className="cl-container">
      <h1>Registrar libro</h1>
      <div className="cl-form">
        <textarea
          className="cl-input-des"
          placeholder="Descripción del libro"
          name="descripcion"
          onChange={onChangeForm}
        />
        <input
          name="nombreLibro"
          className="cl-input"
          placeholder="Nombre del libro"
          onChange={onChangeForm}
        />
        <input
          name="genero"
          className="cl-input"
          placeholder="Genero"
          onChange={onChangeForm}
          required
        />
        <input
          name="anoPublicacion"
          className="cl-input"
          placeholder="Fecha de publicación"
          onChange={onChangeForm}
          required
          type="date"
        />
        <input
          name="stock"
          className="cl-input"
          placeholder="Cantidad"
          onChange={onChangeForm}
          required
        />
        <button
          className="cl-button"
          onClick={onSubmit}
          disabled={validateState()}
        >
          Registrar
        </button>
      </div>
      {showModal && (
        <ModalDone
          show
          handleClose={handleClose}
          text={
            textValidator ? "Libro creado con exito" : "Error al crear libro"
          }
        />
      )}
    </div>
  );
};
