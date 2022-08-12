import metadata from '../../src/settings/seo.json';

const partial = {
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
      hint: `Default title: ${metadata.title}, title template is '{title} ${metadata.separator} ${metadata.baseTitle}'`,
    },
    {
      label: 'Meta Description',
      name: 'description',
      widget: 'text',
      required: false,
      hint: `Default description: ${metadata.description}`,
    },
    {
      label: 'Image',
      name: 'ogimage',
      widget: 'image',
      required: true,
      default: metadata.image,
    },
  ],
};

export default partial;
