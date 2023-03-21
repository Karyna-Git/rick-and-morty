import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface LogOutButtonProps {
  logOut: () => void;
}

export const LogOutButton: React.FC<LogOutButtonProps> = ({ logOut }) => {
  return (
    <Button fullWidth startIcon={<Logout />} onClick={logOut}>
      Log Out
    </Button>
  );
};
