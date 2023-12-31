import React, { ChangeEvent, useEffect, useState, SyntheticEvent } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getResultById } from "../store/slices/searchById/thunk";
//Router
import { useNavigate, useParams } from "react-router-dom";
//Css
import "../styles/searchDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//Assets

import Book from "../../assets/librod.png";

interface Pedido {
  id: string;
  documento: string;
  nombre: string;
  email: string;
  dirreccion: string;
  telefono: string;
}

export const SearchDetails = () => {
  //Show modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //Router
  const navigate = useNavigate();
  //Redux
  const {
    result: {
      anoPublicacion,
      genero,
      idAutor,
      idLibro,
      nombreLibro,
      stock,
      descripcion,
    },
    isLoading,
  } = useSelector((state: RootState) => state.searchById);
  const dispatch: any = useDispatch();
  //Query string
  const { id } = useParams();
  //Hooks
  useEffect(() => {
    dispatch(getResultById(id!));
  }, []);
  //states

  const initialState = {
    id: id!,
    documento: "",
    nombre: "",
    dirreccion: "",
    email: "",
    telefono: "",
  };
  const [pedido, setPedido] = useState<Pedido>(initialState);
  const [pedidoForm, setPedidoForm] = useState({ id, documento: "" });

  const { dirreccion, email, nombre, telefono, documento } = pedido;

  const onSubmit = async (e: SyntheticEvent) => {
    setPedidoForm({
      documento,
      id,
    });
    e.preventDefault();
    setPedido(initialState);
    setShow(!show);
    const url = `${import.meta.env.VITE_LIBRARY}/${
      import.meta.env.VITE_CREAR_PEDIDO
    }/${id}/${documento}`;
    console.log({ url });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(pedidoForm),
    };

    await fetch(url, requestOptions).then((e) => console.log(e));
  };

  const handleChangePedido = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value, name } = target;
    setPedido({ ...pedido, [name as string]: value });
  };
  return (
    <div className="search-detail-component">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="search-detail-container">
          <div className="search-detail-box">
            <img className="search-detail-img" src={Book}></img>
            <div className="search-detail-info">
              {/* <span className="search-detail-sold">{`${condition} - ${sold_quantity} vendidos`}</span> */}
              <h3 className="search-detail-title">{nombreLibro}</h3>
              <div className="search-detail-pay">
                <h3 className="search-detail-price">
                  {`Stock: ${parseInt(String(stock))}`}
                </h3>
              </div>
              <form onSubmit={onSubmit}>
                <div className="search-inputs">
                  <input
                    required
                    value={nombre}
                    onChange={handleChangePedido}
                    name="nombre"
                    className="inputs"
                    placeholder="Nombre solicitante"
                  />
                  <input
                    required
                    value={documento}
                    onChange={handleChangePedido}
                    name="documento"
                    className="inputs"
                    placeholder="documento"
                  />
                  <input
                    required
                    value={email}
                    onChange={handleChangePedido}
                    name="email"
                    className="inputs"
                    placeholder="Email"
                  />
                  <input
                    required
                    value={dirreccion}
                    onChange={handleChangePedido}
                    name="dirreccion"
                    className="inputs"
                    placeholder="Dirección"
                  />
                  <input
                    required
                    value={telefono}
                    onChange={handleChangePedido}
                    name="telefono"
                    className="inputs"
                    placeholder="teléfono"
                  />
                </div>
                {stock <= 0 ? (
                  <p style={{ color: "red" }}>
                    No hay stock disponible en este momento :(
                  </p>
                ) : (
                  <button
                    className="search-detail-button"
                    disabled={stock <= 0}
                  >
                    Solicitar prestamo
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className="search-detail-desc">
            <h2 className="search-detail-desc-title">Descripción del libro</h2>
            <span className="search-detail-dec">{descripcion}</span>
            <span className="search-detail-dec">{genero}</span>
            <p className="search-detail-desc-parr">{anoPublicacion}</p>
          </div>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pedido creado exitosamente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tu pedido fue registrado de manera satisfactoria
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
