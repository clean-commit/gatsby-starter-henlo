export const ID = { label: 'ID', name: 'id', widget: 'uuid' };

export const Buttons = {
  label: 'Buttons',
  name: 'buttons',
  widget: 'list',
  fields: [Button],
};

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
    {
      label: 'Variant',
      name: 'variant',
      widget: 'select',
      default: 'default',
      options: ['default', 'arrow', 'button', 'outlined'],
    },
  ],
};

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
