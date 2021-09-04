export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			initialValue: 'Project Title',
			validation: (Rule) => [
				Rule.required().error('Title is required'),
				Rule.max(32).warning('Shorter titles are usually better')
			]
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 64
			},
			validation: (Rule) => Rule.required().error('Slug is required')
		},
		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			options: {
				hotspot: true
			},
			validation: (Rule) => Rule.required().error('Thumbnail is required')
		},
		{
			name: 'description',
			title: 'Description',
			type: 'blockContent',
			validation: (Rule) => Rule.required().error('Description is required')
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
			validation: (Rule) => Rule.required().error('Categories are required')
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image'
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent'
		}
	],

	preview: {
		select: {
			title: 'title',
			media: 'thumbnail'
		},
		prepare(selection) {
			return Object.assign({}, selection)
		}
	}
}
