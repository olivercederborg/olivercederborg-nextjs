import Head from "next/head";
import { useEffect } from "react";
import { gsap } from "gsap";
import axios from "axios";

//import components
import Layout from "../components/Layout";
import WorkSection from "../components/WorkSection";
import AboutSection from "../components/AboutSection";
import ConnectSection from "../components/ConnectSection";
import HeroSection from "../components/HeroSection";

const Index = (props) => {
	useEffect(() => {
		gsap.to("body", 0, { css: { visibility: "visible" } });
	});

	return (
		<Layout>
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
			<HeroSection />
			<WorkSection sectionNumber={2} />
			<AboutSection
				sectionNumber={3}
				account={props.account}
				githubUser={props.githubUser}
			/>
			<ConnectSection sectionNumber={4} />

			<script> </script>
		</Layout>
	);
};

export async function getStaticProps() {
	// DRIBBBLE
	const res = await axios.get(
		`https://api.dribbble.com/v2/user?access_token=${process.env.DRIBBBLE_TOKEN}`
	);
	const account = res.data;

	// // GITHUB
	// const resGithubUser = await axios.get(
	// 	`https://api.github.com/users/olivercederborg`
	// );
	// const githubUser = await resGithubUser.data;

	return {
		props: {
			account,
			// githubUser,
		},
	};
}

export default Index;
