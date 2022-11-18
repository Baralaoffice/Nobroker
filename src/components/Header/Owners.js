import { Box, Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Owners:{
        background:'#007a6f !important',
        border:' none !important',
        color:'#fff !important'
    }
})

const Owners = () => {
    const classes = useStyles()
    return (
        <Box>
            <Button variant="contained" className={classes.Owners}>
                For Property owners
            </Button>
        </Box>
    )
}

export default Owners
