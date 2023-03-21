import { Search } from "@mui/icons-material";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import queryString from "query-string";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HideAppBar } from "../components/bar/HideAppBar";
import { ListItems } from "../components/ListItems";
import { PaginationRounded } from "../components/PaginationRounded";
import { Title } from "../components/Title";
import { useSearchCharactersQuery } from "../store/api";
import { charactersActions } from "../store/characters.slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.characters.filter);
  const page = useAppSelector((state) => state.characters.page);
  const profile = useAppSelector((state) => state.user.profile);

  const { data, isError } = useSearchCharactersQuery({
    search: filter,
    page,
  });

  useEffect(() => {
    const query = queryString.stringify(
      { name: filter, page },
      { skipNull: true, skipEmptyString: true }
    );
    navigate("?".concat(query));
  }, [page, filter, navigate]);

  const handleChangeFilter = (value: string) => {
    dispatch(charactersActions.setFilter(value));
  };

  const handleChangePage = (value: number) => {
    dispatch(charactersActions.setPage(value));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HideAppBar profile={profile}>
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
          <Typography sx={{ color: "red", mt: 5 }}>No matches...</Typography>
        ) : (
          <>
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
              <ListItems items={data?.results} />
            </Grid>
            <Box sx={{ mt: 5 }}>
              <PaginationRounded
                count={data?.info.pages}
                currentPage={page}
                changePage={handleChangePage}
              />
            </Box>
          </>
        )}
      </Container>
    </HideAppBar>
  );
};
