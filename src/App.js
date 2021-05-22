import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./SearchResult/Search";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
