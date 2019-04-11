import React, { useState } from "react";
import House from "./house";

const Houses = () => {
  const [houses, setHouses] = useState([
    {
      id: 1,
      img: "no image",
      price: 500000,
      address: "330 Runneymede Road",
      description: "bad house",
      created_ad: "2019-04-11T01:52:08.823955Z",
      bedrooms: 5,
      bathrooms: 2,
      parking: false
    },
    {
      id: 2,
      img:
        "https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1",
      price: 400000000,
      address: "253 College St, Toronto",
      description: "big house nice city",
      created_ad: "2019-04-11T02:25:15.089950Z",
      bedrooms: 7,
      bathrooms: 4,
      parking: true
    },
    {
      id: 3,
      img:
        "https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1",
      price: 400000000,
      address: "253 College St, Toronto",
      description: "big house nice city",
      created_ad: "2019-04-11T02:25:18.020255Z",
      bedrooms: 7,
      bathrooms: 4,
      parking: true
    }
  ]);

  return (
    <div className="house-list">
      <ul>
        {houses.map(home => (
          <House
            key={home.id}
            img={home.img}
            price={home.price}
            address={home.address}
            description={home.description}
            bedrooms={home.bedrooms}
            bathrooms={home.bathrooms}
            parking={home.parking}
          />
        ))}
      </ul>
    </div>
  );
};

export default Houses;
