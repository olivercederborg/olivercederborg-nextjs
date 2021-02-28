import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preload'
						as='image'
						href='/images/hero-graphic.webp'
						media='(min-width: 768px)'
					/>
					<link
						rel='preload'
						as='image'
						href='/images/lunar-background.webp'
						media='(min-width: 768px)'
					/>
					<link
						rel='preload'
						as='image'
						href='/images/lunar-first.webp'
						media='(min-width: 768px)'
					/>
					<link
						rel='preload'
						as='image'
						href='/images/lunar-second.webp'
						media='(min-width: 768px)'
					/>
					{/* <link rel="preload" as="image" href="/images/tablet-background.webp" media="(min-width: 768px)" /> */}
					<link
						rel='preload'
						as='image'
						href='/images/nordsjaelland-osteopati-case-tablet.webp'
						media='(min-width: 768px)'
					/>
					<link
						rel='preload'
						as='image'
						href='/images/noyer-case-tablet.webp'
						media='(min-width: 768px)'
					/>

					<link
						rel='preload'
						as='image'
						href='/images/lunar-way-project-mobile.webp'
						media='(max-width: 767px)'
					/>
					<link
						rel='preload'
						as='image'
						href='/images/noyer-project-mobile.webp'
						media='(max-width: 767px)'
					/>
					<link
						rel='preload'
						as='image'
						href='/images/nordsjaelland-osteopati-project-mobile.webp'
						media='(max-width: 767px)'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
