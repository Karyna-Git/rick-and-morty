import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { LoginWithGoogleButton } from "../components/login/LoginWithGoogleButton";
import { useLogin } from "../store/hooks";

export const SignIn: React.FC = () => {
  const login = useLogin();

  return (
    <Container
      sx={(theme) => ({
        [theme.breakpoints.up("xl")]: { maxWidth: "max-content" },
        [theme.breakpoints.up("md")]: { justifyContent: "space-between", p: 5 },
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
          [theme.breakpoints.up("xl")]: { alignSelf: "center", mt: -20 },
          [theme.breakpoints.up("sm")]: { mt: 20 },
          [theme.breakpoints.down("sm")]: { mt: 1, justifyContent: "center" },
          textAlign: "center",
        })}
      >
        <Typography
          sx={(theme) => ({
            [theme.breakpoints.up("xl")]: { fontSize: 60 },
            [theme.breakpoints.up("md")]: { mb: 10, fontSize: 50 },
            [theme.breakpoints.up("sm")]: { mb: 6, fontSize: 40 },
            [theme.breakpoints.down("sm")]: { mb: 4, fontSize: 35 },
          })}
        >
          Welcome to Rick & Morty!
        </Typography>
        <LoginWithGoogleButton onLogin={login} />
      </Box>
    </Container>
  );
};
