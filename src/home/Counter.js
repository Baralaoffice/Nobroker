import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Counter: {
    display: 'block',
    width: '100%',
    float: 'left',
    padding: '35px 0',
    color: '#fd3752',
    fontFamily: 'Source Sans Pro,sans-serif',
  },
  row: {
    display: 'block',
    width: '100%',
    float: 'left'
  },
  col_2: {
    display: 'flex',
    border: "2px solid #fd3752",
    height: '170px',
    width: '170px',
    borderRadius: '85px',
    fontSize: '40px',
    color: '#fd3752',
    lineHeight: '170px',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    "& p": {
      fontSize: '36px',
      fontWeight: 700,
      "& span": {
        fontSize: '36px',
        fontWeight: 700,
        color: '#ff7d09'
      },
    },


  },
  divider: {
    width: '100%',
    marginBottom: '10px',
    padding: '40px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: ' center',
    color: '#787676',
    "& p": {
      fontSize: '30px'
    }
  },
  divibox: {
    width: '33%',
    height: '1px',
    background: ' #707070',
    opacity: '.5',
    position: 'relative',

  },
  circle: {
    "&::before": {
      position: 'absolute',
      width: '20px',
      height: '20px',
      borderRadius: ' 50%',
      content: '""',
      border: ' 2px solid red',
      top: ' -11px',
      right: '-22px',

    }
  },
  circle1: {
    "&::after": {
      position: 'absolute',
      width: '20px',
      height: '20px',
      borderRadius: ' 50%',
      content: '""',
      border: ' 2px solid red',
      top: ' -11px',
      left: '-22px',

    }
  },
  col_3: {
    "& span": {
      fontSize: '22px',
      fontWeight: 500,
      color: '#464646',
      marginTop:'15px',
      display:'block'
    },
  }

})

const data = [
  {
    "count": "₹130 cr",
    "adn": "+",
    "name": "Brokerage saved monthly"

  },
  {
    "count": "30 Lakh",
    "adn": "+",
    "name": "Customers Connected Monthly",
  },
  {
    "count": "2 Lakh",
    "adn": "+",
    "name": "New Listings Monthly"
  },
]
const Counter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Counter}>
      <Box className={classes.row}>
        <Box className={classes.divider}>
          <Box className={`${classes.divibox} ${classes.circle}`} /><Typography>We Make A Difference</Typography><Box className={`${classes.divibox} ${classes.circle1}`} />
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, }}>
          {
            data.map((item, i) => (
              <Grid item xs={4}>
                <Box className={classes.col_2}>
                  <Typography>{item.count}<span>{item.adn}</span></Typography>
                </Box>
                <Box className={classes.col_3}>
                  <span>{item.name}</span>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  )
}

export default Counter