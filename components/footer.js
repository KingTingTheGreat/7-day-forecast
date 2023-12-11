import styled from "styled-components";
import Link from "next/link";

const FooterWrapper = styled.div`
	padding: 5px;
	background-color: white;
	text-align: center;
	width: 100%;
	margin-top: 5rem;
`;

const CreditsLink = styled(Link)`
	font-size: x-large;
`;

export const Footer = () => {
	return (
		<FooterWrapper>
			<CreditsLink href="/credits">Credits</CreditsLink>
		</FooterWrapper>
	);
};
