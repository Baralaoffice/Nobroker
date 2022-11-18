import React from 'react';
import { Typography, Tabs, Tab, Box, Link, Button, Divider } from '@mui/material';
import Buy from './Buy';
import Rent from './Rent';
import Commercial from './Commercial';
import City from './City';
import Search from './Search';
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

const useStyles = makeStyles({
  Head: {
    "& h2": {
      fontSize: '32px',
      fontWeight: 400,
      color: '#787676',
      textAlign: 'center',
      marginBottom: '15px',
      fontFamily: 'Source Sans Pro,sans-serif',
      paddingTop: '40px',
    }
  },
  row: {
    width: '100%',
    float: 'left'
  },
  col: {
    width: '100%',
    float: 'left',
    background: '#fdfdfd',
    padding: '30px 20px',
  },
  nb: {
    padding: "10px 15px",
    borderRadius: '5px',
    color: '#464646',
    backgroundColor: " rgba(252,178,68,.2)",
    fontFamily: 'Source Sans Pro,sans-serif',
    display: "flex",
    margin: 'auto',
    fontSize: '14px',
    width: 'fit-content',
    '& img': {
      width: ' 18px',
      height: '18px',
      marginRight: '4px',
    },
  },
  nb_1: {
    width: '370px',
    backgroundColor: '#fcfcfc',
    margin: '30px auto 0',
    border: 'solid #efefef',
    borderWidth: '1px 1px 0',
    borderRadius: '4px 4px 0 0',
    "& Button": {
      width: '33.33%',
      borderRight: '1px solid #efefef',
      borderTopLeftRadius: ' 4px',
      cursor: 'pointer',
    }
  },
  Search: {
    display: 'flex',
    alignItems: 'center',
    width: '850px',
    margin: '0 auto',
  },
  no_1: {
    display: 'flex',
    alignItems: 'center',
    width: '850px',
    margin: '0 auto',
    "& a": {
      display: 'flex',
      justifyContent: ' space-between',
      backgroundColor: '#f8f8f8',
      padding: '10px',
      borderRadius: '2px',
      border: '0.5px solid #ddd',
      borderTop: 'none',
      minHeight: '50px',
      textDecoration: 'none',
      width: '100%',

      "& div": {
        display: 'flex',
        alignItems: 'center',
        "& svg": {
          fontSize: '15px',
          verticalAlign: 'middle',
          marginRight: '10px',
          color: '#464646',

        },
        "& p": {
          textTransform: 'capitalize',
          color: '#464646',
          fontSize: '14px',
        }
      }
    }
  },
  ad: {
    width: '100%',
    marginTop: '40px',
    float: 'left',
    "& 	.MuiDivider-light": {
      background: 'red'
    }
  },
  Owners: {
    background: '#007a6f !important',
    border: ' none !important',
    color: '#fff !important'
  },
  divider: {
    width: '100%',
    marginBottom:'10px',
    "& .MuiDivider-root": {
      justifyContent: 'center',
      "&::before, &::after": {
        width: '60px'
      }
    }
  }
})

export default function Banner() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <Box className={classes.row}>
      <Box className={classes.col}>
        <Box className={classes.Head}>
          <Typography variant="h" component="h2"> World's Largest NoBrokerage Property Site</Typography>
        </Box>
        <Box className={classes.nb}>
          <img src='./img/hs_banner.png' alt='sd' />
          <span><strong>Painting</strong> and<strong> Cleaning</strong> | Upto <strong>50%</strong>Off</span>
        </Box>
        <Box className={classes.nb_1}>
          <Tabs

            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
          >
            <Tab label={<Buy />} />
            <Tab label={<Rent />} />
            <Tab label={<Commercial />} />
          </Tabs>
        </Box>
        <Box className={classes.Search}>
          <City />
          <Search />
        </Box>
        <Box className={classes.no_1}>
          <Link>
            <Box><MapsHomeWorkIcon /> <Typography>1 BHK in Chanda Nagar, Chennai</Typography></Box>
            <Box><Typography>Continue Last Search <ArrowForwardIosIcon /></Typography></Box>
          </Link>
        </Box>
      </Box>
      <Box className={classes.ad}>
        <Box className={classes.divider}>
          <Divider><Typography>Are you a Property Owner?</Typography></Divider>
        </Box>
        <Button variant="contained" className={classes.Owners}>
          Post Free Property Ad
        </Button>
      </Box>

    </Box>
  );
}