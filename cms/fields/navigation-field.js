export function Field(label = 'Navigation', name = 'nav') {
  return {
    label: label,
    name: name,
    widget: 'list',
    summary: '{{fields.name}} {{fields.permalink}}',
    fields: [
      {
        label: 'Name',
        name: 'name',
        widget: 'string',
      },
      {
        label: 'Permalink',
        name: 'permalink',
        widget: 'string',
      },
      {
        label: 'Children',
        name: 'children',
        widget: 'list',
        summary: '{{fields.name}} {{fields.permalink}}',
        fields: [
          {
            label: 'Name',
            name: 'name',
            widget: 'string',
          },
          {
            label: 'Permalink',
            name: 'permalink',
            widget: 'string',
          },
        ],
      },
    ],
  };
}

export default Field;
