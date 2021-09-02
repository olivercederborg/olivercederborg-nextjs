import { useEffect } from "react";
import { gsap } from "gsap";

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
			<HeroSection />
			<WorkSection sectionNumber={2} />
			<AboutSection sectionNumber={3} />
			<ConnectSection sectionNumber={4} />

			<script> </script>
		</Layout>
	);
};

export default Index;
