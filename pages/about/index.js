import { Team } from "@/components/team";
import styled from "styled-components";
import Link from "next/link";
import { Header } from "@/components/header";
import TypeIt from "typeit-react";

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

export default function About() {
	return (
		<>
			<Header />
			<main style={{ height: "100%" }}>
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
		</>
	);
}
