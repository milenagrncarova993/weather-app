import React from 'react';
import CardItem from '../cards/Cards.component';


class Days extends React.Component{
    constructor(){
        super();

        this.state = {
            days: [
                {
                    day:'Monday',
                    temp:22,
                    windDirection:'north-east',
                    windSpeed:10,
                    type:'sunny'
                },
                {
                    day:'Tuesday',
                    temp:14,
                    windDirection:'north-west',
                    windSpeed:14,
                    type:'rainy'
                },
                {
                    day:'Wednesday',
                    temp:17,
                    windDirection:'south-east',
                    windSpeed:20,
                    type:'cloudy'
                },
                {
                    day:'Thursday',
                    temp:17,
                    windDirection:'south-east',
                    windSpeed:20,
                    type:'cloudy'
                },
                {
                    day:'Friday',
                    temp:14,
                    windDirection:'north-west',
                    windSpeed:14,
                    type:'rainy'
                },
                {
                    day:'Saturday',
                    temp:22,
                    windDirection:'north-east',
                    windSpeed:10,
                    type:'sunny'
                },
                {
                    day:'Sunday',
                    temp:22,
                    windDirection:'north-east',
                    windSpeed:10,
                    type:'sunny'
                }
            ]
        }
    }

    render(){
        return (
            <div className='days-menu'>
                {
                    this.state.days.map(({day,temp,windDirection,windSpeed,type}) =>(
                        <CardItem day={day} temp={temp} windDirection={windDirection} windSpeed={windSpeed} type={type}/>
                ))}
            </div>

        );
    }
}

export default Days;