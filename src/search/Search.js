import React, { useState } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") setCity(value);
  };
  const handleSearch = () => {
    const encodedSearchTerm = encodeURIComponent(city);
    navigate(`/weather/${encodedSearchTerm}`);
  };
  return (
    <div className="search">
      <h1 className="heading1">Weather Api</h1>
      <input
        className="search-city"
        type="text"
        name="city"
        value={city}
        onChange={handleChange}
        placeholder="location"
      />
      <button className="btn-search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
