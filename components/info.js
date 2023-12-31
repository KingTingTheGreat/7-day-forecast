import styled from "styled-components";

const InfoPage = styled.div`
	background-color: white;
	align-content: center;
	position: fixed;
	z-index: 15;
	border-style: dashed;
	border-radius: 10px;
	padding: 10px;
	margin: 30px;
	margin-top: 80px;
`;

export const Info = ({ infoVis }) => {
	//simple react component with a fixed position and z-index to act as a pop-up info screen
	return (
		<InfoPage style={{ display: infoVis ? "block" : "none" }}>
			<h1 style={{ textAlign: "center" }}>INFO</h1>
			<p style={{ fontSize: "x-large" }}>
				Hello, CS392!! Welcome to our final project, a weather app that displays an accurate 7-day forecast
				based on the user&apos;s location. Our team built this application using Next.js and a handful of public
				APIs, which we use to fetch the user&apos;s IP address, identify the geolocation of the user&apos;s
				address, and to return the relevant forecast. We also included an about page which highlights our team
				and allows the user to connect with our team members. We hope you enjoy our project!
			</p>
		</InfoPage>
	);
};
