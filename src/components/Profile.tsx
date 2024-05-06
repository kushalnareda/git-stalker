import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(15),
        marginBottom: theme.spacing(5),
        transition: 'transform 0.3s, filter 0.3s',
        '&:hover': {
          transform: 'scale(1.05)', 
          filter: 'drop-shadow(0 0 5px #fff)', 
        },
        
      },
    },
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  }),
);

export default function ImageAvatars() {
  const classes = useStyles();
  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={userData.avatar_url} className={classes.large} />
    </div>
  );
}
