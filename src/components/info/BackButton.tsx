import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface BackButtonProps {
  onBack: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
  return (
    <Button
      startIcon={<ArrowBack sx={{ width: "24px", height: "24px" }} />}
      sx={{
        pt: 0.25,
        pb: 0.15,
        pl: 0.5,
        pr: 0,
        height: "24px",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "21px",
        color: "black",
      }}
      onClick={onBack}
    >
      Go Back
    </Button>
  );
};
