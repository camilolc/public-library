import React, { ChangeEvent, useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { getResults } from "../store/slices/search/thunk";
import { Dispatch } from "@reduxjs/toolkit";
//Router
import { Outlet, useNavigate } from "react-router-dom";
//Css
import "../styles/searchBox.css";
//Assets
import Logo from "../../assets/libros.png";
import SearchIcon from "../../assets/bookIcon.png";
//Kendo

export const SearchBox = () => {
  //Redux
  const dispatch: Dispatch<any> = useDispatch();
  //Router
  const navigate = useNavigate();
  //States
  const [searchInput, setSearchInput] = useState("");
  //Functions
  const searchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const searchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter" && searchInput != "") {
      dispatchAndNAvigate();
    }
    return;
  };
  const dispatchAndNAvigate = () => {
    if (searchInput != "") {
      dispatch(getResults(searchInput));
      navigate(`/items?search=${searchInput}`);
    }
    return;
  };

  return (
    <>
      <div className="search-box-containter">
        <div className="search-box-elements">
          <img src={Logo} style={{ marginRight: "20px" }}></img>
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => searchOnChange(e)}
            placeholder="Buscar libros"
            className="search-box-input"
            onKeyDown={searchOnEnter}
          />
          <button onClick={dispatchAndNAvigate} className="search-box-icon">
            <img src={SearchIcon} className="search-box-logo"></img>
          </button>
          <button className="search-box-button" onClick={()=>navigate("/login")}>
            login
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};
