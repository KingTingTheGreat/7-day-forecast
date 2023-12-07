import { Team } from "../components/team";
import styled from "styled-components";
import Link from "next/link";
import { Header } from "../components/header";
import TypeIt from "typeit-react";

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	margin: 1rem;
	padding: 1rem;
`;

const LinkWrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	hover: {
		color: blue;
	}
`;

export default function About() {
	return (
		<>
			<Header />
			<main style={{ height: "100%" }}>
				<AboutWrapper>
					<TypeIt>
						<Title>Meet our team!</Title>
					</TypeIt>
					<p>
						We are a group of students at Boston University who are passionate about technology and its
						applications to the real world. We are currently working on our final project for CS392.
					</p>
					<LinkWrapper>
						<Link href="github.com" target="_blank" />
					</LinkWrapper>
					<Team />
				</AboutWrapper>
			</main>
		</>
	);
}
