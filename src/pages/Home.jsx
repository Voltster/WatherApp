import { useEffect, useState } from "react";
import Forecast from "../components/Forecast";
import Input from "../components/Input";
import TempAndDetails from "../components/TempAndDetails";
import TimeAndLocation from "../components/TimeAndLocation";
import getFormattedWeatherData from "../services/weatherService";
import { ToastContainer, toast } from "react-toastify";


const Home = () => {

  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };


  return (
    <div className="mx-auto max-w-screen-md  mt-1 py-5 px-3 rounded-md  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" id="WeatherApp">
      <Input  setQuery={setQuery} units={units} setUnits={setUnits}/>
     {
      weather && (
        <>
        <TimeAndLocation weather={weather}  />
        <TempAndDetails  weather={weather} />
        <Forecast  title="hourly forecast" items={weather.hourly}/>
        <Forecast title="daily forecast" items={weather.daily} />
        <ToastContainer autoClose={1500} theme="colored" newestOnTop={true} 
        style={{ width: '60%', maxWidth: '300px' }} />
        </>
      )
     }
    </div>
  );
};

export default Home;
