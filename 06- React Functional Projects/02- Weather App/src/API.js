import axios from "axios";
import { baseURL, Api_Key } from "./Consts";

import {
  Current,
  Forecast,
  History,
  Future,
  Astronomy,
  Timezone,
  Sports,
} from "./Consts";

// reference calls
// https://api.weatherapi.com/v1/current.json?key=5b5ca85e3bbb4f92a0d233539232909&q=kuwait&aqi=yes
// https://api.weatherapi.com/v1/current.json?key=5b5ca85e3bbb4f92a0d233539232909&q=kuwait&aqi=no

export const CurrentWeather = (country, aqi) => {
  return axios
    .get(`${baseURL}/${Current}?key=${Api_Key}&q=${country}&aqi=${aqi}`, {
      headers: {},
    })
    .then((res) => {
      return res;
    });
};
