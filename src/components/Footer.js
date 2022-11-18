import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography, Link } from '@mui/material'
import Bfooter from './Footer/Bfooter';

const useStyles = makeStyles({
  row: {
    width: '100%',
    float: 'left',
    clear: 'both',
  },
  col: {
    background: 'hsl(0deg 0% 97%)',
    borderTop: '1px solid hsl(0deg 0% 58%)',
    "& div": {
      justifyContent: 'space-between',
      "& Button": {
        padding: '15px 10px',
        textAlign: 'center',
        width: '16.66%',
        cursor: 'pointer',
        fontWeight: '600',
        color: '#464646',
      }
    }
  },
  col_list:{
    width:'100%',
    float:'left',
    textAlign: 'justify',
    fontFamily: 'Source Sans Pro,sans-serif',
    padding:'10px 40px',
    "& a":{
      textDecoration: "none",
      color: '#464646',
    fontFamily: 'Source Sans Pro,sans-serif',

    }
  },
  col_2:{
    "& a":{
      fontSize: '16px',
    fontFamily: 'Source Sans Pro,sans-serif',

    },
    "& h6":{
    marginBottom: '10px !important',
    display: 'inline-block',
    fontWeight: '600',
    }
  },
  col_3:{
    "& a":{
      fontSize: '12px',
    fontFamily: 'Source Sans Pro,sans-serif',
    display:'block'

    },
    "& p":{
    color: '#444',
    marginBottom: '0 10px 5px 0 !important',
    display: 'inline-block',
    }
  }
})
const data = [
  {
    "hand":'Flats for Sale in Bangalore',
    "list1":' PG in Marathahalli',
    "list2":'PG in HSR Layout',
    "list3":'PG in Whitefield',
    "list4":'PG in Indira Nagar',
    "list5":'PG in Bellandur',
    "list6":'PG in Chandra Layout',
    "list7":'PG in J. P. Nagar',
    "list8":'PG in BTM Layout',
    "list9":'PG in Jayanagar',
    "list10":'Flats for Sale in Bangalore Below 10 Lakhs',
    "list11":'Flats for Sale in Bangalore Below 15 Lakhs',
    "list12":'Flats for Sale in Bangalore Below 20 Lakhs',
    "list13":'Flats for Sale in Bangalore Below 25 Lakhs',
    "list14":'Flats for Sale in Bangalore Below 40 Lakhs',
    "list15":'Flats for Sale in Bangalore Below 50 Lakhs',
  },
  {
    "hand":' Flats for Sale in Mumbai',
    "list1":' PG in Marathahalli',
    "list2":'PG in HSR Layout',
    "list3":'PG in Whitefield',
    "list4":'PG in Indira Nagar',
    "list5":'PG in Bellandur',
    "list6":'PG in Chandra Layout',
    "list7":'PG in J. P. Nagar',
    "list8":'PG in BTM Layout',
    "list9":'PG in Jayanagar',
    "list10":'Flats for Sale in Bangalore Below 10 Lakhs',
    "list11":'Flats for Sale in Bangalore Below 15 Lakhs',
    "list12":'Flats for Sale in Bangalore Below 20 Lakhs',
    "list13":'Flats for Sale in Bangalore Below 25 Lakhs',
    "list14":'Flats for Sale in Bangalore Below 40 Lakhs',
    "list15":'Flats for Sale in Bangalore Below 50 Lakhs',
  },
  {
    "hand":'Flats for Sale in Chennai',
    "list1":' PG in Marathahalli',
    "list2":'PG in HSR Layout',
    "list3":'PG in Whitefield',
    "list4":'PG in Indira Nagar',
    "list5":'PG in Bellandur',
    "list6":'PG in Chandra Layout',
    "list7":'PG in J. P. Nagar',
    "list8":'PG in BTM Layout',
    "list9":'PG in Jayanagar',
    "list10":'Flats for Sale in Bangalore Below 10 Lakhs',
    "list11":'Flats for Sale in Bangalore Below 15 Lakhs',
    "list12":'Flats for Sale in Bangalore Below 20 Lakhs',
    "list13":'Flats for Sale in Bangalore Below 25 Lakhs',
    "list14":'Flats for Sale in Bangalore Below 40 Lakhs',
    "list15":'Flats for Sale in Bangalore Below 50 Lakhs',
  },
  {
    "hand":'Flats for Sale in Pune',
    "list1":' PG in Marathahalli',
    "list2":'PG in HSR Layout',
    "list3":'PG in Whitefield',
    "list4":'PG in Indira Nagar',
    "list5":'PG in Bellandur',
    "list6":'PG in Chandra Layout',
    "list7":'PG in J. P. Nagar',
    "list8":'PG in BTM Layout',
    "list9":'PG in Jayanagar',
    "list10":'Flats for Sale in Bangalore Below 10 Lakhs',
    "list11":'Flats for Sale in Bangalore Below 15 Lakhs',
    "list12":'Flats for Sale in Bangalore Below 20 Lakhs',
    "list13":'Flats for Sale in Bangalore Below 25 Lakhs',
    "list14":'Flats for Sale in Bangalore Below 40 Lakhs',
    "list15":'Flats for Sale in Bangalore Below 50 Lakhs',
  },
  {
    "hand":'Flats in Gurgaon for Sale',
    "list1":' PG in Marathahalli',
    "list2":'PG in HSR Layout',
    "list3":'PG in Whitefield',
    "list4":'PG in Indira Nagar',
    "list5":'PG in Bellandur',
    "list6":'PG in Chandra Layout',
    "list7":'PG in J. P. Nagar',
    "list8":'PG in BTM Layout',
    "list9":'PG in Jayanagar',
    "list10":'Flats for Sale in Bangalore Below 10 Lakhs',
    "list11":'Flats for Sale in Bangalore Below 15 Lakhs',
    "list12":'Flats for Sale in Bangalore Below 20 Lakhs',
    "list13":'Flats for Sale in Bangalore Below 25 Lakhs',
    "list14":'Flats for Sale in Bangalore Below 40 Lakhs',
    "list15":'Flats for Sale in Bangalore Below 50 Lakhs',
  }, 
]
export default function Footer() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.row}>
      <Box className={classes.col}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Flats for Sale" />
          <Tab label="Flats for Rent" />
          <Tab label="PG / Hostels" />
          <Tab label="Flatmates" />
          <Tab label="Miscellaneous" />
          <Tab label="Commercial" />
          <Tab label="New Projects" />
        </Tabs>
      </Box>
      <Box className={classes.col_list}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4, }}>
          {
            data.map((item, i) => (
              <Grid item xs={2.4}>
                <Box className={classes.col_2}>
                  <Typography variant="h6"><Link>{item.hand}</Link></Typography>
                </Box>
                <Box className={classes.col_3}>
                  <Typography><Link>{item.list1}</Link></Typography>
                  <Typography><Link>{item.list2}</Link></Typography>
                  <Typography><Link>{item.list3}</Link></Typography>
                  <Typography><Link>{item.list4}</Link></Typography>
                  <Typography><Link>{item.list5}</Link></Typography>
                  <Typography><Link>{item.list6}</Link></Typography>
                  <Typography><Link>{item.list7}</Link></Typography>
                  <Typography><Link>{item.list8}</Link></Typography>
                  <Typography><Link>{item.list9}</Link></Typography>
                  <Typography><Link>{item.list10}</Link></Typography>
                  <Typography><Link>{item.list11}</Link></Typography>
                  <Typography><Link>{item.list12}</Link></Typography>
                  <Typography><Link>{item.list13}</Link></Typography>
                  <Typography><Link>{item.list14}</Link></Typography>
                  <Typography><Link>{item.list15}</Link></Typography>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>
      <Bfooter/>
    </Box>
  );
}
