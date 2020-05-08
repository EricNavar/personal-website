import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Home from "./screens/Home.js";
import Error404Page from "./screens/Error404Page";
import Resume from "./screens/Resume";

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
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/resume">
              <Resume/>
            </Route>
            <Route>
              <Error404Page/>
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
