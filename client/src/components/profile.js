import React from "react";
import Sidebar from "./sidebar";
import "./profile.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import { Button, TextField, Paper } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#C66461",
  },
  paper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100%",
    padding: "20px",
  },
}));

const Profile = () => {
  const classes = useStyles();
  //fetch user data from the database
  const { user, isAuthenticated } = useAuth0();

  //   React.useEffect(() => {
  //     axios
  //       .get("https://daofundme-prod.herokuapp.com/user/profile")
  //       .then((res) => {
  //         setFirstName(res.data.firstName);
  //         setLastName(res.data.lastName);
  //         setEmail(res.data.email);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div className="profile">
      <Sidebar />
      <div className="profile-container">
        {console.log(user)}
        <Paper
          style={{
            margin: "auto",
            marginTop: "4em",
            padding: "1.2em",
            height: "70vh",
            width: 500,
            borderRadius: "10px",
          }}
        >
          <Typography variant="h2" class={classes.title}>
            Profile
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <AccountCircleIcon fontSize="large" />
          </Box>
          <Box
            sx={{ marginTop: "20px" }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Typography variant="h5" style={{ marginRight: "10px" }}>
              Name: {user.name}
            </Typography>
          </Box>
          <Box
            sx={{ marginTop: "20px" }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Typography variant="h5" style={{ marginRight: "10px" }}>
              Email: {user.email}
            </Typography>
          </Box>
          <Box
            sx={{ marginTop: "20px" }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Typography variant="h5" style={{ marginRight: "10px" }}>
              Verified Email: {isAuthenticated ? "Yes" : "No"}
            </Typography>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default Profile;
