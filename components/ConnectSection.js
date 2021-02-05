import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ContactForm from "./ContactForm";
import Footer from "./Footer";

const ConnectSection = (props) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}
		//Connect section
		const connectTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#connect",
				start: "center bottom",
				end: "=-300"
			}
		});
		connectTl
			.fromTo(
				"#connect .section-line",
				1,
				{
					width: 0
				},
				{
					width: "4rem",
					ease: "power3.inOut"
				}
			)
			.fromTo(
				"#connect .section-category",
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
				".connect-h2",
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
				".connect-content",
				1,
				{
					y: -20,
					opacity: 0,
					stagger: 0.3,
					delay: -0.75,
					ease: "power3.out"
				},
				{
					y: 0,
					opacity: 1,
					stagger: 0.3,
					delay: -0.75,
					ease: "power3.out"
				}
			)
			.fromTo(
				"#connect .connect-cta",
				1,
				{
					y: -20,
					opacity: 0,
					stagger: 0.3,
					delay: -0.75,
					ease: "power3.out"
				},
				{
					y: 0,
					opacity: 1,
					stagger: 0.3,
					delay: -0.75,
					ease: "power3.out"
				}
			);
	});

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
					<div className='section-line bg-primaryBrand w-16 h-1 mr-6'></div>
					<p className='section-category text-greyText text-base font-medium'>
						Connect
					</p>
				</div>

				<h2 className='lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white'>
					<div className='connect-h2'>Interested in working with me</div>
					<div className='connect-h2'>or perhaps just talk?</div>
				</h2>

				<p className='md:w-3/5 lg:w-1/3 connect-content text-greyText w-full mt-6 text-base font-normal leading-loose'>
					Reach me on social media, by filling out the contact form or by
					sending an email to{" "}
					<a
						href="mailto:hey@olivercederborg.com?subject=Contact from olivercederborg.com&amp;body=Hey Oliver, I'm contacting you because..."
						target='_blank'
						onClick={() => logEvent("Contact me", "Email link clicked")}
						className='default-focus text-primaryBrand border-b-1 border-backgroundTwo hover:border-primaryBrand duration-200 ease-in-out'
					>
						hey@olivercederborg.com
					</a>
				</p>
				<ContactForm />
			</div>

			<Footer />
		</section>
	);
};

export default ConnectSection;
