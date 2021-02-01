import { motion, AnimatePresence } from "framer-motion";

import "../css/style.scss";
import "../css/tailwind.css";
export default function MyApp({ Component, pageProps, router }) {
	const spring = {
		type: "spring",
		damping: 18,
		stiffness: 85,
		when: "afterChildren",
	};
	return (
		<AnimatePresence>
			<div className='page-transition-wrapper overflow-hidden'>
				<motion.div
					transition={spring}
					key={router.pathname}
					initial={{ y: -150, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -150, opacity: 0 }}
					id='page-transition-container'>
					<Component {...pageProps} key={router.pathname} />
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
