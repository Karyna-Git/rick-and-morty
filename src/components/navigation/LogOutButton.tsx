import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface LogoutButtonProps {
  onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return (
    <Button fullWidth startIcon={<Logout />} onClick={onLogout}>
      Log Out
    </Button>
  );
};
