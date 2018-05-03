import React, { Component } from 'react';



class WeatherDisplay extends Component {
    state = {
        cityName: '',
        coord: {},
        description: [],
        currentWeather: [],
        sun: [],
        conditions: {
            wind: [],
            rain: [],
            clouds: []
        }
    }


    // componentDidMount(){
    //     fetch (`https://api.openweathermap.org/data/2.5/weather?q=Salt+Lake+City&units=imperial&APPID=`)
    //         .then(res => res.json())
    //         .then(res => this.setState({
    //             cityName: res.name,
    //             coord: res.coord,
    //             description: [...res.weather],
    //             currentWeather: [res.main],
    //             sun: [res.sys],
    //             conditions: {
    //                 wind: [res.wind],
    //                 rain: [res.rain],
    //                 clouds: [res.clouds]
    //             }
    //         }))
    // }


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default WeatherDisplay;
