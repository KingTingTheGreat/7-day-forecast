import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
	// the ip we want the location of
	const { ip } = req.query;

	try {
		// get the api key from the server side env
		const apiKey = process.env.LOCATION_API_KEY;
		// use this key and ip address to call the location api
		const locationUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
		const response = await fetch(locationUrl);
		// returns data in json format to the client
		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error("Error fetching location data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
