import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Portfolio from "./screens/Portfolio.js";
import EmbeddedResume from "./screens/EmbeddedResume";
import GatoNochesFeedback from "./screens/GatoNochesFeedback";
import GatoNoches from "./screens/GatoNoches";
import Home from "./screens/Home";

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
      itemContainer: 'linear-gradient(90deg, rgba(241,245,248,1) 0%, rgba(228,232,235,1) 85%, rgba(215,218,225,1) 100%)'
    },
  });
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#151965',
      },
      secondary: {
        main: '#46b5d1',
      },
      itemContainer: 'rgba(0, 0, 0, 0) linear-gradient(to right, rgb(72, 85, 99), rgb(41, 50, 60)) repeat scroll 0% 0%'
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
              <Route exact path="/portfolio">
                <Portfolio darkMode={darkMode} handleDarkModeClick={handleDarkModeClick}/>
              </Route>
              <Route exact path="/resume">
                <EmbeddedResume/>
              </Route>
              <Route exact path="/gatonoches">
                <GatoNoches/>
              </Route>
              <Route exact path="/gatonoches/feedback">
                <GatoNochesFeedback/>
              </Route>
              <Route>
                <Home/>
              </Route>
            </Switch>
          </ScrollToTop>
        </div>
      </ThemeProvider>
    </Router>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
