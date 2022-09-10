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
import Image from "./images/CryptoBackground.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as Scroll } from "react-scroll";

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
    fontSize: 100,
    color: "#FFF",
    textShadow: "3px 3px #FA8627",
  },
  appbar: {
    background: "white",
    alignItems: "center",
    boxShadow: "none",
    display: "flex",
  },
}));

const Onboarding = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar class={classes.appbar} elevation={0}>
          <h2>DaoFundMe</h2>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button color="inherit">Sign In</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              <h1>DaoFundMe</h1>
              <h3>Decentralized Funding for Nonprofit Projects</h3>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/signup"
                position="absolute"
              >
                Get Started
              </Button>
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
