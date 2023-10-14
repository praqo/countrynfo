import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/country">
            <CountryPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
