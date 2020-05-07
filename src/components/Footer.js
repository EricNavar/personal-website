import React from 'react';
import { makeStyles, Grid, IconButton } from '@material-ui/core'
import GitlabIcon from './../assets/svg//Gitlab';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#19202D',
        padding: 10,
        '& svg': {
            padding: '2%',
            color: 'white',
            '&:hover': {
                opacity: .8
            }
        }
    }
});

export default function Footer() {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.footer}
            component='footer'
        >
            <Grid item>
                <IconButton href="https://github.com/EricNavar">
                    <GitHubIcon/>
                </IconButton>
                <IconButton href="https://gitlab.com/EricNavar">
                    <GitlabIcon/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/ericnavar/">
                    <LinkedInIcon/>
                </IconButton>
                <IconButton href="mailto:ericnavar@ufl.edu">
                    <EmailIcon/>
                </IconButton>
            </Grid>
        </Grid>
    );
}
