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
      "https://player.vimeo.com/external/369995583.hd.mp4?s=a220354b4b2e1a9a46981b835ec9c6f1483650d0&profile_id=175&oauth2_token_id=57447761",
    ClearNight:
      "https://player.vimeo.com/external/450389043.hd.mp4?s=12e8be146276746d5bc71de2bffed819b9e92e1c&profile_id=175&oauth2_token_id=57447761",
    Clouds:
      "https://player.vimeo.com/external/330241014.hd.mp4?s=bbce699075d5d1b9fb77e8aee9e51b44d9c9c9dd&profile_id=175&oauth2_token_id=57447761",
    Mist: "https://player.vimeo.com/external/343732132.hd.mp4?s=5bfde23f17e3858dbdc140afe7a35b6a9ef1127d&profile_id=175&oauth2_token_id=57447761",
    Rain: "https://player.vimeo.com/external/314009652.hd.mp4?s=d7e1b097c3e07f9af480f2d1045f6961e41e6a32&profile_id=175&oauth2_token_id=57447761",
    Snow: "https://player.vimeo.com/external/314535013.hd.mp4?s=8723bedfe82aae3a25bc98e435ff119b1ea79a56&profile_id=175&oauth2_token_id=57447761",
    Thunderstorm:
      "https://player.vimeo.com/external/480223896.hd.mp4?s=e4b94f0b5700bfa68cb6f02b41f94ecca91242e9&profile_id=169&oauth2_token_id=57447761",
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
