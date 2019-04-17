import React from "react";
import Search from "./search";
import axios from "axios";

import { Redirect } from "react-router-dom";

// import Houses from "./houses";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Testing = () => {
  const [houses, setHouses] = useState([]);
  let houseValue = "";

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/houses/?city=&bedrooms=&bathrooms=&property_type=`
      )
      .then(res => {
        setHouses(res.data);
      });
  }, []);

  const getResult = e => {
    houseValue = e.target.elements.houseCity.value.toLowerCase();
    console.log(houseValue);
  };

  return <h1>Hello</h1>;
};

export default Testing;
