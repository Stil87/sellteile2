import React from "react";
import { AppBar, createStyles, Fab,  makeStyles, Theme, Toolbar } from "@material-ui/core";
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
      position:'absolute'
    },
    grow: {
      flexGrow: 1,
    },
    fabButtonRight: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: '65%',
      right: 0,
      margin: '0 auto',
    },
    fabButtonLeft: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: '-65%',
      right: 0,
      margin: '0 auto',
    },
    
    



  }),
);
export default function Appbar() {

  const classes = useStyles();
  let history = useHistory();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget


  }

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Fab
          color="secondary"
          aria-label="right"
          className={classes.fabButtonRight}
          onClick={() => history.push('/Create')}>
          <ArrowForward />
        </Fab>
        <Fab
          color="secondary"
          aria-label="left"
          className={classes.fabButtonLeft}
          onClick={() => history.push('/Create')}>
          <ArrowBack />
        </Fab>
      </Toolbar>
    </AppBar >
  )
}