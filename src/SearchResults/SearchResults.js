import React, { useState, useEffect } from "react";
import { useQuery } from "../shared/useQuery";
import { useHistory } from "react-router-dom";
import Loader from "../shared/Loader";

const url = "https://restcountries.com/v2/name/";

export function SearchResults() {
  const query = useQuery();
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query.get("q"));

  const history = useHistory();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url + searchQuery);
      const data = await response.json();
      setIsLoading(false);
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    const countryCode = e.currentTarget.dataset.country;

    history.push(`/country?alpha=${countryCode}`);
  };

  useEffect(() => {
    if (searchQuery === query.get("q")) {
      return;
    } else {
      setSearchQuery(query.get("q"));
    }
  }, [searchQuery, query]);

  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  if (isLoading) {
    return <Loader />;
  }

  if (searchData.length) {
    return (
      <div className="search-results">
        <div className="container">
          <div className="grid-container transparent-background">
            {searchData.map((item) => {
              return (
                <div className="grid-item" key={item.alpha2Code}>
                  <div
                    className="result-country"
                    onClick={handleClick}
                    data-country={item.alpha2Code}
                  >
                    <div
                      className="result-flag"
                      style={{ backgroundImage: `url(${item.flag})` }}
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

  return (
    <div className="no-results">
      <h3>No Results</h3>
    </div>
  );
}
