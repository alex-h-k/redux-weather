import axios from "axios";

const API_KEY = "5acbcc5d711cf9df4c7a24ef04539020";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  console.log("fetchweather");
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
