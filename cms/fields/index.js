export const ID = { label: 'ID', name: 'id', widget: 'uuid' };

export const SelectField = (
  initial,
  options = [],
  label = 'Variant',
  name = 'variant',
) => ({
  label,
  name,
  widget: 'select',
  options,
  ...(initial ? { default: initial } : null),
});

export const ImageField = (name = 'image', fieldName = 'photo') => ({
  label: 'Image',
  name: fieldName,
  widget: 'object',
  fields: [
    { label: 'Image', name, widget: 'image', required: false },
    { label: 'Alt', name: 'alt', widget: 'string', required: false },
  ],
});

export const Button = {
  label: 'Button',
  name: 'button',
  widget: 'object',
  collapsed: true,
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
    SelectField('default', ['default', 'arrow', 'button', 'outlined']),
  ],
};

export const Buttons = {
  label: 'Buttons',
  name: 'buttons',
  widget: 'list',
  fields: [Button],
};

export const Title = {
  label: 'Title',
  name: 'title',
  widget: 'string',
  required: false,
};

export const Content = {
  label: 'Content',
  name: 'content',
  widget: 'markdown',
  required: false,
};

export const SettingsGroup = {
  label: 'Settings',
  name: 'settings',
  widget: 'object',
  collapsed: true,
  fields: [
    SelectField('default', ['default', 'dark', 'gray']),
    SelectField(
      'md',
      ['none', 'sm', 'md', 'lg', 'xl'],
      'Padding Top',
      'padding_top',
    ),
    SelectField(
      'md',
      ['none', 'sm', 'md', 'lg', 'xl'],
      'Padding Bottom',
      'padding_bottom',
    ),
    SelectField(
      'none',
      ['none', 'sm', 'md', 'lg', 'xl'],
      'Margin Top',
      'margin_top',
    ),
    SelectField(
      'none',
      ['none', 'sm', 'md', 'lg', 'xl'],
      'Margin Bottom',
      'margin_bottom',
    ),
  ],
};
