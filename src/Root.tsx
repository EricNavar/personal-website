/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { lazy, Suspense } from 'react';

import { Hidden } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import FullStory from 'react-fullstory';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from 'react-router-dom';

import { DesktopHeader } from './components/header/DesktopHeader';
import { MobileHeader } from './components/header/MobileHeader';
import { ErrorPage } from './screens/ErrorPage';
import { Home } from './screens/Home';
import { PortfolioForNickBruno } from './screens/PortfolioForNickBruno';
import { ScreenBackground, ScreenMain } from './styling/commonStyles';
import { themes } from './styling/themes';
const ResumePage = lazy(() =>
  import('./screens/ResumePage').then((module) => ({
    default: module.ResumePage,
  }))
);
const BlogPage = lazy(() =>
  import('./screens/BlogPage').then((module) => ({
    default: module.BlogPage,
  }))
);
const ContactPage = lazy(() =>
  import('./screens/ContactPage').then((module) => ({
    default: module.ContactPage,
  }))
);

type ScrollToTopProps = {
  children: JSX.Element;
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

function Root(): JSX.Element {
  const [theme, setTheme] = React.useState('Light');

  return (
    <>
      <FullStory org={process.env.REACT_APP_ORG_ID!} />
      <Router>
        <ScrollToTop>
          <ThemeProvider theme={themes[theme]}>
            <Hidden only={'xs'}>
              <DesktopHeader theme={theme} setTheme={setTheme} />
            </Hidden>
            <ScreenMain>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/resume">
                  <Suspense fallback={<div />}>
                    <ResumePage />
                  </Suspense>
                </Route>
                <Route path="/blog">
                  <Suspense fallback={<div />}>
                    <BlogPage />
                  </Suspense>
                </Route>
                <Route path="/contact">
                  <Suspense fallback={<div />}>
                    <ContactPage />
                  </Suspense>
                </Route>
                <Route path="/🏒">
                  <PortfolioForNickBruno />
                </Route>
                <Route path="/error">
                  <ErrorPage />
                </Route>
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              </Switch>
              <ScreenBackground />
            </ScreenMain>
            <Hidden smUp>
              <MobileHeader />
            </Hidden>
          </ThemeProvider>
        </ScrollToTop>
      </Router>
    </>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

export { Root };
