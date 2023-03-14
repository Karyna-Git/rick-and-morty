import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";

export const SearchInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      fullWidth
      InputProps={{
        startAdornment: <Search sx={{ mr: 1.5 }} />,
      }}
      placeholder="Filter by name..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
