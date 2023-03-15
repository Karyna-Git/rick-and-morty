import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { ListItems } from "../components/ListItems";
import { SearchInput } from "../components/SearchInput";
import { Title } from "../components/Title";

export const MainPage: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ mt: 10 }}>
        <Title />
      </Box>
      <Box sx={{ mt: 3, width: "100%", maxWidth: "1020px" }}>
        <SearchInput />
      </Box>
      <Grid
        container
        spacing={2.5}
        sx={{
          mt: 6,
          maxWidth: "1040px",
        }}
      >
        <ListItems />
      </Grid>
    </Container>
  );
};
