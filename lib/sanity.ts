import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { ClientConfig, createClient } from 'next-sanity'

const config: ClientConfig = {
	projectId: 'nzfi6lh3',
	dataset: 'production',
	// token: process.env.SANITY_TOKEN,
	apiVersion: 'v2021-07-05',
	useCdn: false
}

const sanityClient = createClient(config)
const previewClient = createClient({
	...config,
	useCdn: false
})

export const sanity = (usePreview?: boolean) => {
	return usePreview ? previewClient : sanityClient
}

export const builder = imageUrlBuilder(sanity())

export const imageBuilder = (source: SanityImageSource) => {
	return builder.image(source)
}
