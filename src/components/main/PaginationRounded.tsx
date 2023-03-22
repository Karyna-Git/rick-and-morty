import { useMediaQuery, useTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React from "react";

interface PaginationRoundedProps {
  count?: number;
  currentPage?: number;
  changePage: (page: number) => void;
}

export const PaginationRounded: React.FC<PaginationRoundedProps> = ({
  count,
  currentPage,
  changePage,
}) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));

  const getSize = () => {
    if (small) {
      return "small";
    } else if (medium) {
      return "medium";
    }
    return "large";
  };

  return (
    <Pagination
      count={count}
      page={currentPage}
      variant="outlined"
      shape="rounded"
      color="primary"
      size={getSize()}
      onChange={(_, value) => changePage(value)}
    />
  );
};
