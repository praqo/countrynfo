import React, { useState, useEffect } from "react";
import { useQuery } from "../shared/useQuery";

const url = "https://restcountries.com/v2/alpha/";

export function CountryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const query = useQuery();

  const searchQuery = query.get("alpha");

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

  if (searchData.length || Object.keys(searchData).length) {
    return (
      <div className="country-page">
        <div className="container">
          <div className="country-content">
            <div className="country-side-bar">
              <div className="country-flag">
                <img
                  src={searchData.flags[0]}
                  alt=""
                  className="country-flag-image"
                />
              </div>
              <h4 className="country-name">{searchData.name}</h4>
            </div>
            <div className="country-info">
              <table className="table-fill">
                <tbody className="table-hover">
                  {Object.keys(searchData).map((key) => {
                    return (
                      <tr key={`${key}${searchData[key]}`}>
                        <td className="text-left">{key}</td>
                        <td className="text-left">
                          {Array.isArray(searchData[key])
                            ? searchData[key].map((item) => {
                                const itemVal =
                                  item instanceof Object ? (
                                    Object.keys(item).map((items) => {
                                      return (
                                        <div key={items}>
                                          {items}: {item[items]}
                                        </div>
                                      );
                                    })
                                  ) : (
                                    <div key={item}>{item}</div>
                                  );

                                return itemVal;
                              })
                            : searchData[key] instanceof Object
                            ? Object.keys(searchData[key]).map((el) => {
                                return (
                                  <div key={el}>
                                    {el}: {searchData[key][el]}
                                  </div>
                                );
                              })
                            : searchData[key].toString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <h3>No Results</h3>;
}
