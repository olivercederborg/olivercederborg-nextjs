import Head from "next/head";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";
import { BiHomeAlt, BiUser  } from "react-icons/bi"
import { FiBriefcase } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"

export const siteTitle = "Oliver Cederborg - Self-taught designer & front-end developer.";
export const siteKeywords = "oliver cederborg, frontend, front-end, graphic, designer, developer, copenhagen, københavn, denmark, danmark ";
export const siteDescription = "Self-taught designer & front-end developer from Copenhagen in Denmark.";

const Layout = ({ children }) => {
	useEffect(() => {
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
				<link rel='icon' href='/images/logo.svg' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
					rel='stylesheet'
				></link>
				<title>{siteTitle}</title>
				<meta name='description' content={siteDescription}/>
				<meta name='keywords' content={siteKeywords}/>
				<meta property='og:image' content="/images/preview.png" />
				<meta name='og:title' content={siteTitle} />
				<meta name='og:description' content={siteDescription} />
				<meta name='twitter:card' content="/images/preview.png" />
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
							<AnchorLink
								href='#work'
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
						</div>
					</div>
				</nav>
			</header>

			<nav 
				className="fixed z-10 w-full md:hidden text-2xl text-center bg-gray-900 bottom-0 bg-opacity-90 flex flex-row justify-evenly text-gray-500 border-t-1 border-gray-800" 
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
			</nav>
			<main className='font-display'>{children}</main>
		</div>
	);
};
export default Layout;
