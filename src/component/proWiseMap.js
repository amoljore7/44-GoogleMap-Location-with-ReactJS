import React, { useState, useEffect } from "react";
import { Typography, Divider, withStyles, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { TextField, MenuItem, Button } from "@material-ui/core";

import styles from "./proWiseMap.style";
import Map from "./gMap";

const PROwiseMap = ({ classes, google }) => {
  const [statusType, setStatusType] = useState([]);
  const [latlang, setLatlang] = useState([]);
  const latlangData = {
    coordinate: [
      {
        lat: 13.0339,
        lng: 77.55,
      },
      {
        lat: 13.0334,
        lng: 77.564,
      },
      {
        lat: 13.0271,
        lng: 77.5559,
      },
    ],
    application: [
      {
        lat: 13.0318,
        lng: 77.5773,
      },
      {
        lat: 13.0348,
        lng: 77.5761,
      },
      {
        lat: 13.0385,
        lng: 77.565,
      },
    ],
  };
  const GetData = () => {
    setLatlang(latlangData);
  };
  const city = [
    {
      value: "USD",
      label: "Bell Road Banglore",
    },
  ];
  const place = [
    {
      value: "USD",
      label: "favorite places in bangalore",
    },
  ];
  return (
    <React.Fragment>
      <Typography variant="h2">Map</Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-select-currency"
          select
          label="City"
          helperText="Please select your city"
          style={{ margin: "10px" }}
        >
          {city.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          label="Category"
          helperText="Please select your fev place"
          style={{ margin: "10px" }}
        >
          {place.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "35px" }}
          onClick={GetData}
        >
          Get
        </Button>
      </form>
      <Divider className={classes.divider} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid item md={12} sm={12} xs={12} style={{ margin: "30px" }}>
            <Map
              latLangValue={latlang}
              multiple={!!(statusType && statusType.length > 1)}
              google={google}
              center={{
                lat: 13.0342708,
                lng: 77.56816509999999,
              }}
              height="500px"
              zoom={15}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

PROwiseMap.defaultProps = {
  google: {},
};

PROwiseMap.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  google: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(PROwiseMap);
