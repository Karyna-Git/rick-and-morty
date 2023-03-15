import { Grid } from "@mui/material";
import React from "react";
import { ItemCard } from "./ItemCard";

export const ListItems: React.FC = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ItemCard key={index} />
        </Grid>
      ))}
    </>
  );
};
