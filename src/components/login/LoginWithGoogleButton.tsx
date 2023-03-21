import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface LoginWithGoogleButtonProps {
  login: () => void;
}

export const LoginWithGoogleButton: React.FC<LoginWithGoogleButtonProps> = ({
  login,
}) => {
  return (
    <Button
      variant="outlined"
      size="large"
      startIcon={<Google />}
      onClick={() => login()}
    >
      Continue with Google
    </Button>
  );
};
