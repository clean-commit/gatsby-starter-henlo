export default {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Content',
          name: 'content',
          widget: 'markdown',
          required: false,
        },
      ],
    },
    {
      label: 'Demo',
      name: 'demo',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          default: '',
          required: false,
        },
        {
          label: 'Version',
          name: 'version',
          widget: 'string',
          default: '',
          required: false,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'markdown',
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
      ],
    },
  ],
};
