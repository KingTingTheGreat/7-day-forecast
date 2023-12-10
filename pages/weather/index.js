import React, { useState, useEffect } from "react";
import WeatherDisplay from "@/components/weatherDisplay.js";

const WeatherPage = ({ initialLocation }) => {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		// client side fetch for location data
		const fetchGeoLocation = async () => {
			try {
				const geoLocationResponse = await fetch("https://geolocation-db.com/json/");
				const geoLocationData = await geoLocationResponse.json();
				const location = geoLocationData.city;
				// server side fetch for weather data using the geolocation data
				// this is because api key is stored in server side env
				const weatherDataResponse = await fetch(`/api/weather?location=${location}`);
				const weatherData = await weatherDataResponse.json();
				setWeatherData(weatherData);
			} catch (error) {
				console.error("Error fetching data:", error);
				setWeatherData("ERROR");
			}
		};

		fetchGeoLocation();
	}, []);

	return (
		<div>
			<h1>Weather Page</h1>
			{weatherData ? <WeatherDisplay weatherData={weatherData} /> : <p>Loading...</p>}
		</div>
	);
};

// export async function getServerSideProps() {
// 	// placeholder since the location is fetched on the client side
// 	return {
// 		props: {},
// 	};
// }

export default WeatherPage;
