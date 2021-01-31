import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaTwitter, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = (props) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
    }
    
		//footer section
		const footerTl = gsap.timeline({
			scrollTrigger: {
				trigger: "footer",
				start: "top bottom",
				end: "=-300",
			},
		});
		footerTl.from("footer", 1.5, {
			y: -30,
			opacity: 0,
			ease: "power3.inOut",
		});
	});

	return (
		<footer className='md:flex-row lg:items-center container flex flex-col-reverse items-center justify-between pb-10 text-gray-600'>
			<p className='hover:text-greyText md:mb-0 mb-5 duration-300 ease-in-out'>
				&copy; 2020 Oliver Cederborg
			</p>

			<div className='md:mb-0 flex flex-row mb-10 text-white'>
				<a
					href='https://dribbble.com/oliver'
					target='_blank'
					className='bg-primaryGrey hover:bg-primaryBrand p-4 mx-1 text-xl duration-300 ease-in-out'
				>
					<FaDribbble />
				</a>
				<a
					href='https://twitter.com/olivercederborg'
					target='_blank'
					className='bg-primaryGrey hover:bg-primaryBrand p-4 mx-1 text-xl duration-300 ease-in-out'
				>
					<FaTwitter />
				</a>
				<a
					href='https://instagram.com/olivercederborg'
					target='_blank'
					className='bg-primaryGrey hover:bg-primaryBrand p-4 mx-1 text-xl duration-300 ease-in-out'
				>
					<FaInstagram />
				</a>
				<a
					href='https://www.linkedin.com/in/olivercederborg'
					target='_blank'
					className='bg-primaryGrey hover:bg-primaryBrand p-4 mx-1 text-xl duration-300 ease-in-out'
				>
					<FaLinkedin />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
