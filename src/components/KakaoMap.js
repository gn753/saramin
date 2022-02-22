import React, { useEffect, useState, useRef } from "react";
import mapInfoAPI from "../api/mapInfoAPI";
import { useSelector, useDispatch } from "react-redux";

export default function KakaoMap() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: "addLocation", payload: "" });
    console.log(data.locationReducer[0], "data-location");
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
