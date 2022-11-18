import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  row: {
    width: '25%',
    float: 'left',
    clear: 'both',
  },
  form:{
    width:'100%',
    " & div":{
      borderRadius: '0',
      "& .MuiSelect-select":{
        padding:'14px'
      }
    }
  }
})

export default function SelectAutoWidth() {
  const [City, setCity] = React.useState([ ]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.row}>
      <FormControl className={classes.form}>
        <Select
          value={City}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Bangalore</MenuItem>
          <MenuItem value={21}>Mumbai</MenuItem>
          <MenuItem value={22}>Pune</MenuItem>
          <MenuItem value={23}>Hyderabad</MenuItem>
          <MenuItem value={24}>Noida</MenuItem>
          <MenuItem value={25}>Faridabad</MenuItem>
          <MenuItem value={26}>Chennai</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
