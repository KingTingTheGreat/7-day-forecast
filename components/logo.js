import styled from "styled-components";
import Link from "next/link";

const LogoWrapper = styled.div`
	color: black;
	font-size: 2rem;
	font-weight: 600;
	padding: 0.5rem;
	margin: 0.5rem;
`;

// the logo displayed at the top of the page
// also acts as a link to the home page
export const Logo = () => {
	return (
		<Link href="/">
			<LogoWrapper>7 Day Forecast</LogoWrapper>
		</Link>
	);
};
