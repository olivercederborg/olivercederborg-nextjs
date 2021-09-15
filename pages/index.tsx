import { useEffect } from 'react'
import { gsap } from 'gsap'
import { groq } from 'next-sanity'

import Layout from '../components/Layout'
import WorkSection from '../components/WorkSection'
import AboutSection from '../components/AboutSection'
import ConnectSection from '../components/ConnectSection'
import HeroSection from '../components/HeroSection'

import { sanity } from 'lib/sanity'

import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { Project } from 'types'

type StaticProps = {
	projects: Project[]
}

const projectsQuery = groq`*[_type == 'project']{
		title,
		"slug": slug.current,
		thumbnail,
		description,
		mainImage,
		body,
		"categories": categories[]->title
	}`

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
	const projects = await sanity().fetch<Project[]>(projectsQuery)

	return {
		props: {
			projects
		},
		revalidate: 600
	}
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Index = ({ projects }: Props) => {
	useEffect(() => {
		gsap.to('body', 0, { css: { visibility: 'visible' } })
	})

	return (
		<Layout>
			<HeroSection />
			<WorkSection sectionNumber={2} projects={projects} />
			<AboutSection sectionNumber={3} />
			<ConnectSection sectionNumber={4} />
		</Layout>
	)
}

export default Index
