import styled from "styled-components";

const DayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 14rem;
	min-width: 220px;
	margin: 0.5rem;
`;

export const DayWeather = ({ day }) => {
	const date = day.datetime;
	const tempmax = day.tempmax;
	const tempmin = day.tempmin;
	const precip = day.precip;
	const precipprob = day.precipprob;
	const preciptype = day.preciptype;
	const snow = day.snow;
	const snowdepth = day.snowdepth;
	const cloudcover = day.cloudcover;
	const sunrise = day.sunrise;
	const sunset = day.sunset;
	const conditions = day.conditions;
	const description = day.description;
	const icon = day.icon;

	return (
		<DayWrapper>
			<p>date: {date}</p>
			<p>temp high: {tempmax}&deg;F</p>
			<p>temp low: {tempmin}&deg;F</p>
			<p>precipitation: {precip} in.</p>
			<p>precipitation probability: {precipprob}%</p>
			<p>precipitation type: {preciptype ? preciptype : "None"}</p>
			<p>snowfall: {snow} in.</p>
			<p>snow depth: {snowdepth} in.</p>
			<p>cloud cover: {cloudcover}%</p>
			<p>sunrise: {sunrise}</p>
			<p>sunset: {sunset}</p>
			<div style={{ backgroundColor: "lightblue" }}>
				conditions:{" "}
				{conditions.split(", ").map((cond) => (
					<p>{cond}</p>
				))}
			</div>
			<p style={{ backgroundColor: "lightgreen" }}>desc: {description}</p>
			<p>icon: {icon}</p>
		</DayWrapper>
	);
};
