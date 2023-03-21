import { Avatar, IconButton } from "@mui/material";
import React from "react";

interface AvatarButtonProps {
  name: string;
  picture: string;
  handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

export const AvatarButton: React.FC<AvatarButtonProps> = ({
  name,
  picture,
  handleOpenMenu,
}) => {
  return (
    <IconButton onClick={handleOpenMenu}>
      <Avatar
        alt={name}
        src={picture}
        sx={{ boxShadow: "0 0 7px 2px #00afc8" }}
      />
    </IconButton>
  );
};
