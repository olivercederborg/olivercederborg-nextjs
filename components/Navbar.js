import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import { gsap } from 'gsap'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { FiBriefcase } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaDribbble } from 'react-icons/fa'
import { initGA, logPageView, logEvent } from '../utils/analytics'
import { useRouter } from 'next/router'

const Navbar = (props) => {
	const router = useRouter()
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA()
			window.GA_INITIALIZED = true
		}
		logPageView()

		if (router.pathname === '/') {
			gsap.fromTo(
				'header',
				1.5,
				{
					// y: -30,
					opacity: 0
				},
				{
					// y: 0,
					opacity: 1,
					delay: 0.3,
					ease: 'power3.inOut'
				}
			)
		}

		const onScroll = () => {
			const navId = document.getElementById('navigation')
			const topPos = 100
			let currentPosition = window.pageYOffset
			if (navId) {
				if (
					currentPosition > topPos &&
					navId.classList.contains('py-12') === true
				) {
					navId.classList.add('py-6')
					navId.classList.remove('py-12')
				}
				if (
					currentPosition < topPos &&
					navId.classList.contains('py-12') === false
				) {
					navId.classList.remove('py-6')
					navId.classList.add('py-12')
				}
			}
		}

		window.addEventListener('scroll', onScroll)
	})
	return (
		<>
			{router.pathname === '/' && (
				<header className='bg-backgroundOne border-backgroundTwo md:block fixed z-50 hidden w-full'>
					<nav className='container'>
						<div
							id='navigation'
							className='font-display flex items-center justify-between py-12 font-medium text-white transition-all duration-200 ease-in-out'>
							<AnchorLink href='#hero' className='default-focus'>
								<img
									src='/images/logo.svg'
									alt='Oliver Cederborg Logo'
									className='hover:opacity-70 h-8 duration-200 ease-in-out'
								/>
							</AnchorLink>
							<div className='text-greyText'>
								<Scrollspy
									items={['hero', 'work', 'about', 'connect']}
									currentClassName='is-current'
									componentTag='div'
									offset={-350}>
									<AnchorLink
										href='index#hero'
										offset='72'
										className='default-focus hover:text-white hidden px-5 duration-300 ease-in-out'>
										Home
									</AnchorLink>
									<AnchorLink
										href='#work'
										id='work-link'
										offset='72'
										className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
										Work
									</AnchorLink>
									<AnchorLink
										href='#about'
										offset='72'
										className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
										About
									</AnchorLink>
									<AnchorLink
										href='#connect'
										offset='72'
										className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
										Connect
									</AnchorLink>
									<Link href='/portfolio'>
										<a
											aria-label='Dribbble Portfolio'
											className='default-focus bg-none hover:bg-lighterGrey px-4 py-3 text-white duration-300 ease-in-out'>
											<FaDribbble className='inline text-lg' />
										</a>
									</Link>
								</Scrollspy>
							</div>
						</div>
					</nav>
				</header>
			)}
			{router.pathname == '/portfolio' && (
				<header className='bg-backgroundOne border-backgroundTwo md:block fixed z-50 hidden w-full'>
					<nav className='container'>
						<div
							id='navigation'
							className='font-display flex items-center justify-between py-12 font-medium text-white transition-all duration-200 ease-in-out'>
							<div>
								<Link href='/'>
									<a className='default-focus hover:opacity-70 h-8 duration-200 ease-in-out'>
										<img
											src='/images/logo.svg'
											alt='Oliver Cederborg Logo'
											className=' hover:opacity-70 h-8 duration-200 ease-in-out'
										/>
									</a>
								</Link>
							</div>
							<div className='text-greyText'>
								<Scrollspy
									items={['hero', 'work', 'about', 'connect']}
									currentClassName='is-current'
									offset={-350}>
									<Link href='/#work' id='work-link'>
										<a className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
											Work
										</a>
									</Link>
									<Link href='/#about'>
										<a className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
											About
										</a>
									</Link>
									<Link href='/#connect'>
										<a className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
											Connect
										</a>
									</Link>
									<Link href='#'>
										<a className='default-focus bg-primaryBrand hover:bg-lighterGrey px-4 py-3 ml-3 text-white duration-300 ease-in-out'>
											<FaDribbble className='inline text-lg' />
										</a>
									</Link>
								</Scrollspy>
							</div>
						</div>
					</nav>
				</header>
			)}

			{router.pathname == '/[slug]' && (
				<header className='bg-backgroundOne border-backgroundTwo md:block fixed z-50 hidden w-full'>
					<nav className='container'>
						<div
							id='navigation'
							className='font-display flex items-center justify-between py-12 font-medium text-white transition-all duration-200 ease-in-out'>
							<Link href='/#hero'>
								<a className='default-focus'>
									<img
										src='/images/logo.svg'
										alt='Oliver Cederborg Logo'
										className='hover:opacity-70 h-8 duration-200 ease-in-out'
									/>
								</a>
							</Link>
							<div className='text-greyText'>
								<Link href='/#hero'>
									<a className='default-focus hover:text-white hidden px-5 duration-300 ease-in-out'>
										Home
									</a>
								</Link>
								<Link href='/' id='work-link'>
									<a className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
										Work
									</a>
								</Link>
								<Link href='/#about'>
									<a className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
										About
									</a>
								</Link>
								<Link href='/#connect'>
									<a className='default-focus hover:text-white px-5 duration-300 ease-in-out'>
										Connect
									</a>
								</Link>
								<Link href='/portfolio'>
									<a
										aria-label='Dribbble Portfolio'
										className='default-focus bg-none hover:bg-lighterGrey px-4 py-3 text-white duration-300 ease-in-out'>
										<FaDribbble className='inline text-lg' />
									</a>
								</Link>
							</div>
						</div>
					</nav>
				</header>
			)}

			{router.pathname === '/' ? (
				<Scrollspy
					items={['hero', 'work', 'about', 'connect']}
					currentClassName='mobile-current'
					offset={-350}
					componentTag={'nav'}
					className='md:hidden bg-opacity-90 justify-evenly border-t-1 fixed bottom-0 z-50 flex flex-row w-full text-2xl text-center text-gray-500 bg-gray-900 border-gray-800'
					style={{
						backdropFilter: 'saturate(180%) blur(20px)',
						WebkitBackdropFilter: 'saturate(180%) blur(20px)'
					}}>
					<AnchorLink
						aria-label='Home'
						href='#hero'
						className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
						<BiHomeAlt />
					</AnchorLink>
					<AnchorLink
						aria-label='Work'
						href='#work'
						className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
						<FiBriefcase />
					</AnchorLink>
					<AnchorLink
						aria-label='About'
						href='#about'
						className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
						<BiUser />
					</AnchorLink>
					<AnchorLink
						aria-label='Connect'
						href='#connect'
						className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
						<HiOutlineMail />
					</AnchorLink>
					<Link href='/portfolio'>
						<a
							aria-label='Portfolio'
							className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
							<FaDribbble />
						</a>
					</Link>
				</Scrollspy>
			) : (
				<nav
					className='md:hidden bg-opacity-90 justify-evenly border-t-1 fixed bottom-0 z-50 flex flex-row w-full text-2xl text-center text-gray-500 bg-gray-900 border-gray-800'
					style={{
						backdropFilter: 'saturate(180%) blur(20px)',
						WebkitBackdropFilter: 'saturate(180%) blur(20px)'
					}}>
					<Link href='/'>
						<a
							aria-label='Home'
							className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
							<BiHomeAlt />
						</a>
					</Link>
					<Link href='/#work'>
						<a
							aria-label='Work'
							className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
							<FiBriefcase />
						</a>
					</Link>
					<Link href='/#about'>
						<a
							aria-label='About me'
							className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
							<BiUser />
						</a>
					</Link>
					<Link href='/#connect'>
						<a
							aria-label='Connect'
							className='default-focus hover:text-white px-8 py-6 duration-300 ease-in-out'>
							<HiOutlineMail />
						</a>
					</Link>
					<Link href='/portfolio'>
						<a
							aria-label='Portfolio'
							className='default-focus hover:text-white mobile-current px-8 py-6 duration-300 ease-in-out'>
							<FaDribbble />
						</a>
					</Link>
				</nav>
			)}
		</>
	)
}
export default Navbar
