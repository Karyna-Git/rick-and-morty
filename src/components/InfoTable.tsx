import { Box } from "@mui/material";
import React from "react";
import { ICharacter } from "../types";
import { InfoRow } from "./InfoRow";

interface InfoTableProps {
  item?: ICharacter;
}

export const InfoTable: React.FC<InfoTableProps> = ({ item }) => {
  if (!item) {
    return null;
  }

  const { id, status, species, type, gender, origin } = item;
  const rows = { status, species, type, gender, origin: origin.name };
  const entries = Object.entries(rows);

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          mt: 6,
        },
        [theme.breakpoints.down("md")]: {
          mt: 2,
        },
        mx: "auto",
        maxWidth: "400px",
      })}
    >
      {entries.map(
        ([key, value]) =>
          value && <InfoRow key={id} rowKey={key} rowValue={value} />
      )}
    </Box>
  );
};
