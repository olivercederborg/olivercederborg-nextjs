import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Scrollspy from "react-scrollspy";
import { gsap } from "gsap";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaDribbble } from "react-icons/fa";
import { initGA, logPageView, logEvent } from "../utils/analytics";
import { useRouter } from "next/router";

export const siteTitle =
	"Oliver Cederborg - Self-taught designer & front-end developer.";
export const siteKeywords =
	"oliver cederborg, frontend, front-end, graphic, designer, developer, copenhagen, københavn, denmark, danmark ";
export const siteDescription =
	"I'm a 23 year old self-taught designer & front-end developer, focused on details and user experience.";

const Layout = ({ children, href }) => {
	const router = useRouter();
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
		
		if (router.pathname === "/") {
			gsap.fromTo(
				"header",
				1.5,
				{
					y: -30,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					delay: 0.2,
					ease: "power3.inOut",
				}
			);
		}

		function onScroll() {
			const navId = document.getElementById("navigation");
			const topPos = 250;
			let currentPosition = window.pageYOffset;
			if (navId) {
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
				<meta property='og:title' content='Oliver Cederborg' />
				<meta
					property='og:image'
					content='https://dev.olivercederborg.com/images/preview.png'
				/>
				<meta property='og:description' content={siteDescription} />
				<meta property='og:type' content='website' />
				<meta property='og:site_name' content='Oliver Cederborg' />
				<meta property='og:url' content='https://olivercederborg.com/' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@olivercederborg' />
				<meta name='twitter:creator' content='@olivercederborg' />
				<meta name='twitter:description' content={siteDescription} />
				<meta
					name='twitter:image'
					content='https://dev.olivercederborg.com/images/preview.png'
				/>

				<link rel='icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' sizes='32x32' href='/favicon_32x32.png' />
				<link rel='icon' sizes='16x16' href='/favicon_16x16.png' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			{router.pathname === "/" ? (
				<header className='bg-backgroundOne border-backgroundTwo md:block fixed z-10 hidden w-full'>
					<nav className='container'>
						<div
							id='navigation'
							className='font-display flex items-center justify-between py-12 font-medium text-white transition-all duration-200 ease-in-out'
						>
							<div>
								<AnchorLink href='#hero'>
									<img
										src='/images/logo.svg'
										alt='Oliver Cederborg Logo'
										className='hover:opacity-70 h-8 duration-200 ease-in-out'
									/>
								</AnchorLink>
							</div>
							<div className='text-greyText'>
								<Scrollspy
									items={["hero", "work", "about", "connect"]}
									currentClassName='is-current'
									offset={-350}
								>
									<AnchorLink
										href='index#hero'
										offset='72'
										className='hover:text-white hidden px-5 duration-300 ease-in-out'
									>
										Home
									</AnchorLink>
									<AnchorLink
										href='#work'
										id='work-link'
										offset='72'
										className='hover:text-white px-5 duration-300 ease-in-out'
									>
										Work
									</AnchorLink>
									<AnchorLink
										href='#about'
										offset='72'
										className='hover:text-white px-5 duration-300 ease-in-out'
									>
										About
									</AnchorLink>
									<AnchorLink
										href='#connect'
										offset='72'
										className='hover:text-white px-5 duration-300 ease-in-out'
									>
										Connect
									</AnchorLink>
									<Link href='/portfolio'>
										<a className='bg-none hover:bg-primaryGrey px-4 py-3 text-white duration-300 ease-in-out'>
											<FaDribbble className='inline text-lg' />
										</a>
									</Link>
								</Scrollspy>
							</div>
						</div>
					</nav>
				</header>
			) : (
				<header className='bg-backgroundOne border-backgroundTwo md:block fixed z-10 hidden w-full'>
					<nav className='container'>
						<div
							id='navigation'
							className='font-display flex items-center justify-between py-12 font-medium text-white transition-all duration-200 ease-in-out'
						>
							<div>
								<Link href='/'>
									<a>
										<img
											src='/images/logo.svg'
											alt='Oliver Cederborg Logo'
											className='hover:opacity-70 h-8 duration-200 ease-in-out'
										/>
									</a>
								</Link>
							</div>
							<div className='text-greyText'>
								<Scrollspy
									items={["hero", "work", "about", "connect"]}
									currentClassName='is-current'
									offset={-350}
								>
									<Link href='/#work' id='work-link'>
										<a className='hover:text-white px-5 duration-300 ease-in-out'>
											Work
										</a>
									</Link>
									<Link href='/#about'>
										<a className='hover:text-white px-5 duration-300 ease-in-out'>
											About
										</a>
									</Link>
									<Link href='/#connect'>
										<a className='hover:text-white px-5 duration-300 ease-in-out'>
											Connect
										</a>
									</Link>
									<Link href="">
										<a className='bg-primaryBrand hover:bg-primaryGrey px-4 py-3 ml-3 text-white duration-300 ease-in-out'>
											<FaDribbble className='inline text-lg' />
										</a>
									</Link>
								</Scrollspy>
							</div>
						</div>
					</nav>
				</header>
			)}

			<Scrollspy
				items={["hero", "work", "about", "connect"]}
				currentClassName='mobile-current'
				offset={-350}
				componentTag={"nav"}
				className='md:hidden bg-opacity-90 justify-evenly border-t-1 fixed bottom-0 z-10 flex flex-row w-full text-2xl text-center text-gray-500 bg-gray-900 border-gray-800'
				style={{
					backdropFilter: "saturate(180%) blur(20px)",
					WebkitBackdropFilter: "saturate(180%) blur(20px)",
				}}
			>
				<AnchorLink
					href='#hero'
					className='hover:text-white px-8 py-6 duration-300 ease-in-out'
				>
					<BiHomeAlt />
				</AnchorLink>
				<AnchorLink
					href='#work'
					className='hover:text-white px-8 py-6 duration-300 ease-in-out'
				>
					<FiBriefcase />
				</AnchorLink>
				<AnchorLink
					href='#about'
					className='hover:text-white px-8 py-6 duration-300 ease-in-out'
				>
					<BiUser />
				</AnchorLink>
				<AnchorLink
					href='#connect'
					className='hover:text-white px-8 py-6 duration-300 ease-in-out'
				>
					<HiOutlineMail />
				</AnchorLink>
			</Scrollspy>
			<main className='font-display'>{children}</main>
		</div>
	);
};
export default Layout;
