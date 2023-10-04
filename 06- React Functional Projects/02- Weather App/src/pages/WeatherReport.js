import React, { useState, useEffect } from "react";

// APIs
import { CurrentWeather } from "../API";

export default function WeatherReport() {
  const [place, setPlace] = useState("");
  const [aqi, setAqi] = useState("");

  const [currentWeather, setCurrentWeather] = useState();

  useEffect(() => {
    CurrentWeather(place, aqi)
      .then((res) => {
        setCurrentWeather(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3>This is Weather Report Component</h3>
    </div>
  );
}
