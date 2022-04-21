import seo from '../partials/seo';
import Blocks from '../blocks';

const collection = {
  name: 'pages',
  label: 'Page',
  editor: {
    preview: false,
  },
  description: 'Custom pages',
  folder: 'content/pages',
  create: true,
  nested: {
    depth: 100,
    summary: '{{title}}',
  },
  fields: [
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'page-builder',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
      default: 'page-name',
      required: true,
      pattern: [
        '^[/a-z0-9]+(?:-[a-z0-9]+)*$',
        'A slug can have no spaces or special characters',
      ],
      hint: 'The post URL (do not include folder or file extension)',
    },
    Blocks,
    seo,
  ],
};

export default collection;
