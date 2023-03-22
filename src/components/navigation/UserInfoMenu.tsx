import { Avatar, Box, Divider, Menu } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { LogoutButton } from "./LogOutButton";

interface UserInfoMenuProps {
  name: string;
  email: string;
  picture: string;
  anchorElement: HTMLElement | null;
  closeMenu: () => void;
  onLogout: () => void;
}

export const UserInfoMenu: React.FC<UserInfoMenuProps> = ({
  name,
  email,
  picture,
  anchorElement,
  closeMenu,
  onLogout,
}) => {
  return (
    <Menu
      sx={{ mt: 6 }}
      anchorEl={anchorElement}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElement)}
      onClose={closeMenu}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            width: "fit-content",
          }}
        >
          <Box>
            <Avatar
              src={picture}
              alt={name}
              sx={{ width: 55, height: 55, mr: 2 }}
            />
          </Box>
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Typography paragraph variant="subtitle2">
              {email}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <LogoutButton onLogout={onLogout} />
        </Box>
      </Box>
    </Menu>
  );
};
