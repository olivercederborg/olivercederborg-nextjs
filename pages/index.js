import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import useSWR from "swr";

//import components
import Layout from "../components/Layout";
import WorkSection from "../components/WorkSection";
import AboutSection from "../components/AboutSection";
import ConnectSection from "../components/ConnectSection";
import HeroSection from "../components/HeroSection";

import fetcher from "../utils/fetcher";
import { DribbbleContext } from "../utils/DribbbleContext";

const Index = (props) => {
	const { shots, followers } = useContext(DribbbleContext);

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
			<AboutSection sectionNumber={3} followers={followers} shots={shots} />
			<ConnectSection sectionNumber={4} />

			<script> </script>
		</Layout>
	);
};

export default Index;
