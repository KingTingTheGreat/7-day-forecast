import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
import React, { useState, useEffect } from "react";
import WeatherDisplay from "@/components/weatherDisplay.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ initialLocation }) {
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
		<>
			<Head>
				<title>Weather | CS392 Final</title>
				<meta name="description" content="Our weather app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={`${styles.main} ${inter.className}`}>
				<div>
					<h1>Weather Page</h1>
					{weatherData ? <WeatherDisplay weatherData={weatherData} /> : <p>Loading...</p>}
				</div>
			</main>
		</>
	);
}
