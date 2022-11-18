import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  row: {
    width: '75%',
    float: 'left',
    clear: 'both',
  },
  Search: {

  },
  Search1: {

  },
  Search2: {

  }

})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  margin: 0,
  width: '100%',
  float: 'left',
  display: 'flex'

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  width: '25%',
  background: '#e3324a',
  display:'flex',
  alignItems: 'end',
  justifyContent:'center',
  height: '50px',
  padding: '12px 20px',
  fontWeight: '400',
  border: '1px solid #e3324a',
color:'#fff',
cursor: 'pointer',
  "& p":{
    fontSize: '18px',
    marginLeft:'5px'
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '75%',
  color: 'inherit',
  '& .MuiInputBase-input': {
    width: '100%',
    border: '1px solid #e2e2e2',
    height: '49px',
    fontSize: '16px',
    fontWeight: '400',
    padding:'0 15px'
  },
}));



const Searchbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.row}>
      <Search className={classes.Search1}>
        <StyledInputBase
          className={classes.Search2}
          placeholder="Search upto 3 localities or landmarks"
          inputProps={{ 'aria-label': 'search' }}
        />
        <SearchIconWrapper className={classes.Search3}>
          <SearchIcon />
          <Typography>
            search
          </Typography>
        </SearchIconWrapper>
      </Search>

    </div>
  )
}

export default Searchbar