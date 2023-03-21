import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { IUserProfile } from "../../types";
import { HideOnScroll } from "./HideOnScroll";
import { UserInfo } from "./UserInfo";

interface HideAppBarProps {
  window?: () => Window;
  children: React.ReactElement;
  profile: IUserProfile;
}

export const HideAppBar: React.FC<HideAppBarProps> = (props) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: "#035d6b", boxShadow: "0 0 7px 2px #00afc8" }}>
          <Toolbar>
            <img
              src="logo.png"
              alt="logo"
              style={{
                height: "45px",
                boxShadow: "0 0 7px 2px #00afc8",
                borderRadius: "10% 30% 50% 70%",
              }}
            />
            <Typography
              sx={(theme) => ({
                [theme.breakpoints.up("md")]: { fontSize: 25 },
                [theme.breakpoints.up("sm")]: { fontSize: 23 },
                [theme.breakpoints.down("sm")]: { fontSize: 21 },
                flexGrow: 1,
                ml: 2.5,
              })}
            >
              Rick and Morty
            </Typography>
            <UserInfo />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {props.children}
      <Toolbar />
    </>
  );
};
