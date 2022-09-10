import { React, useState } from "react";
import Sidebar from "../sidebar";
import "../sidebar.scss";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import { Typography, Card, Button, CardContent, Paper } from "@mui/material";

const Fundraiser = (prop) => {
  const [goal, setGoal] = useState(0);
  const [raised, setRaised] = useState(0);
  const [donation, setDonation] = useState(0);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  const useStyles = makeStyles({
    root: {
      display: "flex",
    },
    container: {
      flex: 6,
    },
    title: {
      height: "10vh",
      textAlign: "center",
      fontSize: 30,
      color: "#C66461",
    },
    fundraiser: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      background: "#F2F2F2",
    },
    fundraiserContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      background: "#F2F2F2",
    },
    fundraiserCard: {
      postion: "relative",
      justifyContent: "center",
      alignItems: "center",
      background: "#F2F2F2",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.container}>
        <div className={classes.title}>Fundraiser</div>
        <Paper sx={{ maxWidth: 345 }}>
          <Card >
            <Typography variant="h2" class={classes.title}>
              {raised} / {goal}
            </Typography>
            <Button>
              <Typography variant="h15" class={classes.title}>
                Donate
              </Typography>
            </Button>
          </Card>
        </Paper>
      </div>
    </div>
  );
};

export default Fundraiser;
