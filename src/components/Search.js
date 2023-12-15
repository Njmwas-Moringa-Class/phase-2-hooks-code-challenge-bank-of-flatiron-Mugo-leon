import React from "react";

function Search({ handleSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

