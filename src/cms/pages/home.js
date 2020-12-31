import seo from '@/cms/partials/seo'

const page = {
  file: 'content/pages/home.md',
  label: 'Home',
  name: 'Home',
  fields: [
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'index',
    },
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
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
            },
          ],
        },
      ],
    },
    seo,
  ],
}

export default page
