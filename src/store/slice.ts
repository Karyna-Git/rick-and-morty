import { createSlice } from "@reduxjs/toolkit";

interface CharactersState {
  filter: string;
}

const initialState: CharactersState = {
  filter: "",
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const charactersActions = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
