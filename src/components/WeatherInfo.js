import React, { Component } from 'react';
import Loader from './Loader.js';
import '../assets/css/WeatherInfo.css';

class WeatherInfo extends Component {
	render() {
		const { info } = this.props;
		if (info.loader === true) return <Loader></Loader>;
		return (
			<div>
				<h1 className="city-name">
					{info.data.name} - {info.data.sys.country}
				</h1>
				<h3 className="description">{info.data.weather[0].description}</h3>
				<div className="container-icon">
					<img
						className="icon-weather"
						src={`http://openweathermap.org/img/wn/${info.data.weather[0].icon}@2x.png`}
						alt=""
					/>
					<h1 className="deg">{Math.floor(info.data.main.temp - 273.15)}°C</h1>
				</div>
				<div className="container-min-max">
					<h3 className="min">
						<i className="fad fa-arrow-down"></i>
						{Math.floor(info.data.main.temp_min - 273.15)}°C
					</h3>
					<h3 className="max">
						<i className="fad fa-arrow-up"></i>
						{Math.floor(info.data.main.temp_max - 273.15)}°C
					</h3>
				</div>
				<div className="humidity">
					<p>
						<i className="fad fa-tint icon"></i>
						Humedad: {info.data.main.humidity}%
					</p>
					<p>
						<i className="fad fa-thermometer-half icon"></i>
						Presión: {(info.data.main.pressure / 1013).toString().slice(0, 5)}atm
					</p>
				</div>
			</div>
		);
	}
}

export default WeatherInfo;
