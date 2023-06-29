import React, { ChangeEvent, useEffect, useState } from "react";
import "../../styles/gestionarsolicitudes.css";
import { ModalDone } from "./ModalDone";

export const GestionarSolicitudes = () => {
  const [prestamos, setPrestamos] = useState<any>([]);
  const [prestamo, setPrestamo] = useState();
  const [params, setParams] = useState({
    solicitud: "",
    estado: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [textValidator, setTextValidator] = useState(false);

  const { estado, solicitud } = params;

  const onChangeSelectRequest = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setParams({ ...params, solicitud: value });
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const onChangeSelectstatus = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setParams({ ...params, estado: value });
  };

  useEffect(() => {
    (async () => {
      const url = `${import.meta.env.VITE_LIBRARY}/${
        import.meta.env.VITE_LISTAR_PRESTAMOS
      }`;
      const resp = await fetch(url);
      const data = await resp.json();
      setPrestamos(data!);
    })();
  }, []);

  const estados = [
    {
      name: "Aceptar",
      id: 1,
    },
    { name: "Rechazar", id: 2 },
  ];

  const onSubmit = async () => {
    const requestOption = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    const url = `${import.meta.env.VITE_LIBRARY}/${
      import.meta.env.VITE_ACTUALIZAR_ESTADO
    }/${estado}/${solicitud}`;

    console.log({ url });

    await fetch(url, requestOption).then((e) => setTextValidator(e.ok));
    setShowModal(true);
  };

  console.log({ estado });
  console.log({ solicitud });
  return (
    <div className="gs-container">
      <h1 className="">Gestionar Solicitudes</h1>
      <div className="gs-opt">
        <small>Solicitud:</small>
        <select className="gs-select" onChange={onChangeSelectRequest}>
          <option>-- Seleccione solicitud --</option>
          {prestamos.map((e: any) => (
            <option key={e.idPrestamo} value={e.idPrestamo}>
              SDP0{e.idPrestamo}
            </option>
          ))}
        </select>
      </div>
      <div className="gs-opt">
        <small>Estado:</small>
        <select
          className="gs-select"
          onChange={onChangeSelectstatus}
          disabled={solicitud === ""}
        >
          <option value={""}>-- Seleccione estado --</option>
          {estados.map((e: any) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="cl-button"
        disabled={estado === "" && solicitud === ""}
        onClick={onSubmit}
      >
        Guardar
      </button>
      {showModal && (
        <ModalDone
          show
          handleClose={handleClose}
          text={
            textValidator
              ? "Estado de solicitud modificado con exito"
              : "Error al actualizar estado"
          }
        />
      )}
    </div>
  );
};
