import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import {Search} from "@mui/icons-material";

const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <MenuItem>
            <IconButton>
              <MenuIcon color={"secondary"} />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <Typography color={"secondary"} textAlign="center">
              D
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">I</Typography>
          </MenuItem>
          <MenuItem>
            <Typography color={"secondary"} textAlign="center">
              M
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">A</Typography>
          </MenuItem>
          <MenuItem>
            <Typography color={"secondary"} textAlign="center">
              S
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
