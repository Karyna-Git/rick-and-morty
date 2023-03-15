import { Box } from "@mui/material";
import React from "react";
import { InfoRow } from "./InfoRow";

export const InfoTable: React.FC = () => {
  return (
    <Box sx={{ mt: 6, mx: "auto", width: "400px" }}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <InfoRow key={index} />
      ))}
    </Box>
  );
};
