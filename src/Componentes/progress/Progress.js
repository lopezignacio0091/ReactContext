import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <><br/>
      <div className="container-fluid mt-2">
        <div className="card">
          <div className="card-body">
          <LinearProgress color="secondary" /> 
            <br></br>
          </div>
        </div>
      </div>
      <br/>
    </>
  );
}