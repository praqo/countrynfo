import React from "react";
import ProductCard from "./ProductCard";
import Search from "../shared/Search";

export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductCard />
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
