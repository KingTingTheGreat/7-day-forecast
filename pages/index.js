import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
// import { Weather } from "@/components/weather";
import { WeatherWithData } from "@/hooks/test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
				<div>welcome to our app</div>
				{/* <WeatherWithData /> */}
				<p>Home</p>
			</main>
		</>
	);
}
