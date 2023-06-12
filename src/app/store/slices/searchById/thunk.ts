//Redux
import { Dispatch } from "@reduxjs/toolkit";
//Slices
import { startLoadingSearch, setResults } from "../searchById/searchByIdSlice";
//Interfaces
import { ItemJsonById } from "../../../interfaces/interfaces";
//Axios
import { searchItemById } from "../../../api/searchItemsApi";
//DataTest
import { bookData } from "../../../helpers/dataTest";

export const getResultById = (idProduct = "") => {
  return async (dispatch: Dispatch, getState: number) => {
    dispatch(startLoadingSearch());

    const bookItem = bookData.find((e) => e.idLibro === Number(idProduct));

    dispatch(
      setResults({
        result: bookItem,
      })
    );
  };
};
