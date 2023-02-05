import moment from "moment";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const GEO_API_KEY = process.env.REACT_APP_RapidAPI_Key;
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const getTime = (timezone) => {
  const timezoneInMinutes = timezone / 60;
  const currTime = moment().utcOffset(timezoneInMinutes).format("HH:mm");
  const todayDate = moment().format("dddd, D MMM YYYY"); // 'today Sunday'
  const hour = moment(`${currTime}`, "HH:mm").hours();
  return { todayDate, currTime, hour };
};
const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${GEO_API_KEY}`, // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const getWeatherCondition = (value, hours) => {
  const mistCondition = [
    "Mist",
    "Smoke",
    "Haze",
    "Haze",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
  ];
  if (mistCondition.includes(value)) return "Mist";
  if (value === "Drizzle") return "Rain";
  if (value !== "Clear") return value;
  const isDayTime = hours > 6 && hours < 20 ? `${value}Day` : `${value}Night`;
  return isDayTime;
};

const selectBackgroundVideoLink = (weatherCondition) => {
  const videoLinks = {
    ClearDay:
      "https://player.vimeo.com/external/369995583.sd.mp4?s=5afa28a551b1b1231d4f1a67b6136a1d2909f517&profile_id=165&oauth2_token_id=57447761",
    ClearNight:
      "https://player.vimeo.com/external/450389043.sd.mp4?s=b3ef9046f72679d31ec7744cc06d388dd351952d&profile_id=165&oauth2_token_id=57447761",
    Clouds:
      "https://player.vimeo.com/external/330241014.sd.mp4?s=062c0b46884fc98d7468a1c448568785862cd826&profile_id=165&oauth2_token_id=57447761",
    Mist: "https://player.vimeo.com/external/343732132.sd.mp4?s=e929998750867170d3fd43ec6c80abc45238896d&profile_id=164&oauth2_token_id=57447761",
    Rain: "https://player.vimeo.com/external/314009652.sd.mp4?s=122c882377bf9f385cc3092e74a878abd1485423&profile_id=165&oauth2_token_id=57447761",
    Snow: "https://player.vimeo.com/external/314535013.sd.mp4?s=79ed75ccc803c2ac6e1cc09280c37a44b87d1d84&profile_id=165&oauth2_token_id=57447761",
    Thunderstorm:
      "https://player.vimeo.com/external/480223896.sd.mp4?s=4322c1e7b0c2863237d0ba6bdba8d92c387e1981&profile_id=164&oauth2_token_id=57447761",
  };
  return videoLinks[weatherCondition];
};

export {
  getTime,
  API_KEY,
  BASE_URL,
  geoApiOptions,
  GEO_API_KEY,
  GEO_API_URL,
  selectBackgroundVideoLink,
  getWeatherCondition,
};
