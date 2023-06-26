import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getResultById } from "../store/slices/searchById/thunk";
//Router
import { useNavigate, useParams } from "react-router-dom";
//Css
import "../styles/searchDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Assets
import Shipping from "../../assets/ic_shipping.png";

import Book from "../../assets/librod.png";

export const SearchDetails = () => {
  //Router
  const navigate = useNavigate();
  //Redux
  const {
    result: { anoPublicacion, genero, idAutor, idLibro, nombreLibro, stock },
    isLoading,
  } = useSelector((state: RootState) => state.searchById);
  const dispatch: any = useDispatch();
  //Query string
  const { id } = useParams();
  //Hooks
  useEffect(() => {
    dispatch(getResultById(id!));
  }, []);

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
              <div className="search-inputs">
                <input className="inputs" placeholder="Nombre solicitante" />
                <input className="inputs" placeholder="Email" />
                <input className="inputs" placeholder="Dirección" />
                <input className="inputs" placeholder="teléfono" />
              </div>

              <button className="search-detail-button">
                Solicitar prestamo
              </button>
            </div>
          </div>
          <div className="search-detail-desc">
            <h2 className="search-detail-desc-title">Descripción del libro</h2>
            <span className="search-detail-dec">{genero}</span>
            <p className="search-detail-desc-parr">{anoPublicacion}</p>
          </div>
        </div>
      )}
    </div>
  );
};
