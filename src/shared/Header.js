import Search from "./Search";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <header className="main-header">
      <a href="/" className="header-logo" title="home">
        <span className="logo-placeholder">logo</span>
      </a>
      <div className="header-search">
        <Search placeholder="Search For A Country" />
      </div>
    </header>
  );
}

export default Header;
