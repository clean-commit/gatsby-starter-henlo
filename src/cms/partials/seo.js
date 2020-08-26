const seo = {
  label: 'SEO Settings',
  name: 'seo',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'Meta Description',
      name: 'description',
      widget: 'string',
      required: false,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: false,
    },
  ]
}

export default seo