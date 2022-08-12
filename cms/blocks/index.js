import { Buttons, Title, Content, VariantField, ImageField } from '../fields';

const Config = {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      fields: [
        Title,
        Content,
        Buttons,
        VariantField('default', ['default', 'centered', 'full']),
      ],
    },
    {
      label: 'Content',
      name: 'content',
      widget: 'object',
      fields: [Content],
    },
    {
      label: 'Content with Image',
      name: 'content_image',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        ImageField(),
        Title,
        Content,
        Buttons,
        VariantField('default', ['default', 'reversed']),
      ],
    },
    {
      label: 'Perks',
      name: 'perks',
      summary: '{{fields.title}}',
      widget: 'object',
      fields: [
        Title,
        Content,
        {
          label: 'Columns',
          name: 'columns',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [Title, Content],
        },
      ],
    },
    {
      label: 'Recent Articles',
      name: 'recentArticles',
      widget: 'object',
      fields: [Title],
    },
    {
      label: 'Form',
      name: 'form',
      widget: 'object',
      fields: [
        {
          label: 'Form',
          name: 'form',
          widget: 'relation',
          collection: 'forms',
          search_fields: ['title'],
          display_fields: ['{{id}} - {{title}}'],
          value_field: 'id',
          required: false,
        },
      ],
    },
  ],
};

export default Config;
