import Head from "next/head";

import Navbar from "./Navbar";

export const siteTitle =
	"Oliver Cederborg - Self-taught designer & front-end developer.";
export const siteKeywords =
	"oliver cederborg, frontend, front-end, graphic, designer, developer, copenhagen, københavn, denmark, danmark ";
export const siteDescription =
	"I'm a 23 year old self-taught designer & front-end developer, focused on details and user experience.";

const Layout = ({ children }) => {
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
			<Navbar />
			<main className='font-display'>{children}</main>
		</div>
	);
};
export default Layout;
