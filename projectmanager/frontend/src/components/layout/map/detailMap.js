import React, { useEffect, useState } from "react";

const DetailMap = props => {
  const [house, setHouse] = useState([]);

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
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 51.04427, lng: -114.062019 },
      zoom: 10
    });

    let marker = new window.google.maps.Marker({
      position: { lat: 51.04427, lng: -114.062019 },
      map: map,
      title: "jj"
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

export default DetailMap;
