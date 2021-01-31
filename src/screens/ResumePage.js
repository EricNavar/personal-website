import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
//local files
import Footer from '../components/resumePage/Footer';
import Header from '../components/resumePage/Header';
import SkillList from '../components/resumePage/SkillList';
import Education from '../components/resumePage/Education';
import Experience from '../components/resumePage/Experience';
import InvolvementList from '../components/resumePage/InvolvementList';
import PersonalStatement from '../components/resumePage/PersonalStatement';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#151965',
    },
    secondary: {
      main: '#46b5d1',
    },
    itemContainer: 'rgba(215,218,225,1)',
    backgroundColor1: "rgba(66,179,245,1)",
    backgroundColor2: "rgba(95,44,130,1)",
    backgroundGradient: "linear-gradient(rgba(66,179,245,1) 0%, rgba(95,44,130,1) 100%)"
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#46b5d1',
    },
    secondary: {
      main: '#151965',
    },
    itemContainer: 'rgb(50, 70, 90)',
    backgroundColor1: "#537895",
    backgroundColor2: "#09203f",
    backgroundGradient: "linear-gradient(#537895 0%, #09203f 100%)"
  },
});

//This component is to pass in the theme to the ResumePage
export default function ResumePageWrapper() {
  const [darkMode,setDarkMode]=React.useState(false);
  React.useEffect(() => {
    document.title = 'Resume | Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  },[]);

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ResumePage darkMode={darkMode} handleDarkModeClick={handleDarkModeClick}/>
    </ThemeProvider>
  )
}

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.background.default
  },
  gridItem: {
    justifyContent: 'center',
    display: 'flex'
  },
  sectionContainer: {
    [theme.breakpoints.down('xs')]: {
      marginRight: 40,
      marginLeft: 40
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 80,
      marginLeft: 80
    },
  }
}));

function ResumePage({darkMode,handleDarkModeClick}) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Header darkMode={darkMode} handleDarkModeClick={handleDarkModeClick}/>
      <div className={classes.sectionContainer}>
        <PersonalStatement/>
        <Grid container spacing={4} justify='center'>
          <Grid id='skill-list-container' item sm={12} md={6} className={classes.gridItem}>
            <SkillList/>
          </Grid>
          <Grid id='education-container' item sm={12} md={6} className={classes.gridItem}>
            <Education/>
          </Grid>
        </Grid>
        <Experience/>
        <InvolvementList/>
        <div style={{height:40}}></div>
      </div>
      <Footer top={false}/>
    </div>
  );
}