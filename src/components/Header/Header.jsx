import React, {useState} from "react";


import {
  AppBar,
  Toolbar,
  Typography,
  Box,

  Container,
} from "@material-ui/core";

import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";

 const Header = () => {
  const classes = useStyles();


  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          <MenuIcon className={classes.menuIcon} fontSize="large" />
          <Typography variant="h5" className={classes.title}>
            AddJobs
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Location
            </Typography>
 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default Header;