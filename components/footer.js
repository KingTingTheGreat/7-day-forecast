import styled from "styled-components";
import Link from "next/link";

const FooterWrapper = styled.div`
	padding: 5px;
	background-color: green;
	text-align: right;
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