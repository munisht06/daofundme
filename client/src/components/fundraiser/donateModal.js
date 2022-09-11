import { React, useEffect, useState } from "react";
import { Paper, Grid, Button, TextField, Snackbar, Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Deso from "deso-protocol";

const DonateModal = () => {
  const [amount, setAmount] = useState(0);
  const [publicKey, setPublicKey] = useState("");

  const deso = new Deso();

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleWallet = async () => {
    await deso.identity.login();
    const loggedInUserKey = deso.identity.getUserKey();
    console.log(loggedInUserKey);
    setPublicKey(loggedInUserKey);
  };

  return (
    <Paper
      style={{
        margin: "auto",
        marginTop: "4em",
        padding: "1.2em",
        height: "50vh",
        width: 500,
        borderRadius: "10px",
      }}
    >
      {publicKey}
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign="center">
            <h1 style={{ alignContent: "center" }}>Make a Donation</h1>
            <TextField
              label=" Donation Amount (DESO)"
              sx={{ m: 1, width: "30" }}
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              sx={{ color: "#C66461", border: "#C66461" }}
              style={{ marginTop: "1em" }}
              onClick={handleWallet}
              required
            >
              Connect Wallet
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success" required fullWidth>
              Donate
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default DonateModal;
