import React from "react";
import HouseCard from "./HouseCard";
import data from "./card-data/data";
import Grid from "@mui/material/Grid";

export default function Cardlist() {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60
  }
  return (
    <div style={styles}>
      <Grid container spacing={2}>
        {data.map((dt) => {
          return (
            <Grid item key={dt.id} xs={4}>
              <HouseCard name={dt.name} address={dt.address} img={dt.img}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
