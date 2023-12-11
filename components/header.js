import { Logo } from "./logo";
import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	width: 100%;
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

const InfoButton = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;
	font-size: x-large;
	margin-right: 10px;
`;

// the header displayed at the top of the page with links to the home page and the about page
// header component is passed the toggleInfo function so info page can be accessed from header
export const Header = ({ toggleInfo }) => {
	return (
		<NavWrapper>
			<Logo />
			<NavLinks>
				<InfoButton onClick={toggleInfo}>&#9432;</InfoButton>
				<Link href="/about">About</Link>
			</NavLinks>
		</NavWrapper>
	);
};
