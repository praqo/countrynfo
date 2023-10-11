import "./App.css";
import { Home } from "./Home";
import { CountryPage } from "./CountryPage";
import { SearchResults } from "./SearchResults";

function App() {
  return (
    <div className="App">
      <Home />
      <CountryPage />
      <SearchResults />
    </div>
  );
}

export default App;
