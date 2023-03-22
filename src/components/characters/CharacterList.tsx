import { Grid } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ICharacter } from "../../types";
import { Character } from "./Character";

interface CharacterListProps {
  characters?: ICharacter[];
}

export const CharacterList: React.FC<CharacterListProps> = ({
  characters = [],
}) => {
  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 2.5, lg: 2.5 }}
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: { mt: 4.5 },
        [theme.breakpoints.down("md")]: { mt: 0.5 },
      })}
    >
      {characters.map((character) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={uuidv4()}>
          <Character key={uuidv4()} character={character} />
        </Grid>
      ))}
    </Grid>
  );
};
