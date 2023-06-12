//Redux
import { Dispatch } from "@reduxjs/toolkit";
//Slices
import { startLoadingSearch, setResults } from "../search/searchSlice";
//Axios
import { searchItems } from "../../../api/searchItemsApi";
//Interfaces
import { Item, ItemJson, Libro } from "../../../interfaces/interfaces";
import { bookData } from "../../../helpers/dataTest";

export const getResults = (product = "") => {
  return async (dispatch: Dispatch, getState: number) => {
    dispatch(startLoadingSearch());

    const booksFilter = bookData.filter((e) =>
      e.nombreLibro.toLowerCase().includes(product.toLowerCase())
    );

    dispatch(
      setResults({
        results: booksFilter,
      })
    );
  };
};
