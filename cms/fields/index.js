export const ID = { label: 'ID', name: 'id', widget: 'uuid' };

export const VariantField = (initial, options = []) => ({
  label: 'Variant',
  name: 'variant',
  widget: 'select',
  default: initial,
  options: options,
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
    VariantField('default', ['default', 'arrow', 'button', 'outlined']),
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
