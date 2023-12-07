import { TeamMembers } from "../data";
import styled from "styled-components";
import Image from "next/image";
// import * as AspectRatio from "@radix-ui/react-aspect-ratio";

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
	width: 20rem;
	margin: 1.25rem;
	padding: 1.25rem;
	border-radius: 1.5rem;
	background-color: yellow;
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

export const Team = () => {
	return (
		<TeamWrapper>
			{TeamMembers.map((member, i) => (
				<MemberWrapper key={i}>
					<MemberName>{member.name}</MemberName>
					<ImageWrapper>
						<ImageStyler>
							<Image src={member.picture} alt={member.name} width={200} height={200} />
						</ImageStyler>
					</ImageWrapper>
					<MemberBio>{member.bio}</MemberBio>
				</MemberWrapper>
			))}
		</TeamWrapper>
	);
};
