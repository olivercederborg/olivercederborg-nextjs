export const cubicBezier = [0.6, 0.01, -0.05, 0.95]

export const delayChildren = {
	visible: {
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.3
		}
	}
}

export const headerVariants = {
	hidden: {
		translateX: -50,
		skewX: 3,
		opacity: 0
	},
	visible: {
		translateX: 0,
		opacity: 1,
		skewX: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	}
}

export const subHeaderVariants = {
	visible: {
		translateX: 0,
		opacity: 1,
		skewX: 0,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: 'easeOut'
		}
	},
	hidden: {
		translateX: -50,
		skewX: 3,
		opacity: 0
	}
}

export const lineVariants = {
	visible: {
		scaleX: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: 'easeOut'
		}
	},
	hidden: {
		originX: 0,
		scaleX: 0
	}
}
export const imgVariants = {
	visible: {
		opacity: 1,
		translateX: 0,
		transition: {
			duration: 0.5,
			delay: 0.8,
			ease: 'easeOut'
		}
	},
	hidden: {
		opacity: 0,
		translateX: -50
	}
}

export const paragraphVariants = {
	visible: {
		translateY: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
			delay: 0.6,
			ease: 'easeOut'
		}
	},
	hidden: {
		translateY: -30,
		opacity: 0
	}
}

export const buttonVariants = {
	visible: {
		translateY: 0,
		opacity: 1,
		skewX: 0,
		transition: {
			duration: 0.75,
			delay: 0.8,
			ease: 'easeOut'
		}
	},
	hidden: {
		translateY: -20,
		opacity: 0
	}
}
