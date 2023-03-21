import { Box, Container, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useEffect } from "react";
import {
  APPLICATION_JSON,
  AUTHORIZATION_BEARER,
  GOOGLE_API_USER_INFO,
} from "../../constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userActions } from "../../store/user.slice";
import { LoginWithGoogleButton } from "./LoginWithGoogleButton";

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.info);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => dispatch(userActions.setUser(codeResponse)),
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

  return (
    <Container
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          justifyContent: "space-between",
          p: 5,
        },
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
          flexWrap: "wrap",
          p: 2,
        },
        display: "flex",
        height: "100vh",
      })}
    >
      <img src="logo.png" alt="logo" style={{ objectFit: "contain" }} />
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: { mt: 20 },
          [theme.breakpoints.down("md")]: { mt: 1, justifyContent: "center" },
          textAlign: "center",
        })}
      >
        <Typography
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: {
              mb: 10,
              fontSize: 50,
            },
            [theme.breakpoints.down("sm")]: {
              mb: 4,
              fontSize: 40,
            },
          })}
        >
          Welcome to Rick and Morty!
        </Typography>
        <LoginWithGoogleButton login={login} />
      </Box>
    </Container>
  );
};
