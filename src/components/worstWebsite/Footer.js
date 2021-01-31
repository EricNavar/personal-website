import React from 'react';
import { makeStyles, ButtonBase, Grid, IconButton /*,Typography*/ } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme =>({
    footer: {
        backgroundColor: '#19202D',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: '8%',
        paddingRight: '8%',
    },
    logoButton: {
        height: 48,
        textAlign: 'left',
        color: "white",
        //svg logo
        '& use': {
            fill:'white'
        },
        '&:hover': {
            opacity: .8
        },
        '&:active': {
            opacity: .8
        }
    },
    social: {
        '& svg': {
            padding: '2%',
            color: 'white',
            '&:hover': {
                opacity: .8
            },
            '&:active': {
                opacity: .8
            }
        },
        textAlign: 'right'
    },
    buffer: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    contact: {
        [theme.breakpoints.up('md')]: {
            justifyContent: 'right',
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            marginTop: 18
        },
        display: 'flex',
        '& div:not(:first-child)': {
            marginTop:8
        }
    },
    contactItem: {
        display: 'flex',
        alignItems:'center',
        '& a': {
            color: 'white'
        }
    },
    contactLink: {
        height: 'min-content',
        marginLeft: 8,
        textDecoration: 'none'
    },
    address: {
        justifyContent: 'center',
        display:'flex'
    }
}));

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export default function Footer() {
    const classes = useStyles();
    const history = useHistory();

    const redirect = path => {
        console.log(history);
    };

    const LogoButton = () => {
        return (
            <Grid item xs={4} sm={6} md={4} className={classes.logoButton}>
                <ButtonBase
                    className={classes.logoButton}
                    onClick={false ? scrollToTop : () => redirect("/")}
                    TouchRippleProps={{
                        style:{color:'white'}
                    }}
                >
                    help
                </ButtonBase>
            </Grid>
        );
    }

    const Contact = () => {
        return (
            <Grid item xs={12} sm={6} md={4} className={classes.contact}>
                <div style={{width:'min-content'}}>

                    <div className={classes.contactItem}>
                        <IconButton href='https://www.google.com' size='small'>
                        </IconButton>
                        <a href='https://www.google.com' className={classes.contactLink}>
                            google.com
                        </a>
                    </div>
                </div>
            </Grid>
        );
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
            className={classes.footer}
            component='footer'
        >
            <LogoButton/>
            <Grid item xs={8} sm={6} md={4} className={classes.address}>
                <div style={{width:'max-content'}}>
                    {/*
                        <Typography style={{color:'white'}}>
                            123 Sample Address<br/>
                            Gainesville, FL, 322614
                        </Typography>
                    */}
                </div>
            </Grid>
            <Grid item sm={6} className={classes.buffer}></Grid>
            <Contact/>
        </Grid>
    );
}