import { React, useState } from "react";
import Sidebar from "../sidebar";
import "../sidebar.scss";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import {
  Typography,
  Card,
  Button,
  CardContent,
  Paper,
  Grid,
  LinearProgress,
  Box,
} from "@mui/material";

const Fundraiser = (prop) => {
  const [goal, setGoal] = useState(10000);
  const [raised, setRaised] = useState(5000);
  const [donation, setDonation] = useState(0);
  const [description, setDescription] = useState(
    "This Go Fund Me Page is established in honor and loving memory of Lucy Fernandez. All proceeds will go to the Lucy Fernandez Foundation to set up a scholarship at Our Lady of Lourdes Academy, her cherished school, where she formed strong bonds of sisterhood. The scholarship will afford students the opportunity to share in what generations of young women, like Lucy, were fortunate to experience. With Mary in all things, the Lucy Fernandez Foundation will continue Lucy’s legacy of faith, kindness and love."
  );
  const [title, setTitle] = useState("Red Cross");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [progress, setProgress] = useState((raised / goal) * 100);

  //define setProgress
  const handleProgressChange = () => {
    setProgress((raised / goal) * 100);
  };

  const useStyles = makeStyles({
    root: {
      display: "flex",
    },
    container: {
      flex: 6,
      paddingBlock: 50,
    },
    title: {
      textAlign: "center",
      fontSize: 30,
      color: "#C66461",
    },
    card: {
      maxWidth: 500,
      padding: 50,
      borderRadius: 20,
    },
    fundraiserContainer: {
      flexDirection: "row",
     
    },
    fundraiserCard: {
      paddingBlock: 10,
      marginLeft: 10
    },
    description: {
      padding: 50,
    },
    donateButton: {
      background: "#C66461",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      padding: 10,
      borderRadius: 10,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.container}>
        <Grid container spacing={6} className={classes.fundraiserContainer}>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.fundraiserCard}>
              <Typography
                variant="h5"
                component="h2"
                align="center"
                sx={{ fontSize: 60, color: "#C66461" }}
              >
                {title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: 20,
                  color: "#C66461",
                }}
                className={classes.description}
              >
                {description}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={10}
              className={classes.card}
              sx={{ borderRadius: 5 }}
            >
              <Typography variant="h5" component="h2" align="center">
                ${raised}
              </Typography>
              <Typography color="textSecondary" align="center">
                raised of ${goal} goal
              </Typography>
              <Box sx={{ color: "green", paddingBlock: 2 }}>
                <LinearProgress
                  variant="determinate"
                  color="inherit"
                  value={progress}
                />
              </Box>
              <Box textAlign="center">
                <Button variant="contained" color="success" align="center">
                  Donate
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Fundraiser;
