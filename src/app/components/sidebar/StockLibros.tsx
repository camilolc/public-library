import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import "../../styles/stockLibros.css";
import Combobox from "react-widgets/Combobox";
import DropdownContext from "react-bootstrap/esm/DropdownContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ModalDone } from "./ModalDone";
interface Book {
  idLibro: number;
  nombreLibro: string;
}

export const StockLibros = () => {
  const [libros, setLibros] = useState<any>([]);
  const [libro, setLibro] = useState({
    idLibro: "",
    cantidad: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [textValidator, setTextValidator] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const { cantidad, idLibro } = libro;
  const onChangeSelect = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setLibro({ ...libro, idLibro: value });
  };

  const onChangeInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setLibro({ ...libro, cantidad: value });
  };

  const onSubmit = async () => {
    const requestOption = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    const url = `${import.meta.env.VITE_LIBRARY}/${
      import.meta.env.VITE_REPONER_STOCK
    }/${cantidad}/${idLibro}`;

    await fetch(url, requestOption).then((e) => setTextValidator(e.ok));
    setShowModal(true);
  };

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
    <div className="sl-container">
      <h1>Stock de libros</h1>
      <div className="sl-form">
        <select onChange={onChangeSelect}>
          <option value="">-- Selecciona un libro --</option>
          {libros.map((e: Book) => (
            <option key={e.idLibro} value={e.idLibro} title={e.nombreLibro}>
              {e.nombreLibro}
            </option>
          ))}
        </select>
        <input
          disabled={idLibro == ""}
          onChange={onChangeInput}
          className="sl-input"
          placeholder="Cantidad a agregar"
          type="number"
          minLength={0}
        />
        <button
          className="cl-button"
          onClick={onSubmit}
          disabled={idLibro === "" || cantidad === ""}
        >
          Guardar
        </button>
      </div>
      {showModal && (
        <ModalDone
          show
          handleClose={handleClose}
          text={
            textValidator
              ? "Stock agregado correctamente"
              : "Error al intentar agregar stock"
          }
        />
      )}
    </div>
  );
};
