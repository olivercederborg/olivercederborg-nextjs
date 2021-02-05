import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";

import "../css/style.scss";
import "../css/tailwind.css";
import { DribbbleContext } from "../utils/DribbbleContext";
import fetcher from "../utils/fetcher";

export default function App({ Component, pageProps, router }) {
	const { data } = useSWR("/api/dribbble", fetcher);
	const shots = data?.shots;
	const followers = data?.followers;

	const spring = {
		type: "spring",
		damping: 18,
		stiffness: 85,
		when: "afterChildren"
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
					id='page-transition-container'
				>
					<DribbbleContext.Provider value={{ shots, followers }}>
						<Component {...pageProps} key={router.pathname} />
					</DribbbleContext.Provider>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
