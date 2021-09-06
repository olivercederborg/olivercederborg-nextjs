import { useInView } from 'react-intersection-observer' // 1.9K gzipped
import { motion, useAnimation } from 'framer-motion'
import { FC, useEffect } from 'react'

type Props = {
	variants?: {}
	inViewOptions?: {}
	className?: string
	htmlTagName?: string
}

const MotionComponent: FC<Props> = ({
	children,
	variants,
	inViewOptions,
	className
}) => {
	const animation = useAnimation()
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
		...inViewOptions
	})

	useEffect(() => {
		if (inView) {
			animation.start('visible')
		} else {
			animation.start('hidden')
		}
	}, [animation, inView])

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
	}

	return (
		<motion.div
			className={className}
			ref={ref}
			animate={animation}
			initial='hidden'
			variants={variants || defaultVariants}
			exit='hidden'>
			{children}
		</motion.div>
	)
}

export default MotionComponent
