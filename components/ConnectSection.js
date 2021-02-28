import { useEffect } from "react";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import Footer from "./Footer";
import MotionComponent from "./MotionComponent";

// export const staggerContainer = {
// 	visible: {
// 		opacity: 1,
// 		transition: {
// 			delayChildren: 0.5,
// 			staggerChildren: 0.5,
// 			staggerDirection: 1
// 		}
// 	},
// 	hidden: {
// 		opacity: 0
// 	}
// };

export const staggerChildren = {
	visible: {
		opacity: 1
	},
	hidden: {
		opacity: 0
	}
};

export const headerVariants = {
	visible: {
		x: 0,
		opacity: 1,
		skewX: 0,
		transition: {
			duration: 0.5,
			delay: 0.5,
			ease: "easeOut"
		}
	},
	hidden: {
		x: -50,
		skewX: 3,
		opacity: 0
	}
};

export const subHeaderVariants = {
	visible: {
		x: 0,
		opacity: 1,
		skewX: 0,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: "easeOut"
		}
	},
	hidden: {
		x: -50,
		skewX: 3,
		opacity: 0
	}
};

export const lineVariants = {
	visible: {
		scaleX: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: "easeOut"
		}
	},
	hidden: {
		originX: 0,
		scaleX: 0
	}
};
export const imgVariants = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			delay: 0.8,
			ease: "easeOut"
		}
	},
	hidden: {
		opacity: 0,
		x: -50
	}
};

export const paragraphVariants = {
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
			delay: 0.6,
			ease: "easeOut"
		}
	},
	hidden: {
		y: -30,
		opacity: 0
	}
};

export const buttonVariants = {
	visible: {
		y: 0,
		opacity: 1,
		skewX: 0,
		transition: {
			duration: 0.75,
			delay: 0.8,
			ease: "easeOut"
		}
	},
	hidden: {
		y: -20,
		opacity: 0
	}
};

const ConnectSection = (props) => {
	return (
		<section
			id='connect'
			className={
				"pt-26 md:pt-32 pb-14 md:pb-0 overflow-x-hidden" +
				(props.sectionNumber % 2 === 0
					? " bg-backgroundTwo "
					: props.sectionNumber % 2 != 0
					? " bg-backgroundOne"
					: "")
			}
		>
			<div className='pb-36 md:pb-48 container'>
				<div className='flex flex-row items-center'>
					<MotionComponent variants={lineVariants}>
						<div className='section-line bg-primaryBrand w-16 h-1 mr-6'></div>
					</MotionComponent>
					<MotionComponent variants={subHeaderVariants}>
						<p className='section-category text-greyText text-base font-medium'>
							Connect
						</p>
					</MotionComponent>
				</div>

				<h2 className='lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white'>
					<MotionComponent variants={headerVariants}>
						<div className='connect-h2'>
							Interested in working with me
						</div>
					</MotionComponent>
					<MotionComponent variants={headerVariants}>
						<div className='connect-h2'>or perhaps just talk?</div>
					</MotionComponent>
				</h2>
				<MotionComponent variants={paragraphVariants}>
					<p className='md:w-3/5 lg:w-1/3 connect-content text-greyText w-full mt-6 text-base font-normal leading-loose'>
						Reach me on social media, by filling out the contact form or
						by sending an email to{" "}
						<a
							href="mailto:hey@olivercederborg.com?subject=Contact from olivercederborg.com&amp;body=Hey Oliver, I'm contacting you because..."
							target='_blank'
							onClick={() =>
								logEvent("Contact me", "Email link clicked")
							}
							className='default-focus text-primaryBrand border-b-1 border-backgroundTwo hover:border-primaryBrand duration-200 ease-in-out'
						>
							hey@olivercederborg.com
						</a>
					</p>
				</MotionComponent>
				<ContactForm />
			</div>

			<Footer />
		</section>
	);
};

export default ConnectSection;
