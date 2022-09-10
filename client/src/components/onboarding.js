import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  AppBar,
  IconButton,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Image from "./images/Donation.gif";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Textanimation from "./testanimation";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  title: {
    textAlign: "center",
    padding: 350,
    color: "#000",
  },
  appbar: {
    background: "transparent",
    alignItems: "center",
    boxShadow: "none",
    display: "flex",
    borderRadius: 15,
    padding: "0 px",
  },
  appbarTitle: {
    flexGrow: "1",
    fontFamily: "Geneva, Tahoma, sans-serif",
    color: "#000",
    marginLeft: "30px",
  },
}));

const Onboarding = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar class={classes.appbar} elevation={0}>
          <Typography variant="h2" class={classes.appbarTitle}>
            DaoFundMe
          </Typography>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Box sx={{ color: "black" }}>
              <Button color="inherit" variant="outlined">
                Sign In
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography class={classes.title}>
              <Textanimation />
              <Box sx={{ color: "#C66461" }}>
                <Button
                  variant="outlined"
                  color="inherit"
                  component={Link}
                  to="/signup"
                  position="absolute"
                >
                  Get Started
                </Button>
              </Box>
              <IconButton position="relative" style={{ color: "#000" }}>
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Onboarding;
