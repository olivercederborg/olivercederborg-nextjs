import AnchorLink from "react-anchor-link-smooth-scroll";
import { logEvent } from "../utils/analytics";

import MotionComponent from "./MotionComponent";

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

const AboutSection = ({ sectionNumber }) => {
	return (
		<section
			id='about'
			className={
				"pt-26 pb-32 md:pt-32 md:pb-48 overflow-x-hidden" +
				(sectionNumber % 2 === 0
					? " bg-backgroundTwo "
					: sectionNumber % 2 != 0
					? " bg-backgroundOne"
					: "")
			}
		>
			<div className='container'>
				<div className='flex flex-row items-center'>
					<MotionComponent variants={lineVariants}>
						<div className='section-line bg-primaryBrand w-16 h-1 mr-6'></div>
					</MotionComponent>

					<MotionComponent variants={subHeaderVariants}>
						<p className='section-category text-greyText text-base font-medium'>
							About
						</p>
					</MotionComponent>
				</div>

				<MotionComponent variants={headerVariants}>
					<h2 className='about-h2 lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white'>
						Get a closer look at who I am.
					</h2>
				</MotionComponent>

				<div className='lg:flex-row lg:mt-30 flex flex-col-reverse items-start mt-16'>
					<div className='lg:w-7/12 w-full'>
						<div id='aboutme' className='flex flex-row items-center'>
							<MotionComponent variants={lineVariants}>
								<div className='intro-line bg-primaryBrand w-6 h-1 mr-6'></div>
							</MotionComponent>
							<MotionComponent variants={subHeaderVariants}>
								<p className='intro-text text-base font-medium text-white'>
									Who am I
								</p>
							</MotionComponent>
						</div>
						<MotionComponent variants={paragraphVariants}>
							<p className='aboutme-content text-greyText mt-6 text-base font-normal leading-loose'>
								I'm Oliver Cederborg, 23 years old and from Denmark.{" "}
								<br></br>Digital design has been an interest of mine for
								many years, and I work with anything from logo design to
								UI design and front-end development. <br></br>All the
								skills and tools I use, are self-taught over many years
								of practice and expanding my horizons.
							</p>
						</MotionComponent>

						<div id='skills' className='flex flex-row items-center mt-12'>
							<MotionComponent variants={lineVariants}>
								<div className='intro-line bg-primaryBrand w-6 h-1 mr-6'></div>
							</MotionComponent>

							<MotionComponent variants={subHeaderVariants}>
								<p className='intro-text text-base font-medium text-white'>
									Skills &amp; Tools
								</p>
							</MotionComponent>
						</div>
						<MotionComponent variants={paragraphVariants}>
							<p className='skills-content text-greyText mt-6 text-base font-normal leading-loose'>
								Design: Figma, Photoshop, Illustrator, After Effects
							</p>
						</MotionComponent>

						<MotionComponent variants={paragraphVariants}>
							<p className='skills-content text-greyText mt-2 text-base font-normal leading-loose'>
								Development: JavaScript, React, Next.js, HTML, CSS/SCSS,
								TailwindCSS, WordPress
							</p>
						</MotionComponent>
						<MotionComponent variants={buttonVariants}>
							<div className='about-cta md:flex-row flex flex-col'>
								<AnchorLink
									href='#connect'
									onClick={() =>
										logEvent(
											`Get in touch`,
											`User clicked CTA on about section`
										)
									}
									className='default-focus bg-primaryBrand hover:bg-lighterGrey mt-14 inline-flex items-center justify-center w-auto px-8 py-4 text-base font-medium text-white duration-300 ease-in-out'
								>
									Get in touch
								</AnchorLink>
							</div>
						</MotionComponent>
					</div>

					<div className='md:w-5/12 lg:mb-0 lg:self-start lg:mt-0 flex flex-col justify-center w-9/12 mt-10 mb-10'>
						<MotionComponent variants={imgVariants}>
							<img
								id='about-img'
								src='/images/about-oliver.webp'
								alt='About Oliver Cederborg'
								className='md:max-h-sm md:mt-0 object-contain w-full h-full pointer-events-none'
							/>
						</MotionComponent>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
