import {
  Buttons,
  Title,
  Content,
  SelectField,
  ImageField,
  SettingsGroup,
} from '../fields';

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
        SelectField('default', ['default', 'centered', 'full']),
        SettingsGroup,
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
        SelectField('default', ['default', 'reversed']),
        SettingsGroup,
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
        SettingsGroup,
      ],
    },
    {
      label: 'Recent Articles',
      name: 'recentArticles',
      widget: 'object',
      fields: [Title, SettingsGroup],
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
        SettingsGroup,
      ],
    },
  ],
};

export default Config;
