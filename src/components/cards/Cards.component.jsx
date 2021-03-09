import React, {useState} from 'react';
import './Cards.component.css';
import { Popup } from '../popup/popup.component.jsx'


function CardItem  ({day,temp,windDirection,windSpeed,type}){
    const [show, setShow] = useState(false);
    const closePopupHander = () => setShow(false);

    return (

    <div className='content'>
        <img src="./images/weather-photo.png" alt="Sample photo"></img>
        <h1 className='day'>{day.toUpperCase()}</h1>
        <h5 className='temp'>{temp}°C</h5>
        <button className="btn-openPopup">View More</button>
        <Popup show={show} closePopupHandler={closePopupHander}/>
    </div>
)
}


export default CardItem;

