import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { logEvent } from "../utils/analytics";

const HeroSection = (props) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}
		//hero timeline
		const titleRevealTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero-content .reveal-title",
				start: "top bottom",
				end: "=-200"
			}
		});
		titleRevealTl
			.to(".reveal-title-content", 0, {
				visibility: "visible",
				delay: 0.3
			})
			.to(".reveal-title-revealer", 1, {
				scaleX: 0,
				transformOrigin: "right",
				ease: "power4.inOut",
				stagger: 0.6
			})
			.fromTo(
				".hero-add",
				1,
				{
					y: -20,
					opacity: 0
				},
				{
					y: 0,
					opacity: 1,
					delay: -0.3,
					stagger: 0.3,
					ease: "power3.out"
				}
			);
	});

	return (
		<section
			id='hero'
			className='bg-backgroundOne lg:bg-hero-pattern lg:bg-large-desk xl:bg-none bg-no-repeat'
		>
			<div className='pb-30 md:pt-56 lg:pt-60 xl:pt-72 lg:pb-56 md:min-h-0 xl:bg-hero-pattern bg-large-desk xl:bg-large-desk-xl container flex min-h-screen pt-10 bg-no-repeat'>
				<div id='hero-content' className='flex flex-col items-start w-full'>
					<img
						src='/images/logo.svg'
						className='md:hidden h-8 mb-20'
					></img>

					<div>
						<div className='reveal-title md:mb-4 relative mb-2'>
							<span className='reveal-title-revealer bg-backgroundOne absolute top-0 bottom-0 z-0 w-full h-full' />
							<span className='reveal-title-content invisible'>
								<h1 className='lg:text-6xl lg:leading-snug md:text-5xl py-2 text-4xl font-semibold leading-normal text-white'>
									Hey, Im{" "}
									<span className='text-primaryBrand'>Oliver</span>
								</h1>
							</span>
						</div>
					</div>

					<div className='reveal-title md:mb-4 relative mb-2'>
						<span className='reveal-title-revealer bg-backgroundOne absolute top-0 bottom-0 z-0 w-full h-full' />
						<span className='reveal-title-content invisible'>
							<h1 className='lg:text-5xl lg:leading-normal md:text-4xl py-1 text-3xl font-semibold leading-normal text-white'>
								a <span className='text-primaryBrand'>self-taught</span>{" "}
								designer
							</h1>
						</span>
					</div>

					<div className='reveal-title relative'>
						<span className='reveal-title-revealer bg-backgroundOne absolute top-0 bottom-0 z-0 w-full h-full' />
						<span className='reveal-title-content invisible'>
							<h1 className='lg:text-5xl lg:leading-normal md:text-4xl py-1 text-3xl font-semibold leading-normal text-white'>
								&amp; front-end developer.
							</h1>
						</span>
					</div>

					<p className='hero-add text-greyText text-normal mt-8 font-normal'>
						Stick around to see some of my work.
					</p>
					<div className='hero-add md:w-auto flex w-full text-center'>
						<AnchorLink
							href='#work'
							offset={() => 72}
							onClick={() =>
								logEvent(`Hero CTA`, `User clicked CTA on hero section`)
							}
							className='default-focus bg-primaryBrand hover:bg-lighterGrey md:px-8 mt-14 inline-flex justify-center w-full py-4 text-base font-medium text-center text-white duration-300 ease-in-out'
						>
							See my work
						</AnchorLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
