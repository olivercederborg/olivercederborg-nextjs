import Head from "next/head";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { logEvent } from "../utils/analytics";

//import components
import Layout from "../components/layout";
import WorkSection from "../components/workSection";
import AboutSection from "../components/aboutSection";
import ConnectSection from "../components/connectSection";

const Index = () => {
	useEffect(() => {
		//gsap
		gsap.to("body", 0, { css: { visibility: "visible" } });
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}
		//hero timeline
		const titleRevealTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero-content .reveal-title",
				start: "top bottom",
				end: "=-200",
			},
		});
		titleRevealTl.to(".reveal-title-content", 0, {
			visibility: "visible",
			delay: 0.3
		}).to(".reveal-title-revealer", 1, {
			scaleX: 0,
			transformOrigin: "right",
			ease: "power4.inOut",
			stagger: 0.6
		}).fromTo(".hero-add", 1, {
			y: -20,
			opacity: 0,
		}, {
			y: 0,
			opacity: 1,
			delay: -0.3,
			stagger: 0.3,
			ease: "power3.out",
		});
	});

	return (
		<Layout>
			<Head>
				<link rel="preload" as="image" href="/images/hero-graphic.webp" media="(min-width: 768px)" />
				<link rel="preload" as="image" href="/images/lunar-background.webp" media="(min-width: 768px)" />
				<link rel="preload" as="image" href="/images/lunar-first.webp" media="(min-width: 768px)" />
				<link rel="preload" as="image" href="/images/lunar-second.webp" media="(min-width: 768px)" />
				{/* <link rel="preload" as="image" href="/images/tablet-background.webp" media="(min-width: 768px)" /> */}
				<link rel="preload" as="image" href="/images/nordsjaelland-osteopati-case-tablet.webp" media="(min-width: 768px)" />
				<link rel="preload" as="image" href="/images/noyer-case-tablet.webp" media="(min-width: 768px)" />

				<link rel="preload" as="image" href="/images/lunar-way-project-mobile.webp" media="(max-width: 767px)" />
				<link rel="preload" as="image" href="/images/noyer-project-mobile.webp" media="(max-width: 767px)" />
				<link rel="preload" as="image" href="/images/nordsjaelland-osteopati-project-mobile.webp" media="(max-width: 767px)" />
			</Head>
			<section
				id='hero'
				className='min-h-screen pt-10 bg-no-repeat bg-backgroundOne pb-30 md:pt-56 lg:pt-80 lg:pb-56 md:min-h-0 xl:bg-hero-pattern bg-large-desk'
			>
				<div className='container flex'>
					<div id="hero-content" className='flex flex-col items-start w-full'>
						<img src="/images/logo.svg" className="h-8 mb-20 md:hidden"></img>

						<div>
							<div className="relative inline-block mb-4 reveal-title">
								<span className="absolute top-0 bottom-0 z-0 w-full h-full reveal-title-revealer bg-backgroundOne" />
								<span className="invisible reveal-title-content">
									<h1 className="inline-block w-auto text-4xl font-semibold leading-snug text-white lg:text-6xl">Hey, Im <span className='text-primaryBrand'>Oliver</span></h1>
								</span>
							</div>
						</div>

						<div className="relative mb-4 reveal-title">
							<span className="absolute top-0 bottom-0 z-0 w-full h-full reveal-title-revealer bg-backgroundOne" />
							<span className="invisible reveal-title-content">
								<h1 className="text-3xl font-semibold text-white lg:text-5xl lg:leading-relaxed">a <span className='text-primaryBrand'>self-taught</span> designer</h1>
							</span>
						</div>

						<div className="relative reveal-title">
							<span className="absolute top-0 bottom-0 z-0 w-full h-full reveal-title-revealer bg-backgroundOne" />
							<span className="invisible reveal-title-content">
								<h1 className="text-3xl font-semibold text-white lg:text-5xl lg:leading-relaxed">&amp; front-end developer.</h1>
							</span>
						</div>

						<p className='mt-8 font-normal hero-add text-greyText text-normal'>
							Stick around to see some of my work.
							</p>
						<div className="flex w-full text-center hero-add md:w-auto">
							<AnchorLink
								href='#work'
								offset={() => 72}
								onClick={() => logEvent(`Hero CTA`, `User clicked CTA on hero section`)}
								className='inline-flex justify-center w-full py-4 text-base font-medium text-center text-white duration-300 ease-in-out bg-primaryBrand hover:bg-primaryGrey md:px-8 mt-14'
							>
								See my work
							</AnchorLink>
						</div>
					</div>
				</div>
			</section>
			<WorkSection sectionNumber={2} />
			<AboutSection sectionNumber={3} />
			<ConnectSection sectionNumber={4} />
			
			<script> </script>
		</Layout>
	);
};

export default Index;