import React, { Fragment, useState, useEffect, useRef} from "react";
import { Grid, Card, CardContent, Typography, Button,FormControl,
  InputLabel,Select,MenuItem,IconButton,Paper,Divider,InputBase} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./MainStyles";
import VerifyProject from "../Components/VerifyProject/VerifyCard";
import SmsCard from '../Components/SmsProject/SmsCard';

function Main(props) {
  const { classes } = props;
  return (
  <Fragment>
    <div className={classes.root}>
      <Grid container alignItems='center' justify='center' spacing={0}>
            <Grid item xs={6}>
              <VerifyProject/>
            </Grid>
            <Grid item xs={6}>
              <SmsCard/>
            </Grid>
        </Grid>
      </div>
  </Fragment>
  );
}

export default withStyles(styles)(Main);
