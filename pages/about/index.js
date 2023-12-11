import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Team } from "@/components/team";
import styled from "styled-components";
import Link from "next/link";
import { Header } from "@/components/header";
import { Info } from "@/components/info";
import TypeIt from "typeit-react";
import { useState } from "react";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

// This is the about page. It contains information about the team and the project.

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	text-align: center;
`;

const Title = styled.h1`
	font-size: 3.5rem;
	font-weight: 600;
	margin: 0.25rem;
	padding: 0.25rem;
	text-align: center;
`;

const Description = styled.p`
	font-size: 1rem;
	margin: 0.25rem;
	padding: 0.25rem;
	width: 60%;
`;

const LinkWrapper = styled.div`
	margin: 0.5rem;
	padding: 0.25rem;
	hover: {
		color: blue;
	}
`;

const inner = "#FFFFFF";
const outer = "#7FCCFF";

// wraps the page and ensures the whole screen is filled
const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: radial-gradient(${inner}, ${outer});
`;

export default function About() {
	//useState hook that keeps track of info page visibility
	const [infoVis, setInfoVis] = useState(false);

	function toggleInfo() {
		//function that toggles info page visibility
		setInfoVis(!infoVis);
	}

	return (
		<PageWrapper>
			{/* metadata for this page */}
			<Head>
				<title>About | CS392 Final</title>
				<meta name="description" content="Our weather app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Header toggleInfo={toggleInfo} />
			<Info infoVis={infoVis} />
			{/* <main style={{ height: "100%" }}> */}
			<main className={`${styles.main} ${inter.className}`}>
				<Title>
					{/* typing animation for the header */}
					<TypeIt
						getBeforeInit={(instance) =>
							instance.type("Meet our team").pause(500).type("!!!").pause(500).type(" :]")
						}
					/>
				</Title>
				<AboutWrapper>
					<Description>
						We are a team of undergraduate students at Boston University who are passionate about Computer
						Science and its applications to the real world. This is our final project for CS392 - a weather
						app that uses the user&apos;s location to display and predict the weather.
					</Description>
					<LinkWrapper>
						<Link href="github.com" target="_blank" />
					</LinkWrapper>
					<Team />
				</AboutWrapper>
			</main>
			<Footer />
		</PageWrapper>
	);
}
