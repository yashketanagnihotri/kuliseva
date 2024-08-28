import React, { useEffect } from "react";
import "../OlaMapsWebSDK/style.css";
import { OlaMaps } from "../OlaMapsWebSDK/olamaps-js-sdk.es";

function Map() {
  useEffect(() => {
    const olaMaps = new OlaMaps({
      apiKey: "wAuLeLD9uSoxfVhKFslEJq0agit1yecn34xh7kHQ",
    });

    const myMap = olaMaps.init({
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
      container: "map",
      center: [77.61648476788898, 12.931423492103944],
      zoom: 15,
    });
  }, []);

  return (
    <>
      <div className="px-24 my-24 py-12 bg-blue-950">
        <h1 className="text-3xl mb-6 text-blue-100">Your Live Location</h1>
        <div id="map" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </>
  );
}

export default Map;
