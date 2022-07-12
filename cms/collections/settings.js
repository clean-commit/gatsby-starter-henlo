import navigationField from '../fields/navigation-field';

const collection = {
  name: 'settings',
  label: 'Settings',
  description: 'Settings for theme',
  files: [
    {
      label: 'Main Navigation',
      name: 'nav',
      file: 'src/settings/main.json',
      editor: {
        preview: false,
      },
      fields: [navigationField()],
    },
    {
      label: 'Footer Navigation',
      name: 'footer',
      file: 'src/settings/footer.json',
      editor: {
        preview: false,
      },
      fields: [navigationField()],
    },
    {
      label: 'Site Metadata & SEO Settings',
      name: 'seo',
      file: 'src/settings/seo.json',
      summary: 'Change basic SEO configuration and site meta like URL',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Base title',
          name: 'baseTitle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Separator',
          name: 'separator',
          widget: 'string',
          required: false,
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
          required: false,
        },
        {
          label: 'Language Code',
          name: 'lang',
          widget: 'string',
          required: false,
        },
        {
          label: 'Keywords',
          name: 'keyword',
          widget: 'string',
          required: false,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Twitter Handle',
          name: 'twitterHandle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Theme Color',
          name: 'themeColor',
          widget: 'color',
          required: false,
        },
      ],
    },
  ],
};

export default collection;
