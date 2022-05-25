import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Join from "./components/Join";
import Rooms from "./components/Rooms";

const App = () => {
  const [rooms, setRooms] = useState({});
  return (
    <div>
      <Routes>
        <Route path="/" element={<Join setRooms={setRooms} />} />
        <Route path="/room/:roomId" element={<Home />} />
        <Route path="/rooms" element={<Rooms rooms={rooms} />} />
      </Routes>
    </div>
  );
};

export default App;
