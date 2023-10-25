import Reacat from "react";
import Search from "./Search";

function Header() {
  return (
    <header className="main-header">
      <a href="/" className="header-logo" title="home"></a>
      <div className="header-search">
        <Search placeholder="Search For A Country" />
      </div>
    </header>
  );
}

export default Header;
