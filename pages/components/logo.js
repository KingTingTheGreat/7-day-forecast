import styled from "styled-components";
import Link from "next/link";

const LogoWrapper = styled.div`
	color: blue;
	font-size: 2rem;
	font-weight: 600;
	padding: 1rem;
	margin: 1rem;
`;

export const Logo = () => {
	return (
		<Link href="/">
			<LogoWrapper>CS392 Final</LogoWrapper>
		</Link>
	);
};
