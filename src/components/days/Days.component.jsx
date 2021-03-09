import React from 'react';
import CardItem from '../cards/Cards.component';
import Popup from '../cards/Cards.component';
import './Days.component.css';


class Days extends React.Component{
    constructor(){
        super();

        this.state = {
            days: [
                {
                    day:'Mon',
                    temp:22,
                    windDirection:'north-east',
                    windSpeed:10,
                    type:'sunny'
                },
                {
                    day:'Tue',
                    temp:14,
                    windDirection:'north-west',
                    windSpeed:14,
                    type:'rainy'
                },
                {
                    day:'Wed',
                    temp:17,
                    windDirection:'south-east',
                    windSpeed:20,
                    type:'cloudy'
                },
                {
                    day:'Thu',
                    temp:17,
                    windDirection:'south-east',
                    windSpeed:20,
                    type:'cloudy'
                },
                {
                    day:'Fri',
                    temp:14,
                    windDirection:'north-west',
                    windSpeed:14,
                    type:'rainy'
                },
                {
                    day:'Sat',
                    temp:22,
                    windDirection:'north-east',
                    windSpeed:10,
                    type:'sunny'
                },
                {
                    day:'Sun',
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
    render(){
        return (
            <div className='days-menu'>
                {
                    this.state.days.map(({day,temp,windDirection,windSpeed,type}) =>(
                        <Popup day={day} temp={temp} windDirection={windDirection} windSpeed={windSpeed} type={type}/>
                ))}
            </div>

        );
    }
}

export default Days;