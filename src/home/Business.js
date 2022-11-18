import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    row: {
        width: '100%',
        float: 'left',
        padding: '40px 0',
        backgroundColor: '#f4f4f4',
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
        width: '25%',
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
    col: {
        display: 'flex',
        marginTop: '40px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    col_con: {
        marginLeft: '120px',
        color: '#464646',
        fontSize: '14px',
        fontFamily: 'Source Sans Pro,sans-serif',
        textAlign: 'justify',
        "& p": {
            color: ' #787676',
            fontWeight: '400',
        },
        "& Button": {
            display: 'block',
            marginTop: '30px',
            textTecoration: 'none',
            padding: '12px 24px',
            backgroundColor: '#fd3752',
            color: '#fff',
            fontWeight: '400',
            fontFamily: 'Source Sans Pro,sans-serif',
            textTransform: 'capitalize',
        } 
    }
})

const Business = () => {
    const classes = useStyles();
    return (
        <Box className={classes.row}>
            <Box className={classes.divider}>
                <Box className={`${classes.divibox} ${classes.circle}`} /><Typography>NoBroker Business Assist Plan For Builders</Typography><Box className={`${classes.divibox} ${classes.circle1}`} />
            </Box>
            <Box className={classes.col}>
                <Box>
                    <img src="./img/download (8).png" alt="as" />
                </Box>
                <Box className={classes.col_con}>
                    <Typography>Get in touch with us to Sell or Rent Your Projects</Typography>
                    <Button>Enquire Now</Button>
                    <span>For Builder Enquiries: +91 91080 50400</span>
                </Box>
            </Box>
        </Box>
    )
}

export default Business
