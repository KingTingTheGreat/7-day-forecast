import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
import React, { useState, useEffect } from "react";
import WeatherDisplay from "@/components/weatherDisplay.js";
import styled from "styled-components";
import { Loading } from "@/components/loading";

const inter = Inter({ subsets: ["latin"] });

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	background-color: purple;
`;

export default function Home({ initialLocation }) {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		// client side fetch for location data
		const fetchGeoLocation = async () => {
			try {
				const geoLocationResponse = await fetch("https://geolocation-db.com/json/");
				const geoLocationData = await geoLocationResponse.json();
				const location = geoLocationData.city;
				// server side fetch for weather data using the location because api key is stored in server side env
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
				{/* <PageWrapper> */}
				<h1>Weather Page</h1>
				{weatherData ? (
					<>
						<h1>{weatherData.address}</h1>
						<WeatherDisplay weatherData={weatherData} />{" "}
					</>
				) : (
					<Loading />
				)}
				{/* </PageWrapper> */}
			</main>
		</>
	);
}
