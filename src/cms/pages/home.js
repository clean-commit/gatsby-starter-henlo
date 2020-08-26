import seo from '@/cms/partials/seo'

const posts = {
  file: 'content/pages/home.md',
  label: "Home",
  name: 'Home',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'index',
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      default: "",
      required: false,
    },
    {
      label: 'Links',
      name: 'links',
      widget: 'list',
      fields: [
        {
          label: 'Link',
          name: 'link',
          widget: 'object',
          fields: [
            {
              label: 'Content',
              name: 'content',
              widget: 'string',
              required: false,
            },
            {
              label: 'URL',
              name: 'url',
              widget: 'string',
              required: false,
            }
          ]
        }
      ],
    },
    seo
  ]
}


export default posts