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

export default function Home() {
	const [location, setLocation] = useState(null);
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		// client side fetch for ip address
		const fetchGeoLocation = async () => {
			try {
				// client side fetch for ip address
				const ipAddressResponse = await fetch("https://api.ipify.org/?format=json");
				const ipAddressData = await ipAddressResponse.json();
				const ip = ipAddressData.ip;

				// server side calls becaus api keys are stored in server side env
				// use this ip address to find their location
				const locationResponse = await fetch(`/api/location?ip=${ip}`);
				const locationData = await locationResponse.json();
				setLocation(locationData.city);

				if (location === null) {
					throw "Location not found";
				}

				// use their location to get weather data
				const weatherDataResponse = await fetch(`/api/weather?location=${location}`);
				const weatherData = await weatherDataResponse.json();
				setWeatherData(weatherData);
			} catch (error) {
				if (error === "Location not found") {
					setWeatherData(null);
				} else {
					setWeatherData("WEATHER ERROR");
				}
				console.error("Error fetching data:", error);
			}
		};

		fetchGeoLocation();
	}, [location]);

	return (
		<>
			<Head>
				<title>Weather | CS392 Final</title>
				<meta name="description" content="Our weather app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Header />
			<main className={`${styles.main} ${inter.className}`}>
				{/* <PageWrapper> */}
				<h1>Weather Page</h1>
				{weatherData ? (
					<>
						<h1>{location}</h1>
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
