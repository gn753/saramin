import React, { useEffect, useState, useRef } from "react";
import mapInfoAPI from "../api/mapInfoAPI";

export default function KakaoMap() {
  useEffect(() => {
    // addressFetch();
    mapInfoAPI();
  }, []);

  return (
    <div className="map_wrap">
      <div
        id="map"
        style={{
          width: "400px",
          height: "400px",
          position: "relative",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
}
