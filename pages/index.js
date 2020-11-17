import Head from "next/head";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
				<link rel="preload" as="image" href="/images/lunar-background.png" media="(min-width: 768px)" />
				<link rel="preload" as="image" href="/images/lunar-first.png" media="(min-width: 768px)" />
				<link rel="preload" as="image" href="/images/lunar-second.png" media="(min-width: 768px)" />
				{/* <link rel="preload" as="image" href="/images/tablet-background.png" media="(min-width: 768px)" /> */}
				<link rel="preload" as="image" href="/images/nordsjaelland-osteopati-case-tablet.png" media="(min-width: 768px)" />
				<link rel="preload" as="image" href="/images/noyer-case-tablet.png" media="(min-width: 768px)" />

				<link rel="preload" as="image" href="/images/lunar-way-project-mobile.png" media="(max-width: 767px)" />
				<link rel="preload" as="image" href="/images/noyer-project-mobile.png" media="(max-width: 767px)" />
				<link rel="preload" as="image" href="/images/nordsjaelland-osteopati-project-mobile.png" media="(max-width: 767px)" />
			</Head>
			<section
				id='hero'
				className='bg-backgroundOne pt-10 pb-30 md:pt-56 lg:pt-80 lg:pb-56 min-h-screen md:min-h-0 bg-no-repeat xl:bg-hero-pattern bg-large-desk'
			>
				<div className='flex container'>
					<div id="hero-content" className='flex flex-col items-start w-full'>
						<img src="/images/logo.svg" className="h-8 mb-20 md:hidden"></img>

						<div>
							<div className="reveal-title relative inline-block mb-4">
								<span className="reveal-title-revealer absolute top-0 bottom-0 bg-backgroundOne h-full w-full z-0" />
								<span className="reveal-title-content invisible">
									<h1 className="w-auto inline-block text-4xl lg:text-6xl font-semibold text-white leading-snug">Hey, Im <span className='text-primaryBrand'>Oliver</span></h1>
								</span>
							</div>
						</div>

						<div className="reveal-title relative mb-4">
							<span className="reveal-title-revealer absolute top-0 bottom-0 bg-backgroundOne h-full w-full z-0" />
							<span className="reveal-title-content invisible">
								<h1 className="text-3xl lg:text-5xl lg:leading-relaxed font-semibold text-white">a <span className='text-primaryBrand'>self-taught</span> designer</h1>
							</span>
						</div>

						<div className="reveal-title relative">
							<span className="reveal-title-revealer absolute top-0 bottom-0 bg-backgroundOne h-full w-full z-0" />
							<span className="reveal-title-content invisible">
								<h1 className="text-3xl lg:text-5xl lg:leading-relaxed font-semibold text-white">&amp; front-end developer.</h1>
							</span>
						</div>

						<p className='hero-add text-greyText font-normal text-normal mt-8'>
							Stick around to see some of my work.
							</p>
						<div className="hero-add flex text-center w-full md:w-auto">
							<AnchorLink
								href='#work'
								offset={() => 72}
								onClick={() => logEvent(`Hero CTA`, `User clicked CTA on hero section`)}
								className='text-white text-base font-medium bg-primaryBrand hover:bg-primaryGrey ease-in-out duration-300 md:px-8 py-4 mt-14 text-center justify-center inline-flex w-full'
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