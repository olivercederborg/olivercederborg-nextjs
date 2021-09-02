export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 64
			}
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }]
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
			media: 'mainImage'
		},
		prepare(selection) {
			return Object.assign({}, selection)
		}
	}
}
