import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
	// the city we want weather data for
	const { location } = req.query;

	try {
		const apiKey = process.env.WEATHER_API_KEY;
		const weatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevents&key=${apiKey}&contentType=json`;
		const response = await fetch(weatherUrl);
		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error("Error fetching weather data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
