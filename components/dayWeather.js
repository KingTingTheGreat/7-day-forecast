import styled from "styled-components";

const DayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 14rem;
	min-width: 220px;
	margin: 0.5rem;
	background-color: white;
	border: 2px solid #c7c7c7;
	border-radius: 1rem;
	padding: 1rem;
	align-self: stretch;
	z-index: 10;
`;

const Date = styled.h2`
	text-align: center;
	padding: 0.5rem;
`;

const Temp = styled.h3`
	text-align: center;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	padding: 0.5rem 0.1rem;
`;

const Icon = styled.div`
	font-size: 3rem;
`;

const Description = styled.h4`
	padding: 0.5rem;
`;

const Precip = styled.h4`
	align-items: left;
	padding: 1rem 0;
	color: #445de3;
`;

const Snow = styled.h4`
	align-items: left;
	color: #a577f1;
`;

export const DayWeather = ({ day }) => {
	// the data collected for each location on each day from weather api 
	const date = day.datetime;
	const precipprob = day.precipprob;
	const preciptype = day.preciptype;
	const snow = day.snow;
	const snowdepth = day.snowdepth;
	const description = day.description;
	const icon = day.icon;
	// get rid of the decimals for a cleaner look 
	const tempmax = Math.floor(day.tempmax);
	const tempmin = Math.floor(day.tempmin);

	// months of the year, to be indexed by month variable
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// date formatting
	const month = months[String(date).substring(5, 7) - 1];
	const calDate = String(date).substring(8, 11);
	const year = String(date).substring(0, 4);

	return (
		<DayWrapper>
			<Date>
				{month} {calDate}, {year}
			</Date>
			<Container>
				<Temp>
					Low / High
					<br></br>
					{tempmin}&deg;F / {tempmax}&deg;F
				</Temp>
				{/* the specific emoji that will be displayed is dependent on the weather conditions of that day */}
				<Icon>
					{icon === "clear-day" ? (
						<p>☀️</p>
					) : icon === "clear-night" ? (
						<p>🌙</p>
					) : icon === "rain" ? (
						<p>🌧</p>
					) : icon === "snow" ? (
						<p>❄️</p>
					) : icon === "sleet" ? (
						<p>🌨</p>
					) : icon === "wind" ? (
						<p>💨</p>
					) : icon === "fog" ? (
						<p>🌫</p>
					) : icon === "cloudy" ? (
						<p>☁️</p>
					) : icon === "partly-cloudy-day" ? (
						<p>⛅️</p>
					) : icon === "partly-cloudy-night" ? (
						<p>☁️</p>
					) : icon === "hail" ? (
						<p>🌨</p>
					) : icon === "thunderstorm" ? (
						<p>⛈</p>
					) : icon === "tornado" ? (
						<p>🌪</p>
					) : null}
				</Icon>
			</Container>
			<Description>
				{description}
				{/* if there is a chance of preciipation, display that chance */}
				<Precip>{preciptype !== null ? <p>{precipprob}% chance of precipitation</p> : null}</Precip>
				{/* if snow is expected, display details  */}
				<Snow>{snow !== 0 ? <p>Expecting {snowdepth} in. of snow</p> : null}</Snow>
			</Description>
		</DayWrapper>
	);
};
