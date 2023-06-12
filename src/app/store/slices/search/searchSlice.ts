//Redux
import { createSlice } from "@reduxjs/toolkit";
//Interfaces
import { ItemJson, Libro } from "../../../interfaces/interfaces";

// const initialState: SearchResult[]={};

let results: Libro[] = [];
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    results,
    isLoading: false,
  },
  reducers: {
    startLoadingSearch: (state /* action */) => {
      state.isLoading = true;
    },
    setResults: (state, action) => {
      state.results = action.payload.results;
      state.isLoading = false;
    },
  },
});
export const { startLoadingSearch, setResults } = searchSlice.actions;
