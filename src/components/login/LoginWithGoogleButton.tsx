import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface LoginWithGoogleButtonProps {
  onLogin: () => void;
}

export const LoginWithGoogleButton: React.FC<LoginWithGoogleButtonProps> = ({
  onLogin,
}) => {
  return (
    <Button
      variant="outlined"
      size="large"
      startIcon={<Google />}
      onClick={onLogin}
    >
      Continue with Google
    </Button>
  );
};
