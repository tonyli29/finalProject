import React, { useEffect, useState } from "react";
import { inherits } from "util";
import axios from "axios";

const DetailMap = ({ address }) => {
  useEffect(() => {
    if (address) {
      renderMap();
    }
  }, [address]);

  const renderMap = () => {
    if (!window.initMap) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZfUHxZLHtErCuMSQgdUDvMDy0OTKoaF4&callback=initMap"
      );
      window.initMap = initMap;
    } else {
      initMap();
    }
  };

  const initMap = () => {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 51.04427, lng: -114.062019 },
      zoom: 10
    });

    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: address,
          key: "AIzaSyCZfUHxZLHtErCuMSQgdUDvMDy0OTKoaF4"
        }
      })
      .then(function(response) {
        if (response.data.error_message) {
          console.log("Error", response);
          alert("Error");
        }
        let lat = response.data.results[0].geometry.location.lat;
        let long = response.data.results[0].geometry.location.lng;
        let marker = new window.google.maps.Marker({
          position: { lat: lat, lng: long },
          map: map,
          title: address
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

export default DetailMap;
