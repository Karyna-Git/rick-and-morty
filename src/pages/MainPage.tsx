import { Search } from "@mui/icons-material";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ListItems } from "../components/ListItems";
import { Title } from "../components/Title";
import { useSearchCharactersQuery } from "../store/api";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { charactersActions } from "../store/slice";

export const MainPage: React.FC = () => {
  const filter = useAppSelector((state) => state.characters.filter);
  const { data, isError } = useSearchCharactersQuery(filter);
  const dispatch = useAppDispatch();

  const handleChangeFilter = (value: string) => {
    dispatch(charactersActions.setFilter(value));
  };

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
        <TextField
          fullWidth
          InputProps={{
            startAdornment: <Search sx={{ mr: 1.5 }} />,
          }}
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => handleChangeFilter(e.target.value)}
        />
      </Box>
      {isError ? (
        <Typography sx={{ color: "red", mt: 5 }}>
          There is nothing here...
        </Typography>
      ) : (
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
          <ListItems items={data} />
        </Grid>
      )}
    </Container>
  );
};
