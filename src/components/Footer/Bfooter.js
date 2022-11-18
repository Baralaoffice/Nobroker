import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography, Button, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles({
    row: {
        width: '100%',
        float: 'left',
        clear: 'both',
        "& p": {
            float: 'left',
            padding: ' 20px 0',
            width: '100%',
            color: '#464646',
            fontSize: '14px',
            fontFamily: 'Source Sans Pro,sans-serif',
        }
    },
    col: {
        width: '100%',
        float: 'left',
        background: '#ededed',
        padding: '30px 0',
        "& div": {
            marginTop: '0'
        },
        "& p": {
            fontSize: '18px',
            fontWeight: "600",
            color: '#464646',
            fontFamily: 'Source Sans Pro,sans-serif',
        },
        "& span": {
            fontSize: '14px',
            color: '#464646',
            fontFamily: 'Source Sans Pro,sans-serif',
            display: 'block'
        },
        "& Button": {
            padding: ' 3px 20px',
            borderRadius: '4px',
            backgroundColor: '#464646',
            textDecoration: 'none',
            color: '#fff',
            fontWeight: '600',
            display: 'inline-block',
            marginTop: '15px',
            fontFamily: 'Source Sans Pro,sans-serif',
            textTransform: 'capitalize',
        }
    },
    border: {
        borderRight: '1px solid #c5c5c5'
    },
    menu: {
        width: '100%',
        float: 'left',
        clear: 'both'
    },
    menu_item: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '42px',
        width: '62%',
        margin: 'auto',
        borderBottom: '1px solid #e5e7eb',
        padding: '29px 0 50px 0',
        "& a": {
            fontSize: '18px',
            color: '#464646',
            textDecoration: 'none',
            fontFamily: 'Source Sans Pro,sans-serif',
        }
    },
    icon: {
        marginTop: '20px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        float: 'left',
        "& a": {
            backgroundColor: ' #e8e8e8',
            borderRadius: '100%',
            width: '40px',
            margin: '0 15px',
            color: 'black',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
})
const data = ['About Us', "Careers", 'Terms & Conditions', "Privacy Policy", "Testimonials", "Sitemap", "FAQs"]
const Bfooter = () => {
    const classes = useStyles();
    return (
        <Box className={classes.row}>
            <Box className={classes.col}>
                <Grid container spacing={2}>
                    <Grid item xs={6} className={classes.border}>
                        <Typography>Find Property</Typography>
                        <span>Select from thousands of options, without brokerage.</span>
                        <Button variant="contained">Find Now</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>List Your Property</Typography>
                        <span>For Free. Without any brokerage.</span>
                        <Button variant="contained">Free Posting </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.menu}>
                <Box className={classes.menu_item}>
                    {
                        data.map((item, id) => (
                            <Link
                                key={id}
                                href="#"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                {item}
                            </Link>
                        ))
                    }
                </Box>
            </Box>
            <Box className={classes.icon}>
                <Link href='#'><FacebookIcon /></Link>
                <Link href='#'><TwitterIcon /></Link>
                <Link href='#'><InstagramIcon /></Link>
                <Link href='#'><LinkedInIcon /></Link>
                <Link href='#'><YouTubeIcon /></Link>
            </Box>
            <Typography>© 2013-22 NoBroker Technologies Solution Pvt. Ltd.</Typography>
        </Box>
    )
}

export default Bfooter
