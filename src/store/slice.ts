import { createSlice } from "@reduxjs/toolkit";

interface CharactersState {
  filter: string;
  page: number;
}

const initialState: CharactersState = {
  filter: "",
  page: 1,
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
