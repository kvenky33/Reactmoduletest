import React from "react";
import Weather from "./weather/Weather";
import Search from "./search/Search";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/weather/:city" element={<Weather />} />
    </Routes>
  );
};

export default App;
