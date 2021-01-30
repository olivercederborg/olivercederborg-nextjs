import Head from "next/head";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { logEvent } from "../utils/analytics";
import axios from "axios";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

//import components
import Layout from "../components/layout";

const Portfolio = (props) => {
	useEffect(() => {
		gsap.to("body", 0, { css: { visibility: "visible" } });
	});

	return (
		<Layout>
			<section className='bg-backgroundTwo flex flex-col pb-20'>
				<section className='bg-backgroundOne pb-30 pt-64'>
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
						<section className=''>
							<div className='bg-primaryBrand flex flex-col px-5 py-4 text-base text-white'>
								<a
									href='https://dribbble.com/oliver'
									target='_blank'
									className='inline-flex items-center py-1 text-pink-100'
								>
									Dribbble Followers
									<RiExternalLinkLine className='ml-2 text-xl' />
								</a>
								<p className='text-4xl font-semibold'>
									{props.account.followers_count}
								</p>
							</div>
						</section>
						<section className=''>
							<div className='bg-primaryBrand flex flex-col px-5 py-4 text-base text-white'>
								<a
									href='https://dribbble.com/oliver'
									target='_blank'
									className='inline-flex items-center py-1 text-pink-100'
								>
									Dribbble Shots
									<RiExternalLinkLine className='ml-2 text-xl' />
								</a>
								<p className='text-4xl font-semibold'>
									{props.shot.length}
								</p>
							</div>
						</section>
					</div>
				</section>
				<div className='container'>
					<div className='lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-0 mt-20'>
						{props.shot.map(({ id, images, html_url }) => (
							<a key={id} href={html_url}>
								<figure
									key={id}
									className='bg-backgroundOne w-full overflow-hidden'
								>
									<img
										src={images.hidpi}
										className='hover:opacity-50 transition-opacity duration-200 ease-in-out'
									/>
								</figure>
							</a>
						))}
					</div>
				</div>
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
