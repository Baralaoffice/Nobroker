import React from 'react';
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  row: {
    width: '100%',
    float: 'left',
    clear: 'both',
    '& p':{
      textTransform: 'capitalize',
    }
  }
})


const Rent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Typography>Rent</Typography>
    </Box>
  )
}

export default Rent
