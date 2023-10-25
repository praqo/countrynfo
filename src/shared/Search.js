import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Search({ placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.replace(/ /g, "")) {
      setInputValue("");
      return;
    }

    history.push(`/search?q=${inputValue.replace(/ /g, "+")}`);
  };
  const handleInputChange = (e) => {
    console.log(e.currentTarget.value);
    setInputValue(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="" className="search-label">
        Search for a country
      </label>
      <input
        className="search-input"
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        placeholder={placeholder ? placeholder : null}
        required
      />
      <button className="submit-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
