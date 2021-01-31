import React, {Suspense, lazy} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Home from "./screens/Home";
const ResumePage = lazy(() => import('./screens/ResumePage.js'));
const GatoNochesFeedback = lazy(() => import('./screens/GatoNochesFeedback'));
const GatoNoches = lazy(() => import('./screens/GatoNoches'));
const InspirePage = lazy(() => import('./screens/InspirePage'));


//https://reacttraining.com/react-router/web/guides/quick-start

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  }
});

function ScrollToTop(props) {
  const history = useHistory();
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    });
    return unlisten;
  }, [history]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default function Root() {
  const [darkMode,setDarkMode]=React.useState(false);
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
  const classes = useStyles();
  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  }
  return (
    <Router id="router">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <div className={classes.root}>
          <ScrollToTop>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Suspense fallback={<div/>}>
                <Route exact path="/portfolio">
                  <ResumePage darkMode={darkMode} handleDarkModeClick={handleDarkModeClick}/>
                </Route>
                <Route exact path="/resume">
                  <GatoNoches/>
                </Route>
                <Route exact path="/inspire">
                  <InspirePage/>
                </Route>
                <Route exact path="/gatonoches/feedback">
                  <GatoNochesFeedback/>
                </Route>
              </Suspense>
              <Route>
                <Redirect to="/"/>
              </Route>
            </Switch>
          </ScrollToTop>
        </div>
      </ThemeProvider>
    </Router>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
