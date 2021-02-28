import { useState } from "react";
import { motion } from "framer-motion";
import { RiExternalLinkLine } from "react-icons/ri";

//import components
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import MotionComponent from "../components/MotionComponent";

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

export const statsVariants = {
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

export const staggerContainer = {
	visible: {
		opacity: 1,
		transition: {
			// delayChildren: 0.5,
			staggerChildren: 0.1,
			staggerDirection: 1,
			when: "beforeChildren",
			ease: "circInOut"
		}
	},
	hidden: {
		opacity: 0
	}
};

export const staggerChildren = {
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut"
		}
	},
	hidden: {
		y: -50,
		opacity: 0
	}
};

const Portfolio = (props) => {
	const [loadedShots, setLoadedShots] = useState(9);
	const shots = props?.shots;
	const followers = props?.user.followers_count;

	return (
		<Layout>
			<section
				id='portfolio'
				className='bg-backgroundTwo pb-14 md:pb-0 flex flex-col'
			>
				<section className='bg-backgroundOne lg:pb-30 md:pt-44 lg:pt-64 pt-20 pb-16'>
					<div className='lg:grid-cols-3 container grid items-end grid-cols-1 gap-10'>
						<section>
							<div className='flex flex-row items-center'>
								<MotionComponent variants={lineVariants}>
									<div className='section-line bg-primaryBrand w-16 h-1 mr-6'></div>
								</MotionComponent>
								<MotionComponent variants={subHeaderVariants}>
									<p className='section-category text-greyText text-base font-medium'>
										Dribbble shots
									</p>
								</MotionComponent>
							</div>

							<h2 className='section-h2 lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white'>
								<MotionComponent variants={headerVariants}>
									<div className='dribbble-h2'>A collection of my</div>
								</MotionComponent>
								<MotionComponent variants={headerVariants}>
									<div className='dribbble-h2'>dribbble shots. </div>
								</MotionComponent>
							</h2>
						</section>
						<MotionComponent variants={statsVariants}>
							<section className='dribbble-stats'>
								<a
									href='https://dribbble.com/oliver'
									target='_blank'
									className='default-focus bg-lightGrey hover:bg-lighterGrey flex flex-col px-5 py-5 text-base text-white transition-colors duration-200 ease-in-out rounded-sm outline-none'
								>
									<p className='opacity-90 inline-flex items-center text-base'>
										Dribbble Followers
									</p>
									<p className='mt-1 text-3xl font-semibold'>
										{followers ? followers : "Loading"}
									</p>
								</a>
							</section>
						</MotionComponent>
						<MotionComponent variants={statsVariants}>
							<section className='dribbble-stats'>
								<a
									href='https://dribbble.com/oliver'
									target='_blank'
									className='default-focus bg-lightGrey hover:bg-lighterGrey flex flex-col px-5 py-5 text-base text-white transition-colors duration-200 ease-in-out rounded-sm outline-none'
								>
									<p className='opacity-90 inline-flex items-center text-base'>
										Shots Shown
									</p>
									<p className='mt-1 text-3xl font-semibold'>
										{shots?.length
											? `${loadedShots}/${shots.length}`
											: "Loading"}
									</p>
								</a>
							</section>
						</MotionComponent>
					</div>
				</section>
				{!shots?.length && (
					<h2 className='mt-40 text-5xl font-semibold text-center text-white'>
						Check back later.
					</h2>
				)}
				<div className='container pb-20'>
					<motion.div
						id='dribbble_container'
						className='lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-0 mt-20'
						initial='hidden'
						animate='visible'
						variants={staggerContainer}
					>
						{shots?.length
							? shots
									.slice(0, loadedShots)
									.map(({ id, images, html_url, title }) => (
										<motion.a
											key={id}
											href={html_url}
											target='_blank'
											className='group default-focus transition-opacity duration-200 ease-in-out'
											variants={staggerChildren}
										>
											<figure
												id={id}
												key={id}
												className='bg-lighterGrey relative w-full overflow-hidden'
											>
												<div
													id='overlay'
													className='bg-primaryBrand group-hover:bg-opacity-90 justify-items-center absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center px-6 py-10 text-center transition-all duration-200 ease-in-out bg-opacity-0'
												>
													<p className='group-hover:opacity-100 flex flex-col items-center text-3xl font-semibold text-white transition-all duration-200 ease-in-out opacity-0'>
														<span className='p-2 mb-3 bg-white rounded-full opacity-50'>
															<RiExternalLinkLine className='text-primaryBrand text-2xl font-semibold transition-all duration-200 ease-in-out' />
														</span>
														{title}
													</p>
												</div>
												<img
													src={images.hidpi}
													className='dribbble_shot'
													alt={title}
												/>
											</figure>
										</motion.a>
									))
							: null}
					</motion.div>

					{shots?.length ? (
						<>
							{shots && loadedShots !== shots?.length ? (
								<button
									onClick={() => setLoadedShots(shots?.length)}
									className='default-focus bg-primaryBrand hover:bg-lighterGrey md:px-8 mt-14 md:w-auto flex justify-center w-full py-4 mx-auto text-base font-medium text-white duration-300 ease-in-out'
								>
									Load all shots
								</button>
							) : (
								<button
									onClick={() => setLoadedShots(9)}
									className='default-focus bg-primaryBrand hover:bg-lighterGrey md:px-8 mt-14 md:w-auto flex justify-center w-full py-4 mx-auto text-base font-medium text-white duration-300 ease-in-out'
								>
									Load less
								</button>
							)}
						</>
					) : null}
				</div>
				<Footer />
			</section>
			<script> </script>
		</Layout>
	);
};

export default Portfolio;

export async function getStaticProps() {
	const API_KEY = process.env.DRIBBBLE_TOKEN;
	const userRes = await fetch(
		`https://api.dribbble.com/v2/user?access_token=${API_KEY}`
	);
	const shotsRes = await fetch(
		`https://api.dribbble.com/v2/user/shots?access_token=${API_KEY}&per_page=100`
	);
	const user = await userRes.json();
	const shots = await shotsRes.json();

	return { props: { user, shots }, revalidate: 600 };
}
