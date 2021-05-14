import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
const useStyles = makeStyles({
  sideMenu: {
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    left:'0px',
    width:'250px',
    height:'100%',
    backgroundColor:'#253053'
  },
});
export default function SideMenu() {
  const classes=useStyles();
  return (
      <div className={classes.sideMenu}>
          <h1>Hello World</h1>
      </div>
  );
}
