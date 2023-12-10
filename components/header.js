import { Logo } from "./logo";
import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: green;
`;

const NavLinks = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
	color: black;
	margin: 0.5rem;
	padding: 0.5rem;
	font-size: 1.5rem;
	hover: {
		color: blue;
	}
`;

export const Header = () => {
	return (
		<NavWrapper>
			<Logo />
			<NavLinks>
				<Link href="/about">About</Link>
			</NavLinks>
		</NavWrapper>
	);
};
