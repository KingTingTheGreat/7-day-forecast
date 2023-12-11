import styled from "styled-components";

const LoadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 80%;
	height: 100%;
	min-height: 100vh;
	font-size: 2rem;
`;

// displays a loading screen for the time it takes to fetch the weather data
export const Loading = () => {
	return <LoadingWrapper>Loading...</LoadingWrapper>;
};
