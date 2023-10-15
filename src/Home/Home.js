import React from "react";
import Search from "../shared/Search";
import heroImage from "./world.jpg";

export function Home() {
  return (
    <div className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1 className="hero-title">Countrinfo</h1>
      <Search />
    </div>
  );
}

export function HomeTwo() {
  return (
    <div>
      <h2>Home 2</h2>
    </div>
  );
}
