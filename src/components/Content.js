import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Searchbar from "./Searchbar";
import Filterstats from "./Filterstats";
import Cardlist from "./Cardlist";

export default function Content() {
  const styles = {
    padding: "2rem 5rem",
    bgcolor: "#F7F7F7",
  };
  return (
    <>
      <Box sx={styles}>
        <Grid container spacing={2} sx={{ marginBottom: "2.4rem" }}>
          <Grid item xs={8.5}>
            <Typography variant="h4">Search Properties to rent</Typography>
          </Grid>
          <Grid item xs={3.5}>
            <Searchbar />
          </Grid>
        </Grid>
        <Filterstats />
        <Cardlist />
      </Box>
    </>
  );
}
