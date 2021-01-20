import React, {
  useState,
  useEffect
} from "react";
import {
  Typography,
  Divider,
  withStyles,
  Grid
} from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./proWiseMap.style";
import Map from "./gMap";

const PROwiseMap = ({ classes, google }) => {
  const [statusType, setStatusType] = useState([]);

  return (
    <React.Fragment>
      <Typography variant="h2">Map</Typography>
      <Divider className={classes.divider} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid item md={12} sm={12} xs={12} style={{ margin: "30px" }}>
            <Map
              latLangValue={""}
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
