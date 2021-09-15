import { sanity } from 'lib/sanity'
import { groq } from 'next-sanity'
import { useNextSanityImage } from 'next-sanity-image'
import BlockContent from '@sanity/block-content-to-react'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import type {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType
} from 'next'
import { Project } from 'types'
import MotionComponent from 'components/MotionComponent'
import Layout from 'components/Layout'

type ProjectPageProps = {
	project: Project
}

const projectQuery = (
	slug: string
) => groq`*[_type == 'project' && defined(slug.current) && slug.current == '${slug}'][0]{
  title,
  "slug": slug.current,
  mainImage,
	body,
	"categories": categories[]->title,
	sections[]{
		"key": _key,
		title,
		image,
		subtitle,
		body
	}
}`

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
	params
}) => {
	const { slug } = params

	const project = await sanity().fetch<ProjectPageProps['project']>(
		projectQuery(slug.toString())
	)

	return {
		props: {
			project
		},
		revalidate: 600
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const projects = await sanity().fetch<{ slug: string }[]>(
		groq`*[_type == 'project' && defined(slug.current)]{
      "slug": slug.current
    }`
	)

	return {
		paths: projects.map(({ slug }) => ({
			params: {
				slug
			}
		})),
		fallback: 'blocking'
	}
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const ProjectPage = ({ project }: Props) => {
	const bannerImageProps = useNextSanityImage(sanity(), project.mainImage)
	console.log(project)
	return (
		<Layout>
			<main className='container'>
				<MotionComponent>
					<h1 className='mt-8 text-4xl text-white'>{project.title}</h1>
				</MotionComponent>
				<section className='mt-2 mb-8 space-x-2 text-pink-400'>
					{project.categories.map((category, i) => (
						<span key={i}>{category}</span>
					))}
				</section>

				<motion.div layoutId={project.slug}>
					<Image
						{...bannerImageProps}
						alt={project.title}
						height='500'
						objectFit='cover'
						objectPosition='center 75%'
					/>
				</motion.div>

				{/* <BlockContent
					blocks={project.body}
					className='mt-10 space-y-2 text-white'
					imageOptions={{ h: 240, fit: 'max' }}
					projectId='nzfi6lh3'
					dataset='production'
				/> */}

				<ReactMarkdown
					className={`text-white`}
					children={project.body}
					remarkPlugins={[remarkGfm]}
					components={{
						h1: ({ node, ...props }) => (
							<h1 className='text-3xl font-semibold' {...props} />
						),
						h2: ({ node, ...props }) => (
							<h2 className='text-2xl font-semibold' {...props} />
						),
						a: ({ node, ...props }) => (
							<a
								className='text-primaryBrand hover:underline'
								{...props}
							/>
						)
					}}
				/>
			</main>
		</Layout>
	)
}

export default ProjectPage
