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

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
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
const outer = "#4DA9FF";

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	background: radial-gradient(${inner}, ${outer});
`;

export default function About() {
	const [infoVis, setInfoVis] = useState(false);

	function toggleInfo() {
		setInfoVis(!infoVis);
	}

	return (
		<PageWrapper>
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
					<TypeIt
						getBeforeInit={(instance) =>
							instance.type("Meet our team").pause(500).type("!!!").pause(500).type(" :]")
						}
						// // remove blinking cursor; doesn't work, causes issues when switching pages
						// options={{
						// 	lifeLike: true,
						// 	afterComplete: (instance) => {
						// 		instance.destroy();
						// 	},
						// }}
					/>
				</Title>
				<AboutWrapper>
					<Description>
						We are a team of undergraduate students at Boston University who are passionate about Computer
						Science and its applications to the real world. This is our final project a weather app that
						uses the user&apos;s location to display and predict the weather.
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
