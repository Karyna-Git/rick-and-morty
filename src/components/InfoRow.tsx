import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export const InfoRow: React.FC = () => {
  return (
    <Box sx={{ pt: 1, px: 2, textAlign: "start" }}>
      <Typography
        sx={{
          fontWeight: 700,
          lineHeight: "24px",
          color: "#081F32",
        }}
      >
        Gender
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.25px",
          color: "#6E798C",
        }}
      >
        Human
      </Typography>
      <Divider sx={{ mt: 1.5, background: "rgba(33, 33, 33, 0.08)" }} />
    </Box>
  );
};
