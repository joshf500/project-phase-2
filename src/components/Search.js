import React from "react";

function Search({ searchInput, onSearch }) {
  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Reviews by Airline:</label>
      
      <input
      value={searchInput}
        type="text"
        id="search"
        placeholder="Type an airline to search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;


