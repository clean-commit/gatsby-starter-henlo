import seo from '../partials/seo';
import Blocks from '../blocks';

const collection = {
  name: 'pages',
  label: 'Page',
  // editor: {
  //   preview: false,
  // },
  description: 'Custom pages',
  folder: 'content/pages',
  create: true,
  nested: {
    depth: 100,
    summary: '{{title}}',
  },
  fields: [
    { label: 'ID', name: 'id', widget: 'uuid' },
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
      label: 'Permalink',
      name: 'permalink',
      widget: 'permalink',
      default: '{{title}}',
      required: true,
      url: 'http://localhost:8000',
      hint: 'The post URL (do not include folder or file extension)',
    },
    Blocks,
    seo,
  ],
};

export default collection;
