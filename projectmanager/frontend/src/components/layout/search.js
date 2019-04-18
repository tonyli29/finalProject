import React from "react";

const Search = props => {
  return (
    <form onSubmit={props.getResult} className="search-form">
      <input list="citys" name="neighbourhood" />
      <datalist id="citys">
        <option value="Parkdale" />
        <option value="Royal Oak" />
        <option value="Valley Ridge" />
      </datalist>
    </form>
  );
};

export default Search;

// import React, { useState } from "react";
// import Select from "react-select";
// import { Redirect } from "react-router-dom";

// const Search = () => {
//     const [state, setState] = useState([
//         { value: "calgary", label: "Calgary" },
//         { value: "toronto", label: "Toronto" }
//     ]);

//     const handleChange = selectedOption => {
//         setState({ selectedOption });
//         <Redirect to="/gl" />;
//         console.log("g");
//     };

//     const { selectedOption } = state;

//     return (
//         <form action="/#/home">
//             <Select
//                 className="select"
//                 value={selectedOption}
//                 options={state}
//                 name="select"
//                 onChange={handleChange}
//             />
//         </form>
//     );
// };

// export default Search;
