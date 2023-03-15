import { Box } from "@mui/material";
import React from "react";
import { InfoRow } from "./InfoRow";

export const InfoTable: React.FC = () => {
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
      {[1, 2, 3, 4, 5].map((item, index) => (
        <InfoRow key={index} />
      ))}
    </Box>
  );
};
