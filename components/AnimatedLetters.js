import { motion } from 'framer-motion'

import { cubicBezier, delayChildren, letterAnimation } from 'utils/motion'

const aniTest = {
	initial: { opacity: 0, translateY: '100%' },
	animate: {
		opacity: 1,
		translateY: '0',
		skewY: 1,
		transition: {
			ease: cubicBezier,
			duration: 0.5
		}
	},
	exit: {
		opacity: 0,
		translateY: '100%'
	}
}

const AnimatedLetters = ({ title }) => {
	return (
		<div>
			{[...title].map((letter, i) => (
				<motion.span key={i} variants={aniTest}>
					{letter}
				</motion.span>
			))}
		</div>
	)
}

export default AnimatedLetters
