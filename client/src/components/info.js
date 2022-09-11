import React from "react";
import { makeStyles } from "@mui/styles";
import Image from "./images/lovewhite.png";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
  AppBar,
  Button,
  IconButton,
} from "@mui/material";
//create a info component
//color: bbd9d7

//create styles for the info component
const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh", // 16:9,
    marginTop: "30",
    width: "50%",
    marginRight: "30",
    backgroundRepeat: "no-repeat",
    display: "flex",
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <div id="info">
      <Card elevation={0} className="info-card">
        <CardMedia
          image={require("./images/lovewhite.png")}
          class={classes.root}
        />
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              position: "relative",
              marginTop: "-800px",
              marginLeft: "1000px",
              fontWeight: "bold",
              fontFamily: "Geneva, Tahoma, sans-serif",
              color: "#000",
            }}
          >
            Helping your local community
          </Typography>
          <Typography
            variant="h5"
            sx={{
              position: "relative",
              paddingTop: "50px",
              marginLeft: "1000px",
              fontFamily: "Geneva, Tahoma, sans-serif",
              color: "#000",
            }}
          >
            We provide a platform that allows people to raise funds for your
            local community utilizing Web3 Technology. With the DeSo API, you'll
            be able to donate funds to fundraisers using decentralized
            autonomous organizations (DAOs). This revolutionary technology
            allows you to donate to your local community without the need for a
            middleman.
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "#C66461", marginLeft: "1000px", marginTop: "50px" }}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
      <Box sx={{ marginBottom: "100px" }} textAlign="center">
        <Button>Contact Us</Button>
      </Box>
    </div>
  );
};

export default Info;
