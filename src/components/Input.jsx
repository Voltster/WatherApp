import { useState, useEffect } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import RecentSearches from "./RecentSearches";


function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  // load recent searches 
  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  // update recent searches
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      setQuery({ q: city });
      updateRecentSearches(city);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user's location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        const { latitude: lat, longitude: lon } = position.coords;
        setQuery({ lat, lon });
        updateRecentSearches(`Lat: ${lat}, Lon: ${lon}`);
      });
    }
  };

  const updateRecentSearches = (city) => {
    const updatedSearches = [city, ...recentSearches.filter(item => item !== city)].slice(0, 5);
    setRecentSearches(updatedSearches);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-2/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light py-2 px-4 w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none capitalize placeholder:lowercase rounded-full"
        />
        <UilSearch
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
          onClick={handleSearch}
        />
        <UilLocationPoint
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-col w-1/4 items-center justify-center">
        <p className="mx-2 text-white ">Change Temp</p>
        <span className=" flex mt-1">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
        </span>
      </div>
    </div>
      <RecentSearches recentSearches={recentSearches} handleRecentCityClick={setCity} />
    </>
  );
}

export default Inputs;
