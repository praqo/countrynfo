import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./shared/Header";
import { Home } from "./Home";
import { CountryPage } from "./CountryPage";
import { SearchResults } from "./SearchResults";
import Error from "./shared/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/country">
            <CountryPage />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
