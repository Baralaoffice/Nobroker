import { AppBar, Box, Toolbar, Button } from '@mui/material'
import React from 'react'
import Booking from './Header/Booking'
import Logo from './Header/Logo'
import PayRent from './Header/PayRent'
import { makeStyles } from '@mui/styles';
import Owners from './Header/Owners';

const useStyles = makeStyles({
  Header: {
    background: '#fff !important',
    '& > div': {
      justifyContent: 'space-between',
    },
  },

  side: {
    display: 'flex',
    gap: '20px',
    "& Button": {
      border: '1px solid #e6e6e6',
      padding: ' 4px 10px',
      borderRadius: '2px',
      height: '30px',
      fontSize: '14px',
      textTransform: 'capitalize',
      color: '#363636',
      fontFamily: 'Source Sans Pro, sans-serif',
      "& img": {
        display: 'block',
        marginRight: '6px',
      }
    }
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    "& Button": {
      border: 'none',
      borderRight: 'solid 1px #e6e6e6',
      padding: ' 4px 10px',
      borderRadius: '2px',
      height: '30px',
      fontSize: '14px',
      textTransform: 'capitalize',
      color: '#363636',
    }
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.Header}>
      <Toolbar>
        <Logo />
        <Box className={classes.side}>
          <Booking />
          <PayRent />
          <Owners />
          <Box className={classes.btn}>
            <Button>Sign up</Button>
            <Button>Log in</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
