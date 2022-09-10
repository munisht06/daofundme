import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CardActions,
} from "@mui/material";

const FundraiserCard = ({ fundraiser }) => {
  return (
    <Grid item xs={2}>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be nev o lent
          </Typography>
          <Typography color="textSecondary">adjective</Typography>

          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FundraiserCard;
