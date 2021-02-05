import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RiExternalLinkLine } from "react-icons/ri";

//import components
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { DribbbleContext } from "../utils/DribbbleContext";

const Portfolio = (props) => {
	const { shots, followers } = useContext(DribbbleContext);
	const [loadedShots, setLoadedShots] = useState(9);

	useEffect(() => {
		gsap.to("body", 0, { css: { visibility: "visible" } });

		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}

		//Connect section
		const portfolioTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#portfolio",
				start: "top bottom",
				end: "=-300"
			}
		});

		portfolioTl
			.fromTo(
				"#portfolio .section-line",
				1,
				{
					width: 0,
					ease: "power3.inOut"
				},
				{
					width: "4rem",
					ease: "power3.inOut"
				}
			)
			.fromTo(
				"#portfolio .section-category",
				1.5,
				{
					x: -10,
					opacity: 0,
					stagger: 0.3,
					delay: -0.5,
					ease: "power3.out"
				},
				{
					x: 0,
					opacity: 1,
					stagger: 0.3,
					delay: -0.5,
					ease: "power3.out"
				}
			)
			.fromTo(
				".dribbble-h2",
				1,
				{
					x: -70,
					opacity: 0,
					stagger: 0.3,
					skewX: 3,
					delay: -1.5,
					ease: "power3.out"
				},
				{
					x: 0,
					opacity: 1,
					stagger: 0.3,
					skewX: 0,
					delay: -1.5,
					ease: "power3.out"
				}
			)
			.fromTo(
				".dribbble-stats",
				1,
				{
					y: -30,
					opacity: 0,
					stagger: 0.3,
					delay: -1.5,
					ease: "power3.out"
				},
				{
					y: 0,
					opacity: 1,
					stagger: 0.3,
					delay: -1.5,
					ease: "power3.out"
				}
			);

		gsap.fromTo(
			"figure",
			1,
			{
				scaleY: 0,
				skew: 0,
				transformOrigin: "top"
			},
			{
				scrollTrigger: ".dribbble_shot",
				scaleY: 1,
				skew: 0,
				transformOrigin: "top",
				ease: "power4.inOut",
				stagger: 0.15,
				delay: 0.5
			}
		);
		gsap.fromTo(
			".dribbble_shot",
			2,
			{
				opacity: 0
			},
			{
				opacity: 1,
				delay: 1.3,
				stagger: 0.15,
				ease: "power3.out",
				scrollTrigger: ".dribbble_shot"
			}
		);
		gsap.fromTo(
			"#overlay",
			2,
			{
				opacity: 0
			},
			{
				opacity: 1,
				delay: 0.5,
				stagger: 0.15,
				ease: "power3.out",
				scrollTrigger: ".dribbble_shot"
			}
		);
	}, []);

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
								<div className='section-line bg-primaryBrand w-16 h-1 mr-6'></div>
								<p className='section-category text-greyText text-base font-medium'>
									Dribbble shots
								</p>
							</div>

							<h2 className='section-h2 lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white'>
								<div className='dribbble-h2'>A collection of my</div>
								<div className='dribbble-h2'>dribbble shots. </div>
							</h2>
						</section>
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
									{shots
										? `${loadedShots}/${shots.length}`
										: "Loading"}
								</p>
							</a>
						</section>
					</div>
				</section>
				<div className='container pb-20'>
					<div
						id='dribbble_container'
						className='lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-0 mt-20'
					>
						{shots ? (
							shots
								.slice(0, loadedShots)
								.map(({ id, images, html_url, title }) => (
									<a
										key={id}
										href={html_url}
										target='_blank'
										className='group default-focus transition-opacity duration-200 ease-in-out'
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
									</a>
								))
						) : (
							<></>
						)}
					</div>

					{shots && loadedShots !== shots.length ? (
						<button
							onClick={() => setLoadedShots(shots.length)}
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
				</div>
				<Footer />
			</section>
			<script> </script>
		</Layout>
	);
};

export default Portfolio;
