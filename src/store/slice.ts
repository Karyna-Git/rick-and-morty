import { createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";

interface CharactersState {
  filter: string;
  page: number;
}

const { name = "", page = 1 } = queryString.parse(window.location.search);

const initialState: CharactersState = {
  filter: String(name),
  page: Number(page) || 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const charactersActions = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
