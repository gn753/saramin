import "./style.scss";
import Main from "./components/Main"
import Location from "./components/Location"
import Jobs from "./components/Jobs"
import Nav from "./components/Nav"
import {  Route, Routes } from 'react-router-dom';
function App() {
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
