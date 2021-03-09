import React, {useState} from 'react';
import './Cards.component.css';
import './popup.component.css';


function CardItem  ({day,temp}){
    const [show, setShow] = useState(false);
    const closePopupHander = () => setShow(false);

    return (

    <div className='content'>
        <img src={require("../sources/weather.jpg")} alt="Sample photo"></img>
        <h1 className='day'>{day.toUpperCase()}</h1>
        <h4 className='temp'>{temp}°C</h4>
        <button onClick={() =>setShow(true)} className="btn-openPopup">View More</button>
        <Popup show={show} closePopupHandler={closePopupHander}/>
    </div>
)
}


function Popup  ({show, closePopupHandler,day,temp,windDirection,windSpeed,type}){
    return(
      <div className="popup-wrapper"
        style={{
          opacity: show ? '1' : '0'
        }}
      >
          <div ClassName="popup-header">
          <h1 className='day'>{day}</h1>
          </div>
          <div className="popup-content">
              <div className="popup-body">
              <h5 className='temp'>Temperature: {temp}°C</h5>
              <h5 className='temp'>Wind Direction: {windDirection}</h5>
              <h5 className='temp'>Wind Seed: {windSpeed} m/s</h5>
              <h5 className='temp'>Type: {type}</h5>
              </div>
            <div className="popup-footer">
                <button onClick= {closePopupHandler} className="btn-cancel">Close</button>
            </div>
          </div>
      </div>
    )
}


export default CardItem;

