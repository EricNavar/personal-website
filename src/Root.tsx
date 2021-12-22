/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//local files
import { Home } from './screens/Home';
//import { ContactPage } from './screens/ContactPage';
import { DesktopNavbar } from './components/DesktopNavbar';
import { MobileNavbar } from './components/MobileNavbar';
import FullStory from 'react-fullstory';
const ResumePage = lazy(() => import('./screens/ResumePage').then((module) => ({
  default: module.ResumePage,
})));
const InspirePage = lazy(() => import('./screens/InspirePage').then((module) => ({
  default: module.InspirePage,
})));
const WorstWebsite = lazy(() => import('./screens/WorstWebsite').then((module) => ({
  default: module.WorstWebsite,
})));
const CommonGround = lazy(() => import('./screens/CommonGround').then((module) => ({
  default: module.CommonGround,
})));

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
    grey: {
      '800': 'rgba(215,218,225,1)',
    },
    info: {
      main: 'rgba(66,179,245,1)',
      light: 'rgba(66,179,245,1)',
      dark: 'rgba(95,44,130,1)',
    }
  },
  typography: {
    fontFamily: 'Poppins, \'Lato\', sans-serif'
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
    grey: {
      '800': 'rgb(50, 70, 90)',
    },
    info: {
      main: '#537895',
      light: '#537895',
      dark: '#09203f',
    }
  },
  typography: {
    fontFamily: 'Poppins, \'Lato\', sans-serif'
  }
});

type ScrollToTopProps = {
  children: JSX.Element,
};

function ScrollToTop(props: ScrollToTopProps) {
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
}

function Root():JSX.Element {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <FullStory org={process.env.REACT_APP_ORG_ID!} />
      <Router>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <ScrollToTop>
            <>
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
                <Route path='/resume'>
                  <Suspense fallback={<div />}>
                    <ResumePage />
                  </Suspense>
                </Route>
                <Route path='/common-ground'>
                  <Suspense fallback={<div />}>
                    <CommonGround />
                  </Suspense>
                </Route>
                {/*
                  <Route path='/contact'>
                    <Suspense fallback={<div />}>
                      <ContactPage />
                    </Suspense>
                  </Route>
                */}
                <Route path='/inspire'>
                  <Suspense fallback={<div />}>
                    <InspirePage />
                  </Suspense>
                </Route>
                <Route path='/worst-website'>
                  <Suspense fallback={<div />}>
                    <WorstWebsite />
                  </Suspense>
                </Route>
                <Route path='*'>
                  <Redirect to='/' />
                </Route>
              </Switch>
            </>
          </ScrollToTop>
        </ThemeProvider>
      </Router>
    </>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

export { Root };
