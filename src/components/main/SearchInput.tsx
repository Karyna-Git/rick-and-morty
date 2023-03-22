import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";

interface SearchInputProps {
  value: string;
  changeValue: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  changeValue,
}) => {
  return (
    <TextField
      fullWidth
      InputProps={{
        startAdornment: <Search sx={{ mr: 1.5 }} />,
      }}
      placeholder="Filter by name..."
      value={value}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
};
