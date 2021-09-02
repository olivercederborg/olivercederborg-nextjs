import { useEffect } from 'react'
import { gsap } from 'gsap'

import Layout from '../components/Layout'
import WorkSection from '../components/WorkSection'
import AboutSection from '../components/AboutSection'
import ConnectSection from '../components/ConnectSection'
import HeroSection from '../components/HeroSection'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { sanity } from 'lib/sanity'

const projectsQuery = groq`*[_type == 'project']{
		title,
		"slug": slug.current,
		mainImage,
		body,
		categories[]->{
			title
		}
	}`

export const getStaticProps = async () => {
	const projects = await sanity().fetch(projectsQuery)

	return {
		props: {
			projects
		},
		revalidate: 600
	}
}

const Index = ({ projects }) => {
	useEffect(() => {
		gsap.to('body', 0, { css: { visibility: 'visible' } })
	})

	console.log(projects)

	return (
		<Layout>
			<HeroSection />
			<ul className='container'>
				{projects.map((project, i) => (
					<Link key={i} href={`/${project.slug}`}>
						<li className='my-12 text-2xl text-white cursor-pointer'>
							{project.title}
						</li>
					</Link>
				))}
			</ul>
			<WorkSection sectionNumber={2} />
			<AboutSection sectionNumber={3} />
			<ConnectSection sectionNumber={4} />

			<script> </script>
		</Layout>
	)
}

export default Index
