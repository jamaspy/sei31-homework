import React, { Component } from 'react';
import axios from 'axios';
class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: null,
            temperature: null,
            place: null
        }
        
        this.fetchWeather = this.fetchWeather.bind(this)
    }
    fetchWeather(city){
            console.log("FETCHING WEATHER")
  
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=50c719f0069ef8c0674620849d3bdb5f`)
            .then(res => {
                const weather = res.data.weather[0].main;
                const temperature = res.data.main.temp;
                const place = city;
                this.setState({ weather, temperature, place })
            })
    
}
    render() {
        return (
            <div>
                <h1>City Weather Search</h1>
                <SearchForm onSubmit={this.fetchWeather} />
                <WeatherInfo data={this.state} />
            </div>
        )
    }
}

class SearchForm extends Component {
    constructor() {
        super();
        this.state = { query: "" };
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }
    _handleInput(event) {
        this.setState({ query: event.target.value })
    }

    _handleSubmit(event) {
        console.log("CLICKED SUBMIT")
        event.preventDefault();
        this.props.onSubmit(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <input type="search" required onInput={this._handleInput} />
                <input type="submit" value="SEARCH" />
            </form>
        )
    }
}

class WeatherInfo extends Component {
    render() {
        return (
            <div>
            <h2>City: {this.props.data.place}</h2>
            <h2>Weather: {this.props.data.weather} </h2> 
            <h2>Temperature: {this.props.data.temperature} ℃</h2>
            </div>
        )
    }
}

export default Weather;