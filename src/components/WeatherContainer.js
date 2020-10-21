import React, { Component } from 'react';
import WeatherInfo from './WeatherInfo.js';
import WeatherInputs from './WeatherInputs.js';
import '../assets/css/WeatherContainer.css';

class WeatherContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			dataInitialized: false,
			loader: true,
			searchCity: 'santo domingo',
			langData: 'es',
			error: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&lang=${this.state.langData}&appid=19a130195cbae47faccaad1329d97449`
		)
			.then((res) => {
				return res.json();
			})
			.then(
				(res) => {
					this.setState({ data: res, loader: false, dataInitialized: true });
				},
				(err) => this.setState({ error: true })
			);
	}

	componentDidUpdate() {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&lang=${this.state.langData}&appid=19a130195cbae47faccaad1329d97449`
		)
			.then((res) => {
				return res.json();
			})
			.then(
				(res) => {
					this.setState({ data: res, loader: false, dataInitialized: true });
				},
				(err) => this.setState({ error: true })
			);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			searchCity: e.target.nameCity.value === '' ? 'santo domingo' : e.target.nameCity.value,
			langData: e.target.lang.value === '' ? 'es' : e.target.lang.value,
		});
	}

	render() {
		if (this.state.error) return <h1>Error inesperado al obtener los datos de la App</h1>;
		return (
			<div className="container-all">
				<div className="background-black"></div>
				<div className="container-weather-info">
					<WeatherInfo info={this.state}></WeatherInfo>
					<WeatherInputs handleSubmit={this.handleSubmit}></WeatherInputs>
				</div>
			</div>
		);
	}
}

export default WeatherContainer;
