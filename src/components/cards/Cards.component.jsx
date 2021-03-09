import React from 'react';

const CardItem = ({day,temp,windDirection,windSpeed,type}) =>(

    <div className='content'>
        <h1 className='day'>{day.toUpperCase()}</h1>
        <h1 className='temp'>{temp}</h1>
    </div>
)


export default CardItem;