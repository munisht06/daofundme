import React, { useEffect } from "react";
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
import Info from "./info";
import Textanimation from "./textanimation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

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

  let url = "https://daofundme-prod.herokuapp.com/";
  let navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    axios
      .get(url + "login")
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <div>
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
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() =>
                    loginWithRedirect({
                      screen_hint: "signup",
                    })
                  }
                >
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
                {/* <h1>DaoFundMe</h1>
                <h3>Decentralized Funding for Nonprofit Projects</h3> */}
                <Textanimation />
                <Box sx={{ color: "#C66461" }}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    position="absolute"
                    onClick={() =>
                      isAuthenticated
                        ? navigate("/dashboard")
                        : loginWithRedirect({
                            screen_hint: "signup",
                          })
                    }
                  >
                    Get Started
                  </Button>
                </Box>
                <Scroll to="info" smooth={true}>
                  <IconButton position="relative" style={{ color: "#000" }}>
                    <ExpandMoreIcon />
                  </IconButton>
                </Scroll>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Info />
    </div>
  );
};

export default Onboarding;
