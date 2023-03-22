import { Typography } from "@mui/material";
import React from "react";

interface InfoTitleProps {
  title: string;
}

export const InfoTitle: React.FC<InfoTitleProps> = ({ title }) => {
  return (
    <Typography
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: { mt: 6 },
        [theme.breakpoints.down("md")]: { mt: 4, textAlign: "start" },
        color: "#8E8E93",
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "24px",
      })}
    >
      {title}
    </Typography>
  );
};
