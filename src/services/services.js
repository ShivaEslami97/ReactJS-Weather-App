import moment from "moment";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const GEO_API_KEY = process.env.REACT_APP_RapidAPI_Key;
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const getTime = (timezone) => {
  const timezoneInMinutes = timezone / 60;
  const currTime = moment().utcOffset(timezoneInMinutes).format("HH:mm");
  const todayDate = moment().format("dddd, D MMM YYYY"); // 'today Sunday'
  return { todayDate, currTime };
};
const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${GEO_API_KEY}`, // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export { getTime, API_KEY, BASE_URL, geoApiOptions, GEO_API_KEY, GEO_API_URL };
