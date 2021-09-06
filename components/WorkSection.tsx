import { motion } from 'framer-motion'

import ProjectRow from 'components/ProjectRow'
import MotionComponent from './MotionComponent'

import {
	lineVariants,
	subHeaderVariants,
	headerVariants,
	delayChildren
} from 'utils/motion'

const WorkSection = ({ sectionNumber, projects }) => {
	const sectionColor =
		(sectionNumber % 2 === 0 && ' bg-backgroundTwo ') || ' bg-backgroundOne'

	const randomNumber = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1))
	}
	return (
		<section
			id='work'
			className={`pt-26 pb-32 md:pt-32 md:pb-48 overflow-x-hidden ${sectionColor}`}>
			<div className='container'>
				<div className='flex flex-row items-center'>
					<MotionComponent variants={lineVariants}>
						<div className='section-line bg-primaryBrand w-16 h-1 mr-6'></div>
					</MotionComponent>

					<MotionComponent variants={subHeaderVariants}>
						<p className='section-category text-greyText text-base font-medium'>
							About
						</p>
					</MotionComponent>
				</div>

				<MotionComponent variants={delayChildren}>
					<h2 className='about-h2 lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white'>
						<motion.div variants={headerVariants}>
							Hand-picked projects
						</motion.div>
						<motion.div variants={headerVariants}>
							for you to see.
						</motion.div>
					</h2>
				</MotionComponent>
			</div>

			<section className='mt-40 space-y-40'>
				{projects.map((project, i) => (
					<ProjectRow key={i} project={project} reversed={i % 2 === 0} />
				))}
			</section>
		</section>
	)
}

export default WorkSection
