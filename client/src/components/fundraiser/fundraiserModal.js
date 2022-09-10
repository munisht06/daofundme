import React from "react";
import { Paper, Grid, Button, TextField, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FundraiserModal = ({ fundraiser }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(fundraiser.title);
  const [description, setDescription] = useState(fundraiser.description);
  const [goal, setGoal] = useState(fundraiser.goal);
  const [endDate, setEndDate] = useState(fundraiser.endDate);

  return (
    <div>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="goal"
                name="goal"
                label="Goal"
                fullWidth
                autoComplete="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="endDate"
                name="endDate"
                label="End Date"
                fullWidth
                autoComplete="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "1em" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default FundraiserModal;
