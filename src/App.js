import "./style.scss";
import Main from "./components/Main"
import Location from "./components/Location"
import Jobs from "./components/Jobs"
import Nav from "./components/Nav"
import KakaoMap from "./components/KakaoMap";
import {  Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAddressAsync } from "./store/addressSlice";
import { getKeywordAsync } from "./store/keywordSlice";
function App() {
  
  const 강남 = {
    x: "127.047377408384",
    y: "37.5173319258532",
  };
  const { x, y } = 강남;

  useEffect(async() => {
    const test = await getAddressAsync("경기");
    console.log(test, "지역 위치 데이터");
    // const test2 = await getKeywordAsync("번개장터",x,y);
    // console.log(test2, "지역 위치 데이터");
  });

  return <div className="App">
    <Nav/>
    <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/location" element={<Location/>}></Route>
    <Route path="/jobs" element={<Jobs/>}></Route>
    </Routes>
    
  </div>;
}

export default App;
