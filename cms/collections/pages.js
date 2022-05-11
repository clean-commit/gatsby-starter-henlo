import seo from '../fields/seo';
import { ID } from '../fields';
import Blocks from '../blocks';
import { PermalinkField } from '../fields/permalink-field';

const collection = {
  name: 'pages',
  label: 'Page',
  description: 'Custom pages',
  folder: 'content/pages',
  create: true,
  fields: [
    ID,
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
    },
    PermalinkField(),
    Blocks,
    seo,
  ],
};

export default collection;
