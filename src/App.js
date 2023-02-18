import { Fragment, useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import useFetch from "./hooks/useFetch";
import Result from "./components/Result";
import {
  API_KEY,
  BASE_URL,
  getTime,
  getWeatherCondition,
  selectBackgroundVideoLink,
} from "./services/services";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState("New York");
  const [units, setUnits] = useState("metric");
  const [background, setBackground] = useState(null);
  const { isLoading, fetchData: fetchWeather } = useFetch(true);

  useEffect(() => {
    const weatherData = (data) => {
      setCurrentWeather({ ...data });
      // get time based on searched location for setting dynamic background based on day/night
      const { hour } = getTime(data.timezone);
      // get weatherCondition for setting dynamic video backgrounds
      const weatherCondition = getWeatherCondition(data.weather[0].main, hour);
      const backgroundVideo = selectBackgroundVideoLink(weatherCondition);
      setBackground(backgroundVideo);
    };

    // fetch weather data from openweathermap api
    fetchWeather(
      { url: `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=${units}` },
      weatherData
    );
  }, [city, fetchWeather, units]);

  return (
    <Fragment>
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      <main
        className={`app ${
          !currentWeather && "bg-main"
        } bg-cover grid grid-cols-[1fr] md:grid-cols-[2fr,_1fr]`}
      >
        {background && (
          <div className="video-container">
            <video autoPlay loop muted id="video">
              <source src={`${background}`} type="video/mp4" />
            </video>
          </div>
        )}

        <Result data={currentWeather} isLoading={isLoading} />
        <Sidebar
          data={currentWeather}
          units={units}
          setUnits={setUnits}
          onCityChange={setCity}
        />
      </main>
    </Fragment>
  );
}

export default App;
