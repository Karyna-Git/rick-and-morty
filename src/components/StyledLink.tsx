import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface StyledLinkProps {
  to: string;
  children: ReactNode;
}

export const StyledLink: React.FC<StyledLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};
