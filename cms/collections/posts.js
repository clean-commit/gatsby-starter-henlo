import seo from '../partials/seo';

const collection = {
  name: 'blog',
  label: 'Articles',
  editor: {
    preview: false,
  },
  description: 'Articles content',
  folder: 'content/blog',
  slug: '{{slug}}',
  create: true,
  fields: [
    { label: 'ID', name: 'id', widget: 'uuid' },
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'article',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'Article',
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
      prefix: 'blog',
      hint: 'The post URL (do not include folder or file extension)',
    },
    {
      label: 'Featured Image',
      name: 'thumbnail',
      widget: 'image',
      default: '',
      required: false,
    },
    {
      label: 'Date',
      name: 'date',
      widget: 'datetime',
      default: '',
      required: false,
    },
    {
      label: 'Excerpt',
      name: 'excerpt',
      widget: 'markdown',
      default: '',
      required: false,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
    seo,
  ],
};

export default collection;
