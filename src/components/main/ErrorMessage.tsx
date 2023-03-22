import { Typography } from "@mui/material";
import React from "react";

export const ErrorMessage: React.FC = () => {
  return <Typography sx={{ color: "red", mt: 5 }}>No matches...</Typography>;
};
