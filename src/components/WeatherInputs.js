import React, { Component } from 'react'
import '../assets/css/WeatherInputs.css'

class WeatherInputs extends Component{

	render(){
		const { handleSubmit } = this.props;
		return(
			<div className="container-inputs">
				<form name="form" onSubmit={handleSubmit}>
					<input 
					name="nameCity"
					type="text" 
					autoComplete="off"
					placeholder="Nombre de la ciudad..." />
					<input 
					name="lang"
					type="text" 
					autoComplete="off"
					placeholder="Idiomas: (es): spanish (en): english" />
					<button type="submit" className="search-btn">Buscar</button>
				</form>
			</div>
		)
	}
}

export default WeatherInputs