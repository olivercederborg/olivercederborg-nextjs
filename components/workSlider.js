import { useState, useEffect } from "react";
import { workCases } from "../workCases";;
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

const WorkSlider = () => {
	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);
	}

	//case slider
	const [count, setCount] = useState(1);
	const maxCount = workCases.length;

	let workCase = workCases[count - 1];

	const changeCounter = (value) => {
		if (value === "increment" && count != maxCount) {
			setCount((prevState) => prevState + 1);
			nextCase();
		} else if (value === "decrement" && count != 1) {
			setCount((prevState) => prevState - 1);
			prevCase();
		} else if (value === "increment" && count == maxCount) {
			setCount(1);
			nextCase();
		} else if (value === "decrement" && count == 1) {
			setCount(maxCount);
			prevCase();
		}
	};

	//next case animation
	const nextCase = () => {
		const nextCaseTl = gsap.timeline();
		const nextCaseAni = () => {
			nextCaseTl.fromTo("#case-text-content", 1.5, {
				opacity: 0,
				x: -30,
			}, {
				opacity: 1,
				x: 0,
				ease: "power4.out"
			}).fromTo("#case-image, #case-image-mobile", 1.5, {
				opacity: 0,
				x: -50,
			}, {
				opacity: 1,
				x: 0,
				delay: -1.5,
				ease: "power4.out"
			})
		}
		if (nextCaseTl.isActive() === false) {
			nextCaseAni();
		}
	}

	//next case animation
	const prevCase = () => {
		const prevCaseTl = gsap.timeline();
		const prevCaseAni = () => {
			prevCaseTl.fromTo("#case-text-content", 1.5, {
				opacity: 0,
				x: 30,
			}, {
				opacity: 1,
				x: 0,
				ease: "power4.out"
			}).fromTo("#case-image, #case-image-mobile", 1.5, {
				opacity: 0,
				x: 50,
			}, {
				opacity: 1,
				x: 0,
				delay: -1.5,
				ease: "power4.out"
			})
		}
		if (prevCaseTl.isActive() === false) {
			prevCaseAni();
		}
	}

	useEffect(() => {
		gsap.to("body", 0, { css: { visibility: "visible" } });

		//case text timeline
		const caseTextTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#case-nav",
				start: "center bottom",
				end: "=-300",
			}
		});

		caseTextTl.from("#case-nav", 2, {
			y: -20,
			opacity: 0,
			delay: 0,
			ease: "power3.out"
		}).from("#case-header", 1, {
			y: -20,
			opacity: 0,
			stagger: 0.3,
			delay: -1.5,
			ease: "power3.out"
		}).fromTo("#case-category-line", 1, {
			width: 0,
		}, {
			width: "1.5rem",
			stagger: 0.3,
			delay: -1.5,
			ease: "power3.inOut"
		}).from("#case-category", 1, {
			x: -10,
			opacity: 0,
			stagger: 0.3,
			delay: -1,
			ease: "power3.out"
		}).from("#case-description", 1, {
			y: -20,
			opacity: 0,
			stagger: 0.3,
			delay: -1,
			ease: "power3.out"
		}).from(".case-cta", 1, {
			opacity: 0,
			y: -20,
			stagger: 0.3,
			delay: -0.7,
			ease: "power3.out"
		});

		//case image
		gsap.from("#case-image", 1.3, {
			scrollTrigger: {
				trigger: "#case-image",
				start: "top bottom",
				end: "=-300",
			},
			x: -50,
			opacity: 0,
			delay: 1,
			ease: "power3.out"
		})
		gsap.from("#case-image-mobile", 1.3, {
			scrollTrigger: {
				trigger: "#case-image-mobile",
				start: "top bottom",
				end: "=-300",
			},
			x: -50,
			opacity: 0,
			delay: 0.5,
			ease: "power3.out"
		})
	}, [])
	return (
		<div className='flex flex-col-reverse lg:flex-row items-start'>
			<div className='w-12/12 lg:w-5/12'>
				<div id="case-nav" className='flex flex-row items-center text-white mt-20 lg:mt-36 '>
					<button
						onClick={() => changeCounter("decrement")}
						className='bg-primaryGrey hover:bg-primaryBrand text-2xl p-4 mr-4 ease-in-out duration-300 focus:outline-none'
					>
						<HiOutlineArrowNarrowLeft />
					</button>
					<p className='text-white text-base font-semibold mr-4'>
						0{count}/0{maxCount}
					</p>
					<button
						onClick={() => changeCounter("increment")}
						className='bg-primaryGrey hover:bg-primaryBrand text-2xl p-4 mr-4 ease-in-out duration-300 focus:outline-none'
					>
						<HiOutlineArrowNarrowRight />
					</button>
				</div>

				<div id="case-text-content">
					<h3 id="case-header" className='text-white font-semibold text-secheader mt-12'>
						{workCase.title}
					</h3>
					<div className='flex flex-row items-center mt-7'>
						<div id="case-category-line" className='h-1 w-6 bg-primaryBrand mr-6'></div>
						<p id="case-category" className='text-greyText text-base font-medium'>
							{workCase.category}
						</p>
					</div>

					<p id="case-description" className='text-greyText font-normal text-base leading-loose mt-6 w-12/12 lg:w-10/12'>
						{workCase.description}
					</p>

					{workCase.caseLink != null ? (
						<div className="case-cta">
							<a
								href={workCase.caseLink}
								target="_blank"
								id="case-link"
								className='text-white text-base font-medium bg-primaryBrand hover:bg-primaryGrey ease-in-out duration-300 px-8 py-4 mt-12 items-center inline-flex'
							>
								{workCase.caseLinkText} <MdKeyboardArrowRight className="ml-1 text-2xl" />
							</a>
						</div>
					) : null}
				</div>

			</div>

			<div id="case-image" className='hidden w-12/12 lg:w-7/12 md:flex justify-center mt-26 lg:mt-40 xl:-mr-20'>
				<img
					src={workCase.caseImage}
					alt={workCase.caseImageAlt}
					className='max-h-lg md:max-h-xl max-w-full object-contain pointer-events-none'
				/>
			</div>
			<div id="case-image-mobile" className='md:hidden w-12/12 flex justify-center mt-26'>
				<img
					src={workCase.caseImageMobile}
					alt={workCase.caseImageAlt}
					className='h-full w-full object-contain pointer-events-none'
				/>
			</div>
		</div>
	);
};

export default WorkSlider;
