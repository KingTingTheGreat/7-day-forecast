import Head from "next/head";
import styled from "styled-components";
import { Header } from "@/components/header";
import { Info } from "@/components/info";
import { useState } from "react";
import { Footer } from "@/components/footer";
import Link from "next/link";

const Title = styled.p`
	font-size: x-large;
	margin: 0.25rem;
	padding: 0.25rem;
	text-align: center;
`;

export default function Credits() {
	const [infoVis, setInfoVis] = useState(false);
	function toggleInfo() {
		setInfoVis(!infoVis);
	}

	return (
		<>
			<Head>
				<title>Credits | CS392 Final</title>
				<meta name="description" content="Our weather app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Header toggleInfo={toggleInfo} />
			<Info infoVis={infoVis} />
			<main style={{ height: "100%" }}>
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
		</>
	);
}
