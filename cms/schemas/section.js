export default {
	name: 'section',
	title: 'Section',
	type: 'object',
	fields: [
		{
			title: 'Section image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Section title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Section subtitle',
			name: 'subtitle',
			type: 'string'
		},
		{
			title: 'Section body',
			name: 'body',
			type: 'blockContent'
		}
	]
}
