import { Typography } from "@mui/material";
import React from "react";

interface InfoNameProps {
  name?: string;
}

export const InfoName: React.FC<InfoNameProps> = ({ name = "" }) => {
  return (
    <Typography
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          mt: 2,
          fontSize: "48px",
          lineHeight: "56px",
        },
        [theme.breakpoints.down("md")]: {
          mt: 4,
          fontSize: "32px",
          lineHeight: "38px",
        },
        color: "#081F32",
      })}
    >
      {name}
    </Typography>
  );
};
