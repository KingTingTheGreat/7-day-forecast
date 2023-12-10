import { Error } from "./error.js";
import React from "react";

export const WeatherDisplay = ({ weatherData }) => {
	const city = weatherData.address;
	const day = weatherData.days[0];
	return (
		<div>
			<h2>Weather in {city}</h2>
			<p>Temperature: {day.temp}</p>
		</div>
	);
};

export default WeatherDisplay;
