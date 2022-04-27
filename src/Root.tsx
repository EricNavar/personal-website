/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from 'react-router-dom';
import { Hidden } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
//local files
import { Home } from './screens/Home';
import { DesktopNavbar } from './components/DesktopNavbar';
import { MobileNavbar } from './components/MobileNavbar';
import FullStory from 'react-fullstory';
import { MinecraftPage } from './screens/MinecraftPage';
import { lightTheme, darkTheme, minecraftTheme, frostTheme } from './styling/commonStyles';
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

const themes: Record<string, Theme> = {
  Light: lightTheme,
  Dark: darkTheme,
  Minecraft: minecraftTheme,
  Frost: frostTheme
};

function Root(): JSX.Element {
  const [theme, setTheme] = React.useState('Light');
  return (
    <>
      <FullStory org={process.env.REACT_APP_ORG_ID!} />
      <Router>
        <ScrollToTop>
          <ThemeProvider theme={themes[theme]}>
            <Hidden xsDown>
              <DesktopNavbar theme={theme} setTheme={setTheme} />
            </Hidden>
            <Hidden smUp>
              <MobileNavbar theme={theme} setTheme={setTheme} />
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
              <Route path='/minecraft'>
                <MinecraftPage />
              </Route>
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </ThemeProvider>
        </ScrollToTop>
      </Router>
    </>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

export { Root };
