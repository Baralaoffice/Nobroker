import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  row: {
    width: '170px',
    height: 'auto'
  },
  logo: {
    width: '100%',
    float: 'left',
    clear: 'both',
    "& img": {
      width: '100%',
    }
  },
});

const Logo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Box className={classes.logo}>
        <img src='./img/logo.svg' alt='ad' />
      </Box>
    </Box>
  )
}

export default Logo
