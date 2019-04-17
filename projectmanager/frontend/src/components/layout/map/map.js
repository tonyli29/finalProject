import React, { useEffect } from "react";

const MapView = props => {
  // componentDidMount() {
  //   this.renderMap();
  // }

  useEffect(() => {
    renderMap();
  }, []);

  const renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZfUHxZLHtErCuMSQgdUDvMDy0OTKoaF4&callback=initMap"
    );
    window.initMap = initMap;
  };

  const initMap = () => {
    let real_addresses = props.addresses;

    // let fake_addresses = [
    //   { name: "Big House", coord: { lat: 51.04427, lng: -114.062019 } },
    //   { name: "Medium House", coord: { lat: 51.058759, lng: -114.138481 } },
    //   { name: "Small House", coord: { lat: 51.074275, lng: -114.074478 } }
    // ];

    console.log("Real Addresses", real_addresses);
    //console.log("Fake Addresses", fake_addresses);

    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 51.04427, lng: -114.062019 },
      zoom: 10
    });

    // debugger;

    // fake_addresses.forEach(location => {
    //   console.log("Adding FaKE Marker at: ", location);
    //   let marker = new window.google.maps.Marker({
    //     position: location.coord,
    //     map: map,
    //     title: location.name
    //   });
    // });

    real_addresses.forEach(location => {
      console.log("Adding Real Address Marker at: ", location);
      let marker = new window.google.maps.Marker({
        position: location.coord,
        map: map,
        title: location.name
      });
    });
  };

  return <div id="map" />;
};

function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default MapView;
