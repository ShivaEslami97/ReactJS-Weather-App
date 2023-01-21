import { Fragment, useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading/Loading";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import { API_KEY, BASE_URL, SearchVideos } from "./services/services";
import useFetch from "./hooks/useFetch";
import Result from "./components/Result";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState("New York");
  // const [loadingStatus, setLoadingStatus] = useState(true);
  const [units, setUnits] = useState("metric");

  const { isLoading, fetchData: fetchWeather } = useFetch(true);

  useEffect(() => {
    const weatherData = (data) => {
      setCurrentWeather({ ...data });
    };

    fetchWeather(
      { url: `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=${units}` },
      weatherData
    );
  }, [city, fetchWeather, units]);

  if (isLoading) {
    return (
      <main className="app app-loading bg-main h-screen">
        <Loading />
      </main>
    );
  }
  return (
    <Fragment>
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      <main className="app bg-main bg-cover grid grid-cols-[1fr] md:grid-cols-[2fr,_1fr]">
        <Result data={currentWeather} />
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
