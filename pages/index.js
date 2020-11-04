import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaTwitter, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import WorkComponent from "../components/workComponent";

const Index = () => {
	useEffect(() => {
		//gsap
		gsap.to("body", 0, { css: { visibility: "visible" } });
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}
		//timelines defined
		//hero timeline
		const titleRevealTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero-content .reveal-title",
				start: "center bottom",
				end: "=-200",
			},
			defaults: {
				// stagger: 0.3,
				// delay: -0.3
			}
		});
		// titleRevealTl.from(".reveal-title-content h1", 1, {
		// 	y: "150%",
		// 	skewY: 5,
		// 	ease: "Power3.OUT"
		// }).from(".hero-add", 1.5, {
		// 	// y: -20,
		// 	opacity: 0,
		// });
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
			delay: -0.3
		});



		//work section timeline
		const workTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#work .section-h2",
				start: "top center",
				end: "=-300",
			}
		});
		workTl.from("#work .section-line", 1, {
			width: 0,
			delay: 0,
			ease: "power3.out"
		}).from("#work .section-category", 1.5, {
			x: -10,
			opacity: 0,
			stagger: 0.3,
			skewX: 3,
			delay: -0.5,
			ease: "power3.out"
		}).from(".work-h2", 1, {
			x: -70,
			opacity: 0,
			stagger: 0.3,
			skewX: 3,
			delay: -1.5,
			ease: "power3.out"
		});

		//about section timeline
		const aboutTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#about .section-line",
				start: "top center",
				end: "=-300",
			}
		});
		aboutTl.from("#about .section-line", 1, {
			width: 0,
			delay: 0,
			ease: "power3.out"
		}).from("#about .section-category", 1.5, {
			x: -10,
			opacity: 0,
			stagger: 0.3,
			skewX: 5,
			delay: -0.5,
			ease: "power3.out"
		}).from(".about-h2", 1, {
			x: -70,
			opacity: 0,
			stagger: 0.3,
			skewX: 3,
			delay: -1.5,
			ease: "power3.out"
		});

		//about skills timeline
		const skillsTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#skills",
				start: "top center",
				end: "=-300",
			}
		});
		skillsTl.from("#skills .intro-line", 1, {
			width: 0,
			delay: 0,
			ease: "power3.out"
		}).from("#skills .intro-text", 1, {
			opacity: 0,
			x: -10,
			stagger: 0.3,
			skewX: 2,
			delay: -1
		}).from(".skills-content", 1, {
			x: -30,
			opacity: 0,
			stagger: 0.3,
			skewX: 2,
			delay: -0.5,
		});

		const aboutMeTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#aboutme",
				start: "top center",
				end: "=-300",
			}
		});
		aboutMeTl.from("#aboutme .intro-line", 1, {
			width: 0,
			delay: 0,
			ease: "power3.out"
		}).from("#aboutme .intro-text", 1, {
			opacity: 0,
			x: -10,
			stagger: 0.3,
			skewX: 2,
			delay: -1
		}).from(".aboutme-content", 1, {
			x: -30,
			opacity: 0,
			stagger: 0.3,
			skewX: 2,
			delay: -0.5,
		}).from(".about-cta", 1, {
			y: -20,
			opacity: 0,
			stagger: 0.3,
			delay: -0.5,
			ease: "power3.out"
		});

		gsap.from("#about-img", 1, {
			opacity: 0,
			x: -50,
			ease: "power3.out",
			scrollTrigger: {
				trigger: "#about-img",
				start: "top center",
				end: "=-300",
			}
		})
	}, []);

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section
				id='hero'
				className='bg-backgroundOne pt-10 pb-30 md:pt-56 lg:pt-80 lg:pb-56 min-h-screen md:min-h-0 bg-no-repeat xl:bg-hero-pattern bg-large-desk'
			>
				<div className='flex container'>
					<div id="hero-content" className='flex flex-col'>
						<img src="/images/logo.svg" className="hero-contents h-8 mb-30 md:hidden"></img>

						<div clas="">
							<div className="reveal-title relative inline-block">
								<span className="reveal-title-revealer absolute top-0 bottom-0 bg-backgroundOne h-full w-full z-0" />
								<span className="reveal-title-content invisible">
									<h1 className="w-auto inline-block text-4xl lg:text-6xl font-semibold text-white leading-snug">Hey, Im <span className='text-primaryBrand'>Oliver</span></h1>
								</span>
							</div>
						</div>

						<div className="reveal-title relative">
							<span className="reveal-title-revealer absolute top-0 bottom-0 bg-backgroundOne h-full w-full z-0" />
							<span className="reveal-title-content invisible">
								<h1 className="text-3xl lg:text-5xl leading-relaxed font-semibold text-white">a <span className='text-primaryBrand'>self-taught</span> designer</h1>
							</span>
						</div>

						<div className="reveal-title relative">
							<span className="reveal-title-revealer absolute top-0 bottom-0 bg-backgroundOne h-full w-full z-0" />
							<span className="reveal-title-content invisible">
								<h1 className="text-3xl lg:text-5xl leading-relaxed font-semibold text-white">&amp; front-end developer.</h1>
							</span>
						</div>

						{/* <h1 className='text-4xl lg:text-6xl font-semibold text-white leading-tight'>
							<span className="reveal-hero-h1"><div className="hero-h1 leading-tight">Hey, Im <span className='text-primaryBrand'>Oliver</span></div></span>
							<div className="hero-h1 text-3xl lg:text-5xl leading-normal">a <span className='text-primaryBrand'>self-taught</span> designer</div>
							<div className="hero-h1 text-3xl lg:text-5xl leading-normal">&amp; front-end developer.</div>
						</h1> */}
						<div className="hero-add">
							<p className='text-greyText font-normal text-normal mt-8'>
								Stick around to see some of my work.
						</p>
							<AnchorLink
								href='#work'
								offset={() => 72}
								className='text-white text-base font-medium bg-primaryBrand hover:bg-primaryGrey ease-in-out duration-300 px-8 py-4 mt-14 text-center inline-flex w-auto'
							>
								See my work
							</AnchorLink>
						</div>
					</div>
				</div>
			</section>

			<section
				id='work'
				className='bg-backgroundTwo pt-32 pb-48 overflow-x-hidden'
			>
				<div className='container'>
					<div className='flex flex-row items-center'>
						<div className='section-line h-1 w-16 bg-primaryBrand mr-6'></div>
						<p className='section-category text-greyText text-base font-medium'>Work</p>
					</div>

					<h2 className='section-h2 text-white font-semibold text-4xl lg:text-secheader mt-8'>
						<div className="work-h2">Hand-picked projects</div>
						<div className="work-h2">for you to see.</div>
					</h2>
					<WorkComponent>

					</WorkComponent>
				</div>
			</section>

			<section
				id='about'
				className='bg-backgroundOne pt-32 pb-48 overflow-x-hidden'
			>
				<div className='container'>
					<div className='flex flex-row items-center'>
						<div className='section-line h-1 w-16 bg-primaryBrand mr-6'></div>
						<p className='section-category text-greyText text-base font-medium'>About</p>
					</div>

					<h2 className='about-h2 text-white font-semibold text-4xl lg:text-secheader mt-8'>
						Get a closer look at who I am.
					</h2>

					<div className='flex flex-col-reverse lg:flex-row items-start'>
						<div className='w-full lg:w-7/12'>
							<div id="skills" className='flex flex-row items-center mt-16 lg:mt-36'>
								<div className='intro-line h-1 w-6 bg-primaryBrand mr-6'></div>
								<p className='intro-text text-white text-base font-medium'>
									Skills &amp; Tools
								</p>
							</div>

							<p className='skills-content text-greyText font-normal text-base mt-6 leading-loose'>
								HTML/CSS, Javascript, React, Next.js, WordPress,
								Photoshop, Illustrator, Adobe Xd, Figma
							</p>

							<div id="aboutme" className='flex flex-row items-center mt-14'>
								<div className='intro-line h-1 w-6 bg-primaryBrand mr-6'></div>
								<p className='intro-text text-white text-base font-medium'>
									Who am I
								</p>
							</div>

							<p className='aboutme-content text-greyText font-normal text-base mt-6 leading-loose'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in
								reprehenderit.
							</p>

							<div className="about-cta">
								<AnchorLink
									href='#connect'
									className='text-white text-base font-medium bg-primaryBrand hover:bg-primaryGrey ease-in-out duration-300 px-8 py-4 mt-12 inline-flex w-auto'
								>
									Get in touch
								</AnchorLink>
							</div>
						</div>

						<div className='flex w-7/12 md:w-5/12 justify-end'>
							<img
								id="about-img"
								src='/images/about-oliver.svg'
								alt='About Oliver Cederborg'
								className='max-h-sm mt-30'
							/>
						</div>
					</div>
				</div>
			</section>

			<section
				id='connect'
				className='bg-backgroundTwo pt-32 pb-14 md:pb-0 overflow-x-hidden'
			>
				<div className='container pb-36 md:pb-48'>
					<div className='flex flex-row items-center'>
						<div className='h-1 w-16 bg-primaryBrand mr-6'></div>
						<p className='text-greyText text-base font-medium'>Connect</p>
					</div>

					<h2 className='text-white font-semibold text-4xl lg:text-secheader mt-8'>
						Interested in working with me <br></br>or perhaps just talk?
					</h2>

					<a
						href='mailto:hey@olivercederborg.com'
						className='text-white text-base font-medium bg-primaryBrand hover:bg-primaryGrey ease-in-out duration-300 px-8 py-4 mt-12 inline-flex w-auto'
					>
						Drop an email
					</a>
				</div>
				<footer className='container pb-10 text-gray-600 flex flex-col-reverse md:flex-row justify-between items-center lg:items-center'>
					<p><a href="mailto:hey@olivercederborg.com" className="hover:text-greyText ease-in-out duration-300 hover:underline">hey@olivercederborg.com</a></p>
					<p className='hover:text-greyText ease-in-out duration-300 mb-5 md:mb-0'>
						&copy; 2020 Oliver Cederborg
					</p>

					<div className='flex flex-row text-white mb-10 md:mb-0'>
						<a
							href='https://dribbble.com/oliver'
							target='_blank'
							className='text-xl mx-1 p-4 bg-primaryGrey hover:bg-primaryBrand ease-in-out duration-300'
						>
							<FaDribbble />
						</a>
						<a
							href='https://twitter.com/olivercederborg'
							target='_blank'
							className='text-xl mx-1 p-4 bg-primaryGrey hover:bg-primaryBrand ease-in-out duration-300'
						>
							<FaTwitter />
						</a>
						<a
							href='https://instagram.com/olivercederborg'
							target='_blank'
							className='text-xl mx-1 p-4 bg-primaryGrey hover:bg-primaryBrand ease-in-out duration-300'
						>
							<FaInstagram />
						</a>
						<a
							href='https://www.linkedin.com/in/olivercederborg'
							target='_blank'
							className='text-xl mx-1 p-4 bg-primaryGrey hover:bg-primaryBrand ease-in-out duration-300'
						>
							<FaLinkedin />
						</a>
					</div>
				</footer>
			</section>
		</Layout>
	);
};

export default Index;
