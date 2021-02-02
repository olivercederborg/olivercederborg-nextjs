import axios from "axios";

export default async (_, res) => {
	const API_KEY = process.env.DRIBBBLE_TOKEN;
	const userResponse = await axios.get(
		`https://api.dribbble.com/v2/user?access_token=${API_KEY}`
	);
	const userResponseShots = await axios.get(
		`https://api.dribbble.com/v2/user/shots?access_token=${API_KEY}&per_page=100`
	);

	const user = await userResponse.data;
	const shots = await userResponseShots.data;

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=1200, stale-while-revalidate=600"
	);

	return res.status(200).json({
		followers: user.followers_count,
		shots,
	});
};
