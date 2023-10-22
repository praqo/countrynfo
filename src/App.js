import { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./shared/Header";
import { Home } from "./Home";
import { CountryPage } from "./CountryPage";
import { SearchResults } from "./SearchResults";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Fragment>
            <Header />
            <Route path="/search">
              <SearchResults />
            </Route>
            <Route path="/country">
              <CountryPage />
            </Route>
          </Fragment>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
