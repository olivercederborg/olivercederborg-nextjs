import { useInView } from "react-intersection-observer"; // 1.9K gzipped
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const MotionInView = ({ children }, props) => {
	const animation = useAnimation();
	const [ref, inView, entry] = useInView({ threshold: 0.1 });

	useEffect(() => {
		if (inView) {
			animation.start("visible");
		} else {
			animation.start("hidden");
		}
	}, [animation, inView]);

	const variants = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.75,
				delay: 0.75,
				staggerChildren: 0.5
			}
		},
		hidden: {
			y: -30,
			opacity: 0
		}
	};

	return (
		<motion.div
			ref={ref}
			animate={animation}
			initial='hidden'
			variants={props.variants ? props.variants : variants}
		>
			{children}
		</motion.div>
	);
};

export default MotionInView;
