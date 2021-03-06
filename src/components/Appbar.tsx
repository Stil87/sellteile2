import React from "react";
import { AppBar, createStyles, Fab, fade, InputBase, makeStyles, Theme, Toolbar } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: '65%',
      right: 0,
      margin: '0 auto',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      }
    },



  }),
);
export default function Appbar({ updatePartList }: { updatePartList: Function }) {

  const classes = useStyles();
  let history = useHistory();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget
    updatePartList(parseInt(value))

  }

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fabButton}
          onClick={() => history.push('/Create')}>
          <AddIcon />
        </Fab>
      <div className={classes.grow} />
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          type='number'
          onChange={handleChange}
          placeholder="Teilenummer"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      </Toolbar>
    </AppBar >
  )
}