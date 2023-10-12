import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${inputValue.replace(/ /g, "+")}`);
  };
  const handleInputChange = (e) => {
    console.log(e.currentTarget.value);
    setInputValue(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Search For Country</label>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Search;
