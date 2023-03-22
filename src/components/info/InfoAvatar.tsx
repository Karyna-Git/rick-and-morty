import { Avatar } from "@mui/material";
import React from "react";

interface InfoAvatarProps {
  image?: string;
}

export const InfoAvatar: React.FC<InfoAvatarProps> = ({ image = "" }) => {
  return (
    <Avatar
      src={image}
      alt="item-photo"
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: { width: "300px", height: "300px" },
        [theme.breakpoints.down("md")]: { width: "150px", height: "150px" },
        border: "5px solid #F2F2F7",
        margin: "auto",
      })}
    />
  );
};
