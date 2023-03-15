import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { ListItems } from "../components/ListItems";
import { SearchInput } from "../components/SearchInput";
import { Title } from "../components/Title";

export const MainPage: React.FC = () => {
  return (
    <Container
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          mb: 20.5,
        },
        [theme.breakpoints.down("md")]: {
          mb: 25,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        p: 3,
      })}
    >
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            mt: 7.5,
          },
          [theme.breakpoints.down("md")]: {
            mt: 8.5,
          },
        })}
      >
        <Title />
      </Box>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            mt: 2,
          },
          [theme.breakpoints.down("md")]: {
            mt: 4,
          },
          width: "100%",
          maxWidth: "1020px",
        })}
      >
        <SearchInput />
      </Box>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 2.5, lg: 2.5 }}
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            mt: 4.5,
          },
          [theme.breakpoints.down("md")]: {
            mt: 0.5,
          },
          maxWidth: "1040px",
        })}
      >
        <ListItems />
      </Grid>
    </Container>
  );
};
