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

    const url = `${import.meta.env.VITE_LIBRARY}/${
      import.meta.env.VITE_LISTAR_LIBROS
    }`;

    const resp = await fetch(url);
    const data: any = await resp.json();

    const booksFilter = data!.filter((e: any) =>
      e.nombreLibro.toLowerCase().includes(product.toLowerCase())
    );

    dispatch(
      setResults({
        results: booksFilter,
      })
    );
  };
};
