import { Buttons, VariantField } from '../fields';

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
        Buttons,
        VariantField('default', ['default', 'full']),
      ],
    },
    {
      label: 'Recent Articles',
      name: 'recentArticles',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false,
        },
      ],
    },
  ],
};
