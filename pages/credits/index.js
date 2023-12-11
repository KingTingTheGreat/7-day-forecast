import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import { Header } from "@/components/header";
import { Info } from "@/components/info";
import { useState } from "react";
import { Footer } from "@/components/footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const inner = "#7FCCFF";
const outer = "#FFFFFF";

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: radial-gradient(${inner}, ${outer});
`;

const Title = styled.p`
	font-size: x-large;
	margin: 0.25rem;
	padding: 0.25rem;
	text-align: center;
`;

export default function Credits() {
	//useState hook that keeps track of info page visibility
	const [infoVis, setInfoVis] = useState(false);
	function toggleInfo() {
		//function that toggles info page visibility
		setInfoVis(!infoVis);
	}

	return (
		<PageWrapper>
			<Head>
				<title>Credits | CS392 Final</title>
				<meta name="description" content="Our weather app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Header toggleInfo={toggleInfo} />
			<Info infoVis={infoVis} />
			<main className={`${styles.main} ${inter.className}`}>
				<Title>
					This weather app is the work of Jeffrey Ting, Rida Naeem, and Abir Islam. The{" "}
					<Link style={{ color: "blue", textDecoration: "underline" }} href={"https://ipgeolocation.io/"}>
						IP Address Locator API
					</Link>{" "}
					is the copyrighted work of ipgeolocation. The{" "}
					<Link
						style={{ color: "blue", textDecoration: "underline" }}
						href={"https://www.visualcrossing.com/weather-api"}>
						Weather API
					</Link>{" "}
					is the copyrighted work of Visual Crossing Corporation. The{" "}
					<Link style={{ color: "blue", textDecoration: "underline" }} href={"https://emojipedia.org/apple"}>
						emojis
					</Link>{" "}
					are from Apple.
				</Title>
			</main>
			<Footer />
		</PageWrapper>
	);
}
