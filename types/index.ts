import { BlockContent } from '@sanity/block-content-to-react'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type Project = {
	title: string
	slug: string
	thumbnail?: SanityImageSource
	mainImage: SanityImageSource
	description?: BlockContent
	body: BlockContent
	categories: string[]
}
