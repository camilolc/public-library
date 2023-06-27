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
    const url = `${import.meta.env.VITE_LIBRARY}/${
      import.meta.env.VITE_LISTAR_LIBROS
    }`;
    const resp = await fetch(url);
    const data: any = await resp.json();

    const bookItem = data.find((e: any) => e.idLibro === Number(idProduct));

    dispatch(
      setResults({
        result: bookItem,
      })
    );
  };
};
