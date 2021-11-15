import React from "react";

//styles

import "./WeatherForm.styles.css";

const WeatherForm = ({
  buscarCiudad,
  buscarClima,
  errorInput,
  valueInput,
  setValueInput,
}) => {
  return (
    <div className="form-container">
      <form className="form" action="" onSubmit={(e) => buscarClima(e)}>
        <input
          className="imput"
          type="text"
          placeholder="City Name"
          onChange={({ target }) => setValueInput(target.value)}
          value={valueInput}
        />
        {errorInput && <p className="errorInput">Enter a data </p>}
        <input className="search" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default WeatherForm;
