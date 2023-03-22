import { Box, Container } from "@mui/material";
import queryString from "query-string";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HideAppBar } from "../components/navigation/HideAppBar";
import { CharacterList } from "../components/characters/CharacterList";
import { ErrorMessage } from "../components/main/ErrorMessage";
import { PaginationRounded } from "../components/main/PaginationRounded";
import { SearchInput } from "../components/main/SearchInput";
import { Title } from "../components/main/Title";
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
          [theme.breakpoints.up("md")]: { mb: 15.5, maxWidth: "1020px" },
          [theme.breakpoints.down("md")]: { mb: 21.5 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "1020px",
          p: 3,
        })}
      >
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: { mt: 7.5 },
            [theme.breakpoints.down("md")]: { mt: 8.5 },
          })}
        >
          <Title />
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: { mt: 2 },
            [theme.breakpoints.down("md")]: { mt: 4 },
            width: "100%",
          })}
        >
          <SearchInput value={filter} changeValue={handleChangeFilter} />
        </Box>
        {isError ? (
          <ErrorMessage />
        ) : (
          <>
            <CharacterList characters={data?.results} />
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
