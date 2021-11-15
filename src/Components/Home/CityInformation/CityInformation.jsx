import React from 'react'
import { Link } from "react-router-dom"

//styles
import "./CityInformation.styles.css"

const CityInformation = ({cityInfor}) => {

        const iconUrl = `https://openweathermap.org/img/wn/${cityInfor?.weather[0]?.icon}@2x.png`;

    return (
        <div className="cardCity">
          
                    <h2>City: {cityInfor.name}</h2>
                    <h2>Temperature: {cityInfor.main.temp}°C</h2>
                    <img src={iconUrl} alt="icon-wather" />
                    <Link to ={`/${cityInfor.name}`}>
                        <button>See more</button>
                    </Link>
          
        </div>
    )
}

export default CityInformation
