import React, { useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputValue);
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
