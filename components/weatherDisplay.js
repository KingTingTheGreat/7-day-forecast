import { Error } from "./error.js";
import React from "react";
import styled from "styled-components";
import { DayWeather } from "./dayWeather.js";

const ForecastWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 80%;
`;

export const WeatherDisplay = ({ weatherData }) => {
	// weatherData.days = null; // uncomment to test error
	return (
		<ForecastWrapper>
			{weatherData.days ? (
				weatherData.days.slice(0, 7).map((day, i) => {
					return <DayWeather key={i} day={day} />;
				})
			) : (
				<Error />
			)}
		</ForecastWrapper>
	);
};

export default WeatherDisplay;
