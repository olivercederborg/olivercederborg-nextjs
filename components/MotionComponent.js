import { useInView } from "react-intersection-observer"; // 1.9K gzipped
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const MotionComponent = ({ children, variants }) => {
	const animation = useAnimation();
	const [ref, inView, entry] = useInView({ threshold: 0.1 });

	useEffect(() => {
		if (inView) {
			animation.start("visible");
		} else {
			animation.start("hidden");
		}
	}, [animation, inView]);

	const defaultVariants = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.75,
				delay: 0.75
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
			variants={variants ? variants : defaultVariants}
		>
			{children}
		</motion.div>
	);
};

export default MotionComponent;
