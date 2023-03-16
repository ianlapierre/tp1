import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Acceuil from "./acceuil/acceuil";
import MainNavigation from "./Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Acceuil />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
