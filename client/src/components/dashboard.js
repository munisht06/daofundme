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
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import "./dashboard.scss";
import FundraiserCard from "./fundraiser/fundraiserCard";

//create styles for the dashboard component
const useStyles = makeStyles((theme) => ({
  title: {
    height: "10vh",
    textAlign: "center",
    fontSize: 30,
    color: "#C66461",
  },

  appbar: {
    background: "white",
    boxShadow: "none",
    display: "flex",
  },
}));

//create a dashboard component
const Dashboard = () => {
  const classes = useStyles();
  return (
    //sidebar component
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-container">
        <Typography variant="h2" class={classes.title}>
          Fundraisers
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <FundraiserCard />
          <FundraiserCard />
          <FundraiserCard />
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
