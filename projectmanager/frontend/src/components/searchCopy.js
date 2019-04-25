import React from "react";

const SearchCopy = props => {
  return (
    <form onSubmit={props.getResult} className="search-copy">
      <input list="citys" name="neighbourhood" />
      <datalist id="citys">
        <option value="Parkdale" />
        <option value="Royal Oak" />
        <option value="Valley Ridge" />
      </datalist>
    </form>
  );
};

export default SearchCopy;
