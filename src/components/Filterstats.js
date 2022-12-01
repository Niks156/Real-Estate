import React from "react";
import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function Filterstats() {
  const styles = {
    background: "white",
    marginBottom: "2rem",
  };
  return (
    <>
      <Grid container spacing={2} sx={styles}>
        <Grid item xs={2.2}>
          <Typography variant="h4">Location</Typography>
        </Grid>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Grid item xs={2.2}>
          <Typography variant="h4">When</Typography>
        </Grid>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Grid item xs={2.2}>
          <Typography variant="h4">Price</Typography>
        </Grid>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Grid item xs={2.2}>
          <Typography variant="h4">Property Type</Typography>
        </Grid>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Grid item xs={2}>
          <Button variant="contained">Search</Button>
        </Grid>
      </Grid>
    </>
  );
}
