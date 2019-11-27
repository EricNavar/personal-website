import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WebsiteLinks from './WebsiteLinks';
import SkillList from './SkillList';
import ProfilePic from './ProfilePic'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
}));

function FrontPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ProfilePic/>
            <SkillList/>
            <WebsiteLinks/>
        </div>
    );
}

export default FrontPage;