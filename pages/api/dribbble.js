export default async (_, res) => {
	try {
		const API_KEY = process.env.DRIBBBLE_TOKEN;
		const userResponse = await fetch(
			`https://api.dribbble.com/v2/user?access_token=${API_KEY}`
		);
		const userResponseShots = await fetch(
			`https://api.dribbble.com/v2/user/shots?access_token=${API_KEY}&per_page=100`
		);

		const user = await userResponse.json();
		const shots = await userResponseShots.json();

		res.setHeader(
			"Cache-Control",
			"public, s-maxage=60, stale-while-revalidate=1200"
		);

		return res.status(200).json({
			followers: user.followers_count,
			shots
		});
	} catch (error) {
		return res.status(500).json({ error });
	}
};
