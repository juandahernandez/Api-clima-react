import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//styles
import "./WeaterCity.styles.css";

const WeaterCity = () => {
  const [weather, setWeather] = useState(null);
  const [name] = useState(useParams().id);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
    };
    getData();
  }, [name]);

  const backgrounds = {
    Clouds:
      "https://www.muycomputerpro.com/wp-content/uploads/2019/07/clouds.jpg",
    Clear:
      "https://images.financialexpress.com/2020/04/sky1200.jpg?w=1200&h=800&imflag=true",
    Rain: "http://static-1.ivoox.com/audios/2/5/5/9/1531576489552_XXL.jpg",
    Mist: "https://media3.giphy.com/media/ZWRCWdUymIGNW/giphy.gif",
    Drizzle:
      "https://www.wallpaperup.com/uploads/wallpapers/2016/05/15/954349/b676d1d64cb8e6ca7180967a62dab505-1000.jpg",
    Haze: "https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze.jpg",
    Thunderstorm:
      "https://www.worldatlas.com/r/w1200/upload/09/60/67/shutterstock-281493026.jpg",
  };

  return (
    <div>
      {weather ? (
        <div
          className="background"
          style={{
            backgroundImage: `url(${backgrounds[weather?.weather[0].main]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="card-info-city">
            <p>City: {weather.name}</p>
            <p>Min: {weather.main.temp_min}</p>
            <p>Max: {weather.main.temp_max}</p>
            <p>Humidity: {weather.main.humidity}</p>
            <p>Speed Wind: {weather.wind.speed}</p>
            <p>Descripcion: {weather.weather[0].main}</p>
            <p>Country: {weather.sys.country}</p>

            <Link to="/">
              <button>Go back</button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default WeaterCity;
