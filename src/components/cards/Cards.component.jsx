import React from 'react';
import './Cards.component.css'

const CardItem = ({day,temp,windDirection,windSpeed,type}) =>(

    <div className='content'>
        <img src="./images/weather-photo.png" alt="Sample photo"></img>
        <h1 className='day'>{day.toUpperCase()}</h1>
        <h5 className='temp'>{temp}°C</h5>
    </div>
)


export default CardItem;

