import React from 'react'
import { Box, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';



const data = [
    {
        "img": './img/download.png',
        "name": "Packers & Movers"
    },
    {
        "img": './img/download (1).png',
        "name": "Pay rent"

    },
    {
        "img": './img/download (2).png',
        "name": "Rental Agreement"

    },
    {
        "img": './img/ClicknEarn.svg',
        "name": "Click & Earn"

    },
    {
        "img": './img/download (3).png',
        "name": "Painting & Cleaning"
    },
    {
        "img": './img/download (1).png',
        "name": "NoBroker For NRIs"
    },
]
const dataitem = [
    {
        "img": './img/download (4).png',
        "name": "Avoid Brokers",
        "pra": "We directly connect you to verified owners to save brokerage"
    },
    {
        "img": './img/download (5).png',
        "name": "Free Listing",
        "pra": "Easy listing process. Also using WhatsApp"
    },
    {
        "img": './img/download (6).png',
        "name": "Shortlist without Visit",
        "pra": "Extensive Information makes it easy"
    },
    {
        "img": './img/download (7).png',
        "name": "Rental Agreement",
        "pra": "Assistance in creating Rental agreement & Paper work"
    }

]
const useStyles = makeStyles({
    row: {
        width: '100%',
        float: 'left',
        padding: '35px 0',
    },
    prop: {
        textDecoration: 'none !important',
        display: 'block',
        padding: ' 0 50px',
        "& img": {
            display: 'block',
            margin: 'auto',
            height: '60px',
            width: '60px',
        },
        "& p": {
            marginTop: '10px',
            color: '#464646',
            
        },
        "& span": {
            marginTop: '5px',
            color: '#464646',
            display:'block'
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
        width: '35%',
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
    }
})
const Property = () => {
    const classes = useStyles();
    return (
        <Box className={classes.row}>
            <Grid container spacing={2}>
                {
                    data.map((item, id) => (
                        <Grid key={id} item xs={2}>
                            <Link href="" className={classes.prop}>
                                <img src={item.img} alt="ss" />
                                <Typography>{item.name}</Typography>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
            <Box className={classes.divider}>
                <Box className={`${classes.divibox} ${classes.circle}`} /><Typography>Why Use NoBroker</Typography><Box className={`${classes.divibox} ${classes.circle1}`} />
            </Box>
            <Grid container spacing={2}>
                {
                    dataitem.map((item, id) => (
                        <Grid key={id} item xs={3}>
                            <Link href="" className={classes.prop}>
                                <img src={item.img} alt="ss" />
                                <Typography >{item.name}</Typography>
                                <span >{item.pra}</span>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Property
