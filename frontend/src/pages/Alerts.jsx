import React, { useState, useEffect } from "react";
import Navibar from "../components/Navbar";
import Leftbar from "../components/Sidebar";
import Foot from "../components/Footer";
import Search_icon from "../assets/images/search.png"; // Adjusted path
import Snowy from "../assets/images/snowy.png"; // Adjusted path
import Sun from "../assets/images/sun.png"; // Adjusted path
import Cloudy from "../assets/images/cloudy.png"; // Adjusted path
import Cloudy1 from "../assets/images/cloudy1.png"; // Adjusted path
import HumidityIcon from "../assets/images/weather.png"; // Path for Humidity icon
import WindIcon from "../assets/images/wind-power.png"; // Path for Wind speed icon

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("defaultCity") || "Gampaha"); // Always load default city or Gampaha as fallback
  const [defaultCity, setDefaultCity] = useState(localStorage.getItem("defaultCity") || "Gampaha"); // Load user's default city from localStorage

  const allIcons = {
    "01d": Sun,
    "01n": Sun,
    "02d": Cloudy,
    "02n": Cloudy,
    "03d": Cloudy,
    "03n": Cloudy,
    "04d": Cloudy,
    "04n": Cloudy,
    "09d": Cloudy1,
    "09n": Cloudy1,
    "10d": Cloudy1,
    "10n": Cloudy1,
    "13d": Snowy,
    "13n": Snowy,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Please enter a city name.");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);

      if (!response.ok) {
        alert("City not found. Please enter a valid city name.");
        return;
      }

      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || Sun;
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });

      // Save the searched city in localStorage
      localStorage.setItem("lastCity", city);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert(
        "An error occurred while fetching the weather data. Please try again."
      );
    }
  };

  const handleSearch = () => {
    search(city);
  };

  const setAsDefaultCity = () => {
    setDefaultCity(city);
    localStorage.setItem("defaultCity", city); // Save default city to localStorage
    alert(`Default city set to ${city}`);
  };

  const handleSetDefaultCity = () => {
    setCity(defaultCity);
    search(defaultCity); // Search for the default city immediately
  };

  // Automatically fetch weather for the default city stored in localStorage (or fallback to Gampaha)
  useEffect(() => {
    search(defaultCity);
  }, [defaultCity]);

  return (
    <div className="flex flex-col items-center p-10 rounded-lg bg-gradient-to-r from-[#030454] to-[#00a5fd] max-w-sm mx-auto">
      {/* Search Bar Section */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="h-12 rounded-full pl-6 text-black bg-gray-200 w-64 text-lg outline-none "
        />
        <img
          src={Search_icon}
          alt="Search"
          className="w-12 p-3 bg-white rounded-full cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      {/* Button to set current city as default */}
      <button
        onClick={setAsDefaultCity}
        className="mt-4 bg-gradient-to-r from-[#0d843e] to-[#cbc805]  text-white px-3 py-2 w-full rounded-full font-medium"
      >
        Set as Default City
      </button>

      {/* Button to use default city */}
      <button
        onClick={handleSetDefaultCity}
        className="mt-2 bg-gradient-to-r from-[#0b7e33] to-[#f1be04] text-white px-3 py-2 w-full rounded-full font-medium"
      >
        Use Default City ({defaultCity})
      </button>

      {/* Weather Data Section */}
      {weatherData ? (
        <div className="flex flex-col items-center mt-8">
          <img
            src={weatherData.icon}
            alt="Weather Icon"
            className="w-28 mb-8"
          />
          <p className="text-white text-6xl font-bold mb-2">
            {weatherData.temperature}°C
          </p>
          <p className="text-white text-lg">{weatherData.location}</p>
          <div className="flex flex-col items-start mt-4">
            <div className="flex items-center mb-2">
              <img src={HumidityIcon} alt="Humidity" className="w-6 h-6 mr-2" />
              <p className="text-white text-lg">
                Humidity: {weatherData.humidity}%
              </p>
            </div>
            <div className="flex items-center">
              <img src={WindIcon} alt="Wind Speed" className="w-6 h-6 mr-2" />
              <p className="text-white text-lg">
                Wind Speed: {weatherData.windspeed} m/s
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Alerts = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Full height layout */}
        <Navibar /> {/* Navbar at the top */}
        <div className="flex flex-grow mt-16">
          {/* Main content area */}
          <Leftbar /> {/* Sidebar on larger screens */}
          <div className="flex-grow p-6 bg-gray-200 sm:ml-64 flex flex-col">
            {/* Main content area */}
            <h1 className="text-3xl font-bold">Safety Alert Page</h1>
            <WeatherComponent /> {/* Weather component */}
          </div>
        </div>
        <div className="mt-auto sm:ml-64">
          {/* Footer at the bottom */}
          <Foot /> {/* Footer */}
        </div>
      </div>
    </>
  );
};

export default Alerts;
