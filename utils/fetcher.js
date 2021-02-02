import axios from "axios";
export default async function Fetcher(...args) {
	const res = await axios.get(...args);

	return res.data;
}
