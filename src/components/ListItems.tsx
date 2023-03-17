import { Grid } from "@mui/material";
import React from "react";
import { ICharacter } from "../types";
import { ItemCard } from "./ItemCard";

interface ListItemsProps {
  items?: ICharacter[];
}

export const ListItems: React.FC<ListItemsProps> = ({ items = [] }) => {
  return (
    <>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <ItemCard key={item.id} item={item} />
        </Grid>
      ))}
    </>
  );
};
