import React, {Suspense, lazy} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//local files
import Home from "./screens/Home";
const ResumePage = lazy(() => import('./screens/ResumePage.js'));
const GatoNoches = lazy(() => import('./screens/GatoNoches'));
const InspirePage = lazy(() => import('./screens/InspirePage'));
const WorstWebsite = lazy(() => import('./screens/WorstWebsite'));


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

  const classes = useStyles();
  return (
    <Router id="router">
        <div className={classes.root}>
          <ScrollToTop>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Suspense fallback={<div/>}>
                <Route exact path="/resume">
                  <ResumePage/>
                </Route>
                <Route exact path="/gato-noches">
                  <GatoNoches/>
                </Route>
                <Route exact path="/inspire">
                  <InspirePage/>
                </Route>
                <Route exact path="/worst-website">
                  <WorstWebsite/>
                </Route>
              </Suspense>
              <Route>
                <Redirect to="/"/>
              </Route>
            </Switch>
          </ScrollToTop>
        </div>
    </Router>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
