import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import WebsiteLinks from './WebsiteLinks';
import SkillList from './SkillList';

declare var require: any

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
}));

export default function FrontPage(props : any) {
    const classes = useStyles();
    return (
        <div>
            <SkillList/>
            <WebsiteLinks/>
        </div>
    );
}