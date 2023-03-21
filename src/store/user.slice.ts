import { createSlice } from "@reduxjs/toolkit";
import { USER_INFO, USER_PROFILE } from "../constants";
import { IUserData, IUserProfile } from "../types";

interface ProfileState {
  info: IUserData;
  profile: IUserProfile;
}

const initialState: ProfileState = {
  info: JSON.parse(sessionStorage.getItem(USER_INFO) || "null"),
  profile: JSON.parse(sessionStorage.getItem(USER_PROFILE) || "null"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload;
      sessionStorage.setItem(USER_INFO, JSON.stringify(action.payload));
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
      sessionStorage.setItem(USER_PROFILE, JSON.stringify(action.payload));
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
