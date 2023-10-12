import React, { useState, useEffect } from "react";
import { useQuery } from "../shared/useQuery";
const url = "https://restcountries.eu/rest/v2/name/";

export function SearchResults() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const query = useQuery();

  const searchQuery = query.get("q");

  const fetchData = async () => {
    try {
      const response = await fetch(url + searchQuery);
      const data = await response.json();
      setIsLoading(false);
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(searchData);

  if (isLoading) {
    return (
      <div>
        <h3>...Loading</h3>
      </div>
    );
  }

  if (searchData.length) {
    return (
      <div>
        {searchData.map((item) => {
          return <h3 key={item.alpha2Code}>{item.name}</h3>;
        })}
      </div>
    );
  }

  return <h3>No Results</h3>;
}
