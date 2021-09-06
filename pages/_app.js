import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { cubicBezier } from 'utils/motion'

import '../css/style.scss'
import '../css/tailwind.css'

export default function App({ Component, pageProps, router }) {
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				key={router.pathname}
				transition={cubicBezier}
				exit={{ opacity: 0 }}>
				<Component {...pageProps} key={router.pathname} />
			</motion.div>
		</AnimatePresence>
	)
}
