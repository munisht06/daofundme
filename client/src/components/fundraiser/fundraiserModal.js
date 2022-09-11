import React from "react";
import { Paper, Grid, Button, TextField, Snackbar } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Deso from "deso-protocol";

const FundraiserModal = () => {
  const [value, setValue] = React.useState(dayjs());
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  //   const navigate = useNavigate();
  //   const [title, setTitle] = useState(fundraiser.title);
  //   const [description, setDescription] = useState(fundraiser.description);
  //   const [goal, setGoal] = useState(fundraiser.goal);
  //   const [endDate, setEndDate] = useState(fundraiser.endDate);
  const [publicKey, setPublicKey] = useState("");

  const deso = new Deso();

  const handleWallet = async () => {
    await deso.identity.login();
    const loggedInUserKey = deso.identity.getUserKey();
    console.log(loggedInUserKey);
    setPublicKey(loggedInUserKey);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>Create Fundraiser</h1>
              <TextField
                required
                id="title"
                name="title"
                label="Title"
                fullWidth
                autoComplete="title"
                //onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                autoComplete="description"
                //onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="goal"
                name="goal"
                label="Goal"
                type={"number"}
                fullWidth
                autoComplete="goal"
                //onChange={(e) => setGoal(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <DesktopDatePicker
                label="End Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="success"
                onClick={handleWallet}
                required
                fullWidth
              >
                Connect Wallet
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ color: "#C66461", border: "#C66461" }}
                style={{ marginTop: "1em" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </LocalizationProvider>
  );
};

export default FundraiserModal;
