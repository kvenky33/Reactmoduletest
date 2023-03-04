import React, { useState, useEffect } from "react";

import "./weather.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../redux/action";
const Weather = () => {
  const display = useSelector((store) => store.display);
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState(null);
  const { city } = useParams();

  const APIKEY = "deb594186fb643db9af55844230403";

  useEffect(() => {
    async function fetchWeatherData() {
      const url = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    }
    fetchWeatherData();
  }, [city]);
  if (!weatherData) {
    return <>Loading...</>;
  }
  return (
    <div className="weather">
      <h1 className="heading2">Weather Data</h1>
      <div className="flex">
        <button onClick={() => dispatch(show())}>CELCIUS</button>
        <button onClick={() => dispatch(hide())}> FOREINHEIGHT</button>
      </div>
      {display ? (
        <div className="weather-details">
          <h3>Temperatuure:{weatherData.current.temp_c}°C</h3>
          <p>Location : {weatherData.location.name}</p>
          <p>Lattitude : {weatherData.location.lat}</p>
          <p>Longitude : {weatherData.location.lon}</p>
          <p>Time Zone : {weatherData.location.tz_id}</p>
          <p>
            condition : {weatherData.current.condition.text}{" "}
            <img src={weatherData.current.condition.icon} alt="icon" />
          </p>

          <p>
            Pressure : {weatherData.current.pressure_in} in/
            {weatherData.current.pressure_mb} mb
          </p>
          <p>
            Precip: {weatherData.current.precip_in} in/
            {weatherData.current.precip_mm} mm
          </p>

          <p>Humidity : {weatherData.current.humidity}</p>
          <p>Feelslike : {weatherData.current.feelslike_c}°C</p>
          <p>
            Visibility : {weatherData.current.vis_km}km/
            {weatherData.current.vis_miles}miles
          </p>
          <p>UV :{weatherData.current.uv}</p>
          <p>
            Gust :{weatherData.current.gust_kph}kph/
            {weatherData.current.gust_kph} mph{" "}
          </p>
        </div>
      ) : (
        <div className="weather-details">
          <h3>Temperatuure:{weatherData.current.temp_f}°F</h3>
          <p>Location : {weatherData.location.name}</p>
          <p>Lattitude : {weatherData.location.lat}</p>
          <p>Longitude : {weatherData.location.lon}</p>
          <p>Time Zone : {weatherData.location.tz_id}</p>
          <p>
            condition : {weatherData.current.condition.text}{" "}
            <img src={weatherData.current.condition.icon} alt="icon" />
          </p>

          <p>
            Pressure : {weatherData.current.pressure_in} in/
            {weatherData.current.pressure_mb} mb
          </p>
          <p>
            Precip: {weatherData.current.precip_in} in/
            {weatherData.current.precip_mm} mm
          </p>

          <p>Humidity : {weatherData.current.humidity}</p>
          <p>Feelslike : {weatherData.current.feelslike_f}°F</p>
          <p>
            Visibility : {weatherData.current.vis_km}km/
            {weatherData.current.vis_miles}miles
          </p>
          <p>UV :{weatherData.current.uv}</p>
          <p>
            Gust :{weatherData.current.gust_kph}kph/
            {weatherData.current.gust_kph} mph{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
