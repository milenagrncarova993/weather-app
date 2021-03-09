import React from 'react';
import './Cards.component.css'

const CardItem = ({day,temp,windDirection,windSpeed,type}) =>(

    <div className='content'>
        <img src="./images/weather.png.jpg" alt="Sample photo"></img>
        <h1 className='day'>{day.toUpperCase()}</h1>
        <p className='temp'>{temp}</p>
    </div>
)


export default CardItem;

