import React from "react";

const Search = props => {
  return (
    <form onSubmit={props.getResult}>
      <input type="text" name="houseCity" />
      <button>Search</button>
    </form>
  );
};

export default Search;
