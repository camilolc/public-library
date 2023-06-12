//Redux
import { createSlice } from "@reduxjs/toolkit";
//Interfaces
import { ItemJsonById, Libro } from "../../../interfaces/interfaces";

const result: Libro = {
  idLibro: 0,
  anoPublicacion: "",
  genero: "",
  idAutor: 0,
  nombreLibro: "",
  stock: 0,
};
export const searchSlicebyId = createSlice({
  name: "searchById",
  initialState: {   
    result,
    isLoading: false,
  },
  reducers: {
    startLoadingSearch: (state /* action */) => {
      state.isLoading = true;
    },
    setResults: (state, action) => {
      state.isLoading = false;
      state.result = action.payload.result;
    },
  },
});
export const { startLoadingSearch, setResults } = searchSlicebyId.actions;
