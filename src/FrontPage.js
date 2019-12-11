import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WebsiteLinks from './WebsiteLinks';
import SkillList from './SkillList';
import ProfilePic from './ProfilePic';
import PersonalStatement from './PersonalStatement';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      backgroundColor: '#ea80fc',
    },
}));

function FrontPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ProfilePic/>
            <PersonalStatement/>
            <SkillList/>
            <WebsiteLinks/>
        </div>
    );
}

export default FrontPage;