//Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getResults } from "../store/slices/search/thunk";
//Router
import { useLocation, useNavigate } from "react-router-dom";
//Css
import "../styles/searchResult.css";
//Assets
import Shipping from "../../assets/ic_shipping.png";

import Book from "../../assets/librod.png";

export const SearchResults = () => {
  //Redux
  const { results, isLoading } = useSelector(
    (state: RootState) => state.search
  );
  const dispatch: any = useDispatch();
  //Query string
  const query = new URLSearchParams(useLocation().search);
  const productName = query.get("search");
  //Hooks
  const navigate = useNavigate();
  //Functions
  const itemDetail = (id: number) => {
    navigate(`${id}`);
  };

  if (results.length == 0) {
    dispatch(getResults(productName ? productName : ""));
  }

  return (
    <>
      <div className="search-result-component">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="search-result-container">
            <ul>
              {results.map(
                ({ idLibro, nombreLibro, genero, anoPublicacion }) => (
                  <li key={idLibro}>
                    <div className="search-result-box">
                      <img
                        src={Book}
                        onClick={() => itemDetail(idLibro)}
                        className="search-result-img"
                      />
                      <div className="search-result-info">
                        <div className="search-result-price">
                          <span>{`Título: ${nombreLibro}`}</span>
                        </div>
                        <span className="search-result-font-Title">
                          Genero: {genero}
                        </span>
                        <span className="search-result-font-Title">
                          Año publicación: {anoPublicacion}
                        </span>
                        <button
                          className="search-detail-button"
                          onClick={() => itemDetail(idLibro)}
                        >
                          Ver detalle
                        </button>
                      </div>
                      {/* <span className="search-result-city">{city_name}</span> */}
                    </div>
                    <hr className="search-result-separator"></hr>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
