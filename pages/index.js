import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
import { Info } from "@/components/info";
import React, { useState, useEffect } from "react";
import WeatherDisplay from "@/components/weatherDisplay.js";
import styled from "styled-components";
import { Loading } from "@/components/loading";
import { Footer } from "@/components/footer";
import { Moon } from "@/components/moon";
import { Sun } from "@/components/sun";
import { Clouds } from "@/components/clouds";
import { Rain } from "@/components/rain";
import { Snowman } from "@/components/snowman";

const inter = Inter({ subsets: ["latin"] });

const AddOn = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	// margin: 1rem 2.5rem;
	width: 50%;
	height: 50%;
`;

const SnowAddOn = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	margin: 1rem 0;
	width: 10%;
	height: 70%;
`;

const RainAddOn = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	margin: 1rem 5rem;
	height: 55vh;
`;

export default function Home() {
	const [location, setLocation] = useState(null);
	const [weatherData, setWeatherData] = useState(null);
	const [time, setTime] = useState(null);
	const [info, setInfo] = useState(false);
	const [icon, setIcon] = useState(null);

	const toggleInfo = () => {
		setInfo(!info);
	};

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
				setTime(locationData.time_zone.current_time);

				if (location === null) {
					throw "Location not found";
				}

				// use their location to get weather data
				const weatherDataResponse = await fetch(`/api/weather?location=${location}`);
				const weatherData = await weatherDataResponse.json();
				setWeatherData(weatherData);
				setIcon(weatherData.days[0].icon);
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

	// get the hour in order to determine whether its day or night
	const hour = String(time).substring(11, 13);

	// set the background color based on the weather, with the background being a gradient
	var top = "#000000";
	var bottom = "#FFFFFF";
	// the text is defaulted to black but can be changed to white if the background is dark
	var text = "#000000";
	// will be used to determine which graphic to display
	var pic = "";

	// if its a clear day
	if (icon === "clear-day") {
		console.log("clear day");
		// if its night time
		if (hour >= 18 || hour <= 6) {
			top = "#445DE3";
			bottom = "#090D3A";
			text = "#FFFFFF";
			pic = "moon";
			// if its day time
		} else {
			top = "#FFFFFF";
			bottom = "#4DA9FF";
			pic = "sun";
		}
		// if its a rainy day
	} else if (icon === "rain") {
		top = "#C7C7C7";
		bottom = "#133758";
		pic = "rain";
		// if its a snowy day
	} else if (icon === "snow") {
		top = "#FFFFFF";
		bottom = "#6A6A6A";
		pic = "snow";
		// if its a cloudy day
	} else if (icon === "partly-cloudy-day" || icon === "cloudy") {
		top = "#96C7F5";
		bottom = "#FFFFFF";
		pic = "cloud";
		// default to a white background in case of errors or other weather
	} else {
		top = "#FFFFFF";
		bottom = "#FFFFFF";
	}

	const PageWrapper = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		background: linear-gradient(${top}, ${bottom});
	`;

	const Location = styled.h1`
		color: ${text};
		font-size: 3rem;
		padding: 1rem;
		margin: 1rem;
		border-radius: 1rem;
		width: 100%;
	`;

	return (
		<PageWrapper>
			<Head>
				<title>Weather | CS392 Final</title>
				<meta name="description" content="Our weather app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Header toggleInfo={toggleInfo} />
			<Info infoVis={info} />
			<main className={`${styles.main} ${inter.className}`}>
				{/* if a location has been found, display  */}
				{location ? <Location>This week in {location}...</Location> : <></>}
				{/* if weather data has been found, display, else: load */}
				{weatherData ? (
					<>
						<WeatherDisplay weatherData={weatherData} />{" "}
					</>
				) : (
					<Loading />
				)}
			</main>

			{/* for snowy and rainy days because of the size of the graphics the component heights/widths will be a little different */}
			{pic === "snow" ? (
				<SnowAddOn>
					<Snowman />
				</SnowAddOn>
			) : pic === "rain" ? (
				<RainAddOn>
					<Rain />
				</RainAddOn>
			) : (
				// default add ons for other weather conditions
				<AddOn>
					{pic === "moon" ? <Moon /> : null}
					{pic === "sun" ? <Sun /> : null}
					{pic === "rain" ? <Rain /> : null}
					{pic === "cloud" ? <Clouds /> : null}
				</AddOn>
			)}
			<Footer />
		</PageWrapper>
	);
}
