import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from ".";
import {
  APPLICATION_JSON,
  AUTHORIZATION_BEARER,
  GOOGLE_API_USER_INFO,
} from "../constants";
import { charactersActions } from "./characters.slice";
import { userActions } from "./user.slice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.info);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      dispatch(userActions.setUser(codeResponse));
      dispatch(charactersActions.setFilter(null));
    },
    onError: (error) => console.error(error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`${GOOGLE_API_USER_INFO}?access_token=${user.access_token}`, {
          headers: {
            Authorization: `${AUTHORIZATION_BEARER} ${user.access_token}`,
            Accept: APPLICATION_JSON,
          },
        })
        .then((res) => {
          dispatch(userActions.setProfile(res.data));
        })
        .catch((err) => console.error(err));
    }
  }, [user, dispatch]);

  return login;
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    googleLogout();
    dispatch(userActions.setProfile(null));
    dispatch(userActions.setUser(null));
    dispatch(charactersActions.setFilter(null));
    navigate("/");
  };

  return logout;
};

export const useMenuActions = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorElement(null);
  };

  return {
    anchorElement,
    openMenu,
    closeMenu,
  };
};
