import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from "axios";
import { RiExternalLinkLine } from "react-icons/ri";

//import components
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Portfolio = (props) => {
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
				end: "=-300",
			},
		});

		const dribbbleShotTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#dribbble_container",
				start: "top bottom",
				end: "=-300",
			},
		});

		portfolioTl
			.fromTo(
				"#portfolio .section-line",
				1,
				{
					width: 0,
				},
				{
					width: "4rem",
					ease: "power3.inOut",
				}
			)
			.from("#portfolio .section-category", 1.5, {
				x: -10,
				opacity: 0,
				stagger: 0.3,
				delay: -0.5,
				ease: "power3.out",
			})
			.from(".dribbble-h2", 1, {
				x: -70,
				opacity: 0,
				stagger: 0.3,
				skewX: 3,
				delay: -1.5,
				ease: "power3.out",
			})
			.from(".dribbble-stats", 1, {
				y: -30,
				opacity: 0,
				stagger: 0.3,
				delay: -1.5,
				ease: "power3.out",
			});

		dribbbleShotTl
			.from("figure", 1, {
				scaleY: 0,
				transformOrigin: "top",
				ease: "power4.inOut",
				stagger: 0.15,
				delay: 0.5,
			})
			.fromTo(
				".dribbble_shot",
				2,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					delay: -1.75,
					stagger: 0.15,
					ease: "power3.out",
				}
			);
	});

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
								<div className='dribbble-h2'>dribbble shots.</div>
							</h2>
						</section>
						<section className='dribbble-stats'>
							<a
								href='https://dribbble.com/oliver'
								target='_blank'
								className='default-focus bg-primaryBrand hover:bg-primaryGrey flex flex-col px-5 py-5 text-base text-pink-200 transition-colors duration-200 ease-in-out rounded-sm outline-none'
							>
								<p className='opacity-90 inline-flex items-center text-base'>
									Dribbble Followers
									<RiExternalLinkLine className='ml-2 text-lg' />
								</p>
								<p className='mt-1 text-4xl font-semibold'>
									{props.account.followers_count}
								</p>
							</a>
						</section>
						<section className='dribbble-stats'>
							<a
								href='https://dribbble.com/oliver'
								target='_blank'
								className='default-focus bg-primaryBrand hover:bg-primaryGrey flex flex-col px-5 py-5 text-base text-white transition-colors duration-200 ease-in-out rounded-sm'
							>
								<p className='opacity-90 inline-flex items-center text-base'>
									Dribbble Shots
									<RiExternalLinkLine className='ml-2 text-lg' />
								</p>
								<p className='mt-1 text-4xl font-semibold'>
									{props.shot.length}
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
						{props.shot.map(({ id, images, html_url }) => (
							<a
								key={id}
								href={html_url}
								className='default-focus hover:opacity-50 transition-opacity duration-200 ease-in-out'
							>
								<figure
									key={id}
									className='bg-primaryGrey w-full overflow-hidden'
								>
									<img src={images.hidpi} className='dribbble_shot' />
								</figure>
							</a>
						))}
					</div>
				</div>
				<Footer />
			</section>
			<script> </script>
		</Layout>
	);
};

export async function getStaticProps() {
	const resShots = await axios.get(
		`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_TOKEN}`
	);
	const resAccount = await axios.get(
		`https://api.dribbble.com/v2/user?access_token=${process.env.DRIBBBLE_TOKEN}`
	);
	const shot = await resShots.data;
	const account = await resAccount.data;

	console.log(`Show data fetched. Count: ${shot.length}`);

	return {
		props: {
			shot,
			account,
		},
	};
}

export default Portfolio;
