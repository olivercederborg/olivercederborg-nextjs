import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { sanity } from 'lib/sanity'
import { cubicBezier, delayChildren } from 'utils/motion'
import { Project } from 'types'
import { useInView } from 'react-intersection-observer'

type StaticProps = {
	project: Project
	reversed?: boolean
}

const slideUpArticle = {
	hidden: { opacity: 0, translateY: 60 },
	visible: {
		opacity: 1,
		translateY: 0,
		transition: {
			ease: cubicBezier,
			duration: 1
		}
	}
}

const slideUpImage = {
	hidden: { opacity: 0, translateY: 60 },
	visible: {
		opacity: 1,
		translateY: 0,
		transition: {
			ease: cubicBezier,
			duration: 1
		}
	}
}

export default function ProjectRow({ project, reversed }: StaticProps) {
	const controls = useAnimation()
	const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [controls, inView])
	return (
		<motion.section
			ref={ref}
			variants={delayChildren}
			initial='hidden'
			animate={controls}
			exit='hidden'
			className={`container flex items-center w-full gap-24 text-white ${
				reversed && 'flex-row-reverse'
			}`}>
			<Link scroll={false} href={`/${project.slug}`}>
				<div className='w-6/12 overflow-hidden'>
					<motion.div
						layoutId={project.slug}
						whileHover={{
							scale: 1.1,
							transition: { ease: cubicBezier, duration: 0.5 }
						}}
						variants={slideUpImage}
						className='relative w-full h-full'>
						<Image
							{...useNextSanityImage(sanity(), project.thumbnail)}
							sizes='100%'
							objectFit='cover'
						/>
					</motion.div>
				</div>
			</Link>

			<motion.article variants={slideUpArticle} className='w-6/12'>
				<h3 className='text-secheader font-semibold text-white'>
					{project.title}
				</h3>
				<div className='mt-7 flex flex-row items-center'>
					<div className='bg-primaryBrand w-6 h-1 mr-6'></div>
					<p className='text-greyText text-base font-medium'>
						{project.categories.join(' \u2022 ')}
					</p>
				</div>

				<BlockContent
					blocks={project.description}
					className='text-greyText w-12/12 lg:w-10/12 mt-6 text-base font-normal leading-loose'
					projectId='nzfi6lh3'
					dataset='production'
				/>

				<Link scroll={false} href={`/${project.slug}`}>
					<a className='default-focus bg-primaryBrand hover:bg-lighterGrey inline-flex items-center px-8 py-4 mt-12 text-base font-medium text-white duration-300 ease-in-out'>
						View Project
						<MdKeyboardArrowRight className='ml-1 text-2xl' />
					</a>
				</Link>
			</motion.article>
		</motion.section>
	)
}
