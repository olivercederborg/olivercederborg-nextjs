import Head from "next/head";
import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Scrollspy from 'react-scrollspy'
import { gsap } from 'gsap';
import { BiHomeAlt, BiUser } from "react-icons/bi"
import { FiBriefcase } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import { initGA, logPageView } from '../utils/analytics'

export const siteTitle = "Oliver Cederborg - Self-taught designer & front-end developer.";
export const siteKeywords = "oliver cederborg, frontend, front-end, graphic, designer, developer, copenhagen, københavn, denmark, danmark ";
export const siteDescription = "I'm a 23 year old self-taught designer & front-end developer, focused on details and user experience.";

const Layout = ({ children }) => {
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA()
			window.GA_INITIALIZED = true
		}
		logPageView()
		logEvent("On load", "The page loaded")
		gsap.fromTo("header", 1.5, {
			y: -30,
			opacity: 0,
		}, {
			y: 0,
			opacity: 1,
			delay: 0.2,
			ease: "power3.inOut"
		});

		function onScroll() {
			const navId = document.getElementById("navigation")
			const topPos = 250;
			let currentPosition = window.pageYOffset;
			if (
				currentPosition > topPos &&
				navId.classList.contains("py-12") === true
			) {
				navId.classList.add("py-6");
				navId.classList.remove("py-12");
			}
			if (
				currentPosition < topPos &&
				navId.classList.contains("py-12") === false
			) {
				navId.classList.remove("py-6");
				navId.classList.add("py-12");
			}
		}

		window.addEventListener("scroll", onScroll);
		return window.addEventListener("scroll", onScroll);
	});
	return (
		<div>
			<Head>
				<title>{siteTitle}</title>
				<meta name='description' content={siteDescription} />
				<meta name='keywords' content={siteKeywords} />
				<meta property='og:title' content="Oliver Cederborg" />
				<meta property='og:image' content="https://dev.olivercederborg.com/images/preview.png" />
				<meta property='og:description' content={siteDescription} />
				<meta property='og:type' content="website" />
				<meta property='og:site_name' content="Oliver Cederborg" />
				<meta property='og:url' content="https://olivercederborg.com/" />
				<meta name='twitter:card' content="summary" />
				<meta name='twitter:site' content="@olivercederborg" />
				<meta name='twitter:creator' content="@olivercederborg" />
				<meta name='twitter:description' content={siteDescription} />
				<meta name='twitter:image' content="https://dev.olivercederborg.com/images/preview.png" />

				<link rel='icon' sizes="180x180" href='/apple-touch-icon.png' />
				<link rel='icon' sizes="32x32" href='/favicon_32x32.png' />
				<link rel='icon' sizes="16x16" href='/favicon_16x16.png' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			<header className='bg-backgroundOne border-backgroundTwo w-full fixed hidden md:block z-10'>
				<nav className='container'>
					<div
						id='navigation'
						className='flex items-center justify-between py-12 text-white font-display font-medium transition-all ease-in-out duration-200'
					>
						<div>
							<AnchorLink href='#hero'>
								<img
									src='/images/logo.svg'
									alt='Oliver Cederborg Logo'
									className='h-8 hover:opacity-70 ease-in-out duration-200'
								/>
							</AnchorLink>
						</div>
						<div className='text-greyText'>
							<Scrollspy items={['hero', 'work', 'about', 'connect']} currentClassName="is-current" offset={-350}>
								<AnchorLink
									href='#hero'
									offset='72'
									className='px-5 hover:text-white ease-in-out duration-300 hidden'
								>
									Home
							</AnchorLink>
								<AnchorLink
									href='#work'
									id="work-link"
									offset='72'
									className='px-5 hover:text-white ease-in-out duration-300'
								>
									Work
							</AnchorLink>
								<AnchorLink
									href='#about'
									offset='72'
									className='px-5 hover:text-white ease-in-out duration-300'
								>
									About
							</AnchorLink>
								<AnchorLink
									href='#connect'
									offset='72'
									className='px-5 hover:text-white ease-in-out duration-300'
								>
									Connect
							</AnchorLink>
							</Scrollspy>
						</div>
					</div>
				</nav>
			</header>

			<Scrollspy items={['hero', 'work', 'about', 'connect']} currentClassName="mobile-current" offset={-350} componentTag={"nav"} className="fixed z-10 w-full md:hidden text-2xl text-center bg-gray-900 bottom-0 bg-opacity-90 flex flex-row justify-evenly text-gray-500 border-t-1 border-gray-800"
				style={{ "backdropFilter": "saturate(180%) blur(20px)", "WebkitBackdropFilter": "saturate(180%) blur(20px)" }}>
				<AnchorLink
					href='#hero'
					className='px-8 hover:text-white ease-in-out duration-300 py-6'
				>
					<BiHomeAlt />
				</AnchorLink>
				<AnchorLink
					href='#work'
					className='px-8 hover:text-white ease-in-out duration-300 py-6'
				>
					<FiBriefcase />
				</AnchorLink>
				<AnchorLink
					href='#about'
					className='px-8 hover:text-white ease-in-out duration-300 py-6'
				>
					<BiUser />
				</AnchorLink>
				<AnchorLink
					href='#connect'
					className='px-8 hover:text-white ease-in-out duration-300 py-6'
				>
					<HiOutlineMail />
				</AnchorLink>
			</Scrollspy>
			<main className='font-display'>{children}</main>
		</div>
	);
};
export default Layout;
