import React from 'react';
import Section from './Section';
import JavaIcon from './../assets/images/java.png';
import ReactIcon from './../assets/images/React.png';
import CppIcon from './../assets/images/Cpp.png';
import GitIcon from './../assets/images/Git.png';
import MatlabIcon from './../assets/images/matlab.png';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import LensIcon from '@material-ui/icons/Lens';

//icons must be PNGs
const useStyles = makeStyles(theme => ({
  table: {
    '& td': {
      paddingRight: 4,
      paddingLeft: 4,
      paddingTop:8,
      paddingBottom: 8
    }
  },
  img: {
    width:32,
    borderRadius: 8
  },
  rating: {
    color: theme.palette.secondary.main
  }
}));

function SkillItem({skill, icon, value}) {
  const classes = useStyles();
  return (
    <tr>
      <td>
        <img alt="" className={classes.img} src={icon}/>
      </td>
      <td>
        <Typography variant='body1' color='textPrimary'>
          {skill}
        </Typography>
      </td>
      <td>
        <Rating
          name="read-only"
          value={value}
          readOnly
          icon={<LensIcon/>}
          className={classes.rating}
        />
      </td>
    </tr>
  );
}

export default function SkillList() {
  const classes = useStyles();
  return(
    <Section title = "Skills">
      <table className={classes.table}>
        <tbody>
          <SkillItem skill="C++" value={4} icon={CppIcon}/>
          <SkillItem skill="Java" value={3} icon={JavaIcon}/>
          <SkillItem skill="React" value={3} icon={ReactIcon}/>
          <SkillItem skill="Git" value={3} icon={GitIcon}/>
          <SkillItem skill="MATLAB" value={2} icon={MatlabIcon}/>
        </tbody>
      </table>
    </Section>
  );
}