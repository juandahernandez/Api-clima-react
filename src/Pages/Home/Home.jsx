import React, { useState } from "react";

// components
import WeatherForm from "../../Components/Home/Form/WeatherForm";
import CityInformation from "../../Components/Home/CityInformation/CityInformation";

// styles
import "./Home.styles.css";

const Home = () => {
  //state

  const [cityInfor, setCityInfor] = useState();
  const [loader, setLoader] = useState(false);
  const [errorInput, setErrorInput] = useState(false);
  const [cityName, setCityName] = useState("");

  // funciones

  const buscarClima = async (e) => {
    e.preventDefault();
    if (!cityName) {
      setErrorInput(true);
      setCityInfor(null);
    } else {
      setErrorInput(false);
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(API);
      const result = await response.json();
      setCityInfor(result);
      setLoader(false);
      setCityName("");
    }
  };

  return (
    <div className="container">
      {!loader && (
        <div className="background">
          <WeatherForm
            // buscarCiudad={buscarCiudad}
            cityName={cityName}
            buscarClima={buscarClima}
            errorInput={errorInput}
            // valueInput={valueInput}
            valueInput={cityName}
            setValueInput={setCityName}
            // setValueInput={setValueInput}
          />
          {cityInfor ? (
            cityInfor.cod === "404" ? (
              <p className="error404">{cityInfor.message}</p>
            ) : (
              <CityInformation cityInfor={cityInfor} />
            )
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Home;
