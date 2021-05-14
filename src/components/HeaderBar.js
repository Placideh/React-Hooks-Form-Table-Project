import React from 'react';
import {AppBar ,Toolbar,Typography } from '@material-ui/core';
import {Grid ,InputBase,IconButton,Badge } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles,withStyles } from '@material-ui/core';
const useStyles=makeStyles(theme=>({
  root:{
    backgroundColor:'#fff'
  },
  searchInput:{
    opacity:'0.6',
    padding:`0px ${theme.spacing(1)}px`,
    fontSize:'0.8rem',
    '&:hover':{
      backgroundColor:'#f2f2f2'
    },
    '& .MuiSvgIcon-root':{
      marginRight:theme.spacing(1)

    },
    btnRoot:{
      backgroundColor:'blue'
    },
    btnLabel :{
      backgroundColor:'red'
    }

  }
}))
export default function HeaderBar() {
  const classes =useStyles();
    return (
            <AppBar className={classes.root}position ="static">
              <Toolbar>
                <Grid container alignItems="center" >
                  <Grid item >
                  <InputBase placeholder="enter the thing...."
                  className={classes.searchInput}
                  startAdornment={<SearchIcon fontSize="small"/>}/>

                  </Grid>
                  <Grid item sm ></Grid>
                  <Grid item >
                    <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}}>
                        <Badge badgeContent={4} color="secondary">
                          <NotificationsNoneIcon fontSize="small"/>
                        </Badge>
                      </IconButton>
                      <IconButton>
                        <Badge badgeContent={4} color="primary">
                          <ChatBubbleOutlineIcon fontSize="small"/>
                        </Badge>
                      </IconButton>
                      <IconButton>
                          <PowerSettingsNewIcon fontSize="small"/>
                      </IconButton>

                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
    )
}
