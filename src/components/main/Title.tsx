import { Avatar } from "@mui/material";
import React from "react";

export const Title: React.FC = () => {
  return (
    <Avatar
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "600px",
        minWidth: "312px",
        maxHeight: "200px",
        minHeight: "104px",
      }}
      variant="square"
      src="title.png"
      alt="title"
    />
  );
};
