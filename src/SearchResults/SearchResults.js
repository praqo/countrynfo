import React, { useState, useEffect } from "react";
import { useQuery } from "../shared/useQuery";
const url = "https://restcountries.com/v2/name/";

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
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="search-results">
        <div className="container">
          <div className="grid-container transparent-background">
            {searchData.map((item) => {
              return (
                <div className="grid-item" key={item.alpha2Code}>
                  <div className="result-country">
                    <div
                      className="result-flag"
                      style={{ backgroundImage: `url(${item.flags[0]})` }}
                    ></div>
                    <h4 className="result-title">{item.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return <h3>No Results</h3>;
}
