import { useState, useEffect } from "react";
import { workCases } from "../workCases";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
	HiOutlineArrowNarrowRight,
	HiOutlineArrowNarrowLeft
} from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { logEvent } from "../utils/analytics";

const WorkSlider = () => {
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
			nextCaseTl
				.fromTo(
					"#case-text-content",
					1.5,
					{
						opacity: 0,
						x: -30
					},
					{
						opacity: 1,
						x: 0,
						ease: "power4.out"
					}
				)
				.fromTo(
					"#case-image, #case-image-mobile",
					1.5,
					{
						opacity: 0,
						x: -50
					},
					{
						opacity: 1,
						x: 0,
						delay: -1.5,
						ease: "power4.out"
					}
				);
		};
		if (!nextCaseTl.isActive()) {
			nextCaseAni();
		}
	};

	//next case animation
	const prevCase = () => {
		const prevCaseTl = gsap.timeline();
		const prevCaseAni = () => {
			prevCaseTl
				.fromTo(
					"#case-text-content",
					1.5,
					{
						opacity: 0,
						x: 30
					},
					{
						opacity: 1,
						x: 0,
						ease: "power4.out"
					}
				)
				.fromTo(
					"#case-image, #case-image-mobile",
					1.5,
					{
						opacity: 0,
						x: 50
					},
					{
						opacity: 1,
						x: 0,
						delay: -1.5,
						ease: "power4.out"
					}
				);
		};
		if (!prevCaseTl.isActive()) {
			prevCaseAni();
		}
	};

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		gsap.registerPlugin(ScrollTrigger);
	// 	}

	// 	//case text timeline
	// 	const caseTextTl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: "#case-image",
	// 			start: "top center"
	// 		}
	// 	});

	// 	caseTextTl
	// 		.from("#case-nav", 2, {
	// 			y: -20,
	// 			opacity: 0,
	// 			delay: 0,
	// 			ease: "power3.out"
	// 		})
	// 		.from("#case-header", 1, {
	// 			y: -20,
	// 			opacity: 0,
	// 			stagger: 0.3,
	// 			delay: -1.5,
	// 			ease: "power3.out"
	// 		})
	// 		.fromTo(
	// 			"#case-category-line",
	// 			1,
	// 			{
	// 				width: 0
	// 			},
	// 			{
	// 				width: "1.5rem",
	// 				stagger: 0.3,
	// 				delay: -1.5,
	// 				ease: "power3.inOut"
	// 			}
	// 		)
	// 		.from("#case-category", 1, {
	// 			x: -10,
	// 			opacity: 0,
	// 			stagger: 0.3,
	// 			delay: -1,
	// 			ease: "power3.out"
	// 		})
	// 		.from("#case-description", 1, {
	// 			y: -20,
	// 			opacity: 0,
	// 			stagger: 0.3,
	// 			delay: -1,
	// 			ease: "power3.out"
	// 		})
	// 		.from(".case-cta", 1, {
	// 			opacity: 0,
	// 			y: -20,
	// 			stagger: 0.3,
	// 			delay: -0.7,
	// 			ease: "power3.out"
	// 		});

	// 	//case image
	// 	gsap.from("#case-image", 1.3, {
	// 		scrollTrigger: {
	// 			trigger: "#case-image",
	// 			start: "top bottom",
	// 			end: "=-300"
	// 		},
	// 		x: -50,
	// 		opacity: 0,
	// 		delay: 1,
	// 		ease: "power3.out"
	// 	});
	// 	gsap.from("#case-image-mobile", 1.3, {
	// 		scrollTrigger: {
	// 			trigger: "#case-image-mobile",
	// 			start: "top bottom",
	// 			end: "=-300"
	// 		},
	// 		x: -50,
	// 		opacity: 0,
	// 		delay: 0.5,
	// 		ease: "power3.out"
	// 	});
	// }, []);

	return (
		<div className='lg:flex-row flex flex-col-reverse items-start'>
			<div className='w-12/12 lg:w-6/12'>
				<div
					id='case-nav'
					className='lg:mt-36 flex flex-row items-center mt-20 text-white'
				>
					<button
						aria-label='previous'
						onClick={() => changeCounter("decrement")}
						className='default-focus bg-lightGrey hover:bg-lighterGrey focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out'
					>
						<HiOutlineArrowNarrowLeft />
					</button>
					<p className='mr-4 text-base font-semibold text-white'>
						0{count}/0{maxCount}
					</p>
					<button
						aria-label='next'
						onClick={() => changeCounter("increment")}
						className='default-focus bg-lightGrey hover:bg-lighterGrey focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out'
					>
						<HiOutlineArrowNarrowRight />
					</button>
				</div>

				<div id='case-text-content'>
					<h3
						id='case-header'
						className='text-secheader mt-12 font-semibold text-white'
					>
						{workCase.title}
					</h3>
					<div className='mt-7 flex flex-row items-center'>
						<div
							id='case-category-line'
							className='bg-primaryBrand w-6 h-1 mr-6'
						></div>
						<p
							id='case-category'
							className='text-greyText text-base font-medium'
						>
							{workCase.category}
						</p>
					</div>

					<p
						id='case-description'
						className='text-greyText w-12/12 lg:w-10/12 mt-6 text-base font-normal leading-loose'
					>
						{workCase.description}
					</p>

					{workCase.caseLink ? (
						<div className='case-cta'>
							<a
								rel='noopener'
								href={workCase.caseLink}
								onClick={() =>
									logEvent(
										`Case ${workCase.title}`,
										`Redirected to ${workCase.caseLink}`
									)
								}
								target='_blank'
								id='case-link'
								className='default-focus bg-primaryBrand hover:bg-lighterGrey inline-flex items-center px-8 py-4 mt-12 text-base font-medium text-white duration-300 ease-in-out'
							>
								{workCase.caseLinkText}{" "}
								<MdKeyboardArrowRight className='ml-1 text-2xl' />
							</a>
						</div>
					) : null}
				</div>
			</div>
			<div
				id='case-image'
				className='w-12/12 lg:w-6/12 md:flex mt-26 lg:mt-30 xl:-mr-20 justify-center hidden'
			>
				{!workCase.caseImage &&
				workCase.caseImageOne &&
				workCase.caseImageTwo ? (
					<div className='relative flex justify-center w-full'>
						<img
							src={workCase.caseImageTwo}
							id='dualImageCaeSecond'
							alt={workCase.caseImageAlt}
							className='case-image-two md:max-h-xl absolute z-10 object-contain h-full pointer-events-none'
						/>
						<img
							src={workCase.caseImageOne}
							id='dualImageCaseFirst'
							alt={workCase.caseImageAlt}
							className='case-image-one md:max-h-xl absolute z-10 object-contain h-full pointer-events-none'
						/>
						<img
							src={workCase.caseBackground}
							id='case-image-background'
							alt=''
							className='md:max-h-xl z-0 object-contain h-full mt-3 pointer-events-none'
						/>
					</div>
				) : (
					<div className='flex justify-center w-full'>
						<div className='relative'>
							<img
								src={workCase.caseImage}
								id='singleImageCase'
								alt={workCase.caseImageAlt}
								className='md:max-h-xl absolute z-10 object-contain w-full h-full -ml-2 pointer-events-none'
							/>
							<img
								src={workCase.caseBackground}
								id='case-image-background'
								alt=''
								className='md:max-h-xl z-0 object-contain w-full h-full pointer-events-none'
							/>
						</div>
					</div>
				)}
			</div>

			<div
				id='case-image-mobile'
				className='md:hidden w-12/12 mt-26 flex justify-center'
			>
				<img
					src={workCase.caseImageMobile}
					alt={workCase.caseImageAlt}
					className='object-contain w-full h-full pointer-events-none'
				/>
			</div>
		</div>
	);
};

export default WorkSlider;
