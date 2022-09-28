import React, { useRef } from "react";
import "./Search.scss";
// import second from "first";

function Search({ onSearch }) {
  const searchRef = useRef();

  const handleSearch = () => {
    let value = searchRef.current.value;
    console.log(value);
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        ref={searchRef}
        type="search"
        className="input-search"
        placeholder="...search"
        onKeyPress={onKeyPress}
      />
      <button type="submit" className="btn-search" onClick={onClick}>
        <i className="fas fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default Search;
