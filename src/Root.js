import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//local files
import Home from "./screens/Home";
import ContactPage from "./screens/ContactPage";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
const ResumePage = lazy(() => import('./screens/ResumePage.js'));
const GatoNoches = lazy(() => import('./screens/GatoNoches'));
const InspirePage = lazy(() => import('./screens/InspirePage'));
const WorstWebsite = lazy(() => import('./screens/WorstWebsite'));

//https://reacttraining.com/react-router/web/guides/quick-start

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#09203f',
    },
    secondary: {
      main: '#4fcff0',
    },
    itemContainer: 'rgba(215,218,225,1)',
    backgroundColor1: "rgba(66,179,245,1)",
    backgroundColor2: "rgba(95,44,130,1)",
    backgroundGradient: "linear-gradient(rgba(66,179,245,1) 0%, rgba(95,44,130,1) 100%)",
  },
  typography: {
    fontFamily: "Poppins, 'Lato', sans-serif"
  }
});
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#4fcff0',
    },
    secondary: {
      main: '#09203f',
    },
    itemContainer: 'rgb(50, 70, 90)',
    backgroundColor1: "#537895",
    backgroundColor2: "#09203f",
    backgroundGradient: "linear-gradient(#537895 0%, #09203f 100%)"
  },
  typography: {
    fontFamily: "Poppins, 'Lato', sans-serif"
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
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Router id="router">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <ScrollToTop>
          <Hidden xsDown>
            <DesktopNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </Hidden>
          <Hidden smUp>
            <MobileNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </Hidden>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/resume">
              <Suspense fallback={<div />}>
                <ResumePage/>
              </Suspense>
            </Route>
            <Route path="/contact">
              <Suspense fallback={<div />}>
                <ContactPage/>
              </Suspense>
            </Route>
            <Route path="/gato-noches">
              <Suspense fallback={<div />}>
                <GatoNoches />
              </Suspense>
            </Route>
            <Route path="/inspire">
              <Suspense fallback={<div />}>
                <InspirePage />
              </Suspense>
            </Route>
            <Route path="/worst-website">
              <Suspense fallback={<div />}>
                <WorstWebsite />
              </Suspense>
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </ScrollToTop>
      </ThemeProvider>
    </Router>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
