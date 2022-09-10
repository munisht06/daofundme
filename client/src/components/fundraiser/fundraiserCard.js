import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  CardActions,
  LinearProgress,
} from "@mui/material";

const FundraiserCard = ({ fundraiser }) => {
  return (
    <Grid item xs={3.5}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Fundraising for Red Cross
          </Typography>

          <Typography sx={{ paddingBlock: 4 }} variant="body1" component="p">
            The American Red Cross prevents and alleviates human suffering in
            the face of emergencies by mobilizing the power of volunteers and
            the generosity of donors.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <Box sx={{ color: "green" }}>
            <LinearProgress
              sx={{ marginTop: 3 }}
              variant="determinate"
              value={50}
              color="inherit"
            />
          </Box>
          <Typography variant="body2">Goal: $20,000 of $50,000</Typography>
          <Typography color="textSecondary" variant="body2">
            (3472.33 DESO of 8680.55 DESO)
          </Typography>
        </CardContent>
        <CardActions>
          <Box textAlign="center">
            <Typography color="textSecondary" variant="body2">
              50% progress
            </Typography>
            <Button size="small">Learn More</Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FundraiserCard;
