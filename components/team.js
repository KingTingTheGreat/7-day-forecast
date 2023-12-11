import { TeamMembers } from "../data";
import styled from "styled-components";
import Image from "next/image";
import QRCode from "react-qr-code";
import Link from "next/link";

const TeamWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 80%;
`;

const MemberWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 18rem;
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 1.5rem;
	background-color: #ffffff;
`;

const MemberName = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	padding: 0.5rem;
`;

const ImageWrapper = styled.div`
	width: 85%;
	height: 85%;
	display: flex;
	justify-content: center;
`;

const ImageStyler = styled.div`
	max-width: fit-content;
	max-height: fit-content;
	border-radius: 1rem;
	overflow: hidden;
`;

const MemberBio = styled.p`
	font-size: 1rem;
	font-weight: 400;
	padding: 0.5rem;
`;

const SocialLinksWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const SocialLinks = (socials) => {
	const s = socials.socials;
	const links = s.filter((social) => social.url);
	const maxW = 40;
	return (
		<>
			{links.map((social, i) => (
				<div key={i} style={{ height: "auto", margin: "0.25rem", maxWidth: maxW, width: "100%" }}>
					<Link href={social.url} target="_blank">
						{social.imgSrc ? (
							<Image src={social.imgSrc} alt={social.url} width={maxW} height={maxW} />
						) : (
							<QRCode
								size={256}
								style={{ height: "auto", maxWidth: "100%", width: "100%" }}
								value={social.url}
								viewBox={`0 0 256 256`}
							/>
						)}
					</Link>
				</div>
			))}
		</>
	);
};

function createMember(member, key) {
	const { name, picture, bio, socials } = member;
	// console.log(member);
	return (
		<MemberWrapper key={key}>
			<MemberName>{name}</MemberName>
			<ImageWrapper>
				<ImageStyler>
					<Image src={picture} alt={name} width={150} height={150} />
				</ImageStyler>
			</ImageWrapper>
			<MemberBio>{bio}</MemberBio>
			<SocialLinksWrapper>
				<SocialLinks socials={socials} />
			</SocialLinksWrapper>
		</MemberWrapper>
	);
}

export const Team = () => {
	return <TeamWrapper>{TeamMembers.map((member, i) => createMember(member, i))}</TeamWrapper>;
};
