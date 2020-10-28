import { useState } from "react";
import { workCases } from "../workCases";

const WorkComponent = () => {
	const [count, setCount] = useState(1);
	const maxCount = workCases.length;
	let workCase = workCases[count - 1];
	const changeCounter = (value) => {
		if (value === "increment" && count != maxCount) {
			setCount((prevState) => prevState + 1);
		} else if (value === "decrement" && count != 1) {
			setCount((prevState) => prevState - 1);
		} else if (value === "increment" && count == maxCount) {
			setCount(() => 1);
		} else if (value === "decrement" && count == 1) {
			setCount(() => maxCount);
		}
	};
};
export default WorkComponent;
