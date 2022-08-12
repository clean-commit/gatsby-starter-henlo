import { ID } from '../fields';
import { Button } from '../fields';

const collection = {
  name: 'forms',
  label: 'Forms',
  description: 'Forms',
  folder: 'content/forms',
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'form',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'hidden',
    },
    {
      label: 'Name',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Settings',
      name: 'settings',
      widget: 'object',
      fields: [
        {
          label: 'Resolver',
          name: 'resolver',
          widget: 'select',
          default: 'Form',
          options: ['Form'],
        },
        {
          label: 'Success Message',
          name: 'success_msg',
          widget: 'string',
          default: 'Thank you for reaching out!',
          required: false,
        },
        {
          label: 'Event ID',
          name: 'event_id',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Rows',
      name: 'rows',
      widget: 'list',
      fields: [
        {
          label: 'Position',
          name: 'position',
          widget: 'select',
          default: 'bottom',
          options: ['bottom', 'center'],
        },
        {
          label: 'Fields',
          name: 'fields',
          widget: 'list',
          types: [
            {
              label: 'Input',
              name: 'input',
              widget: 'object',
              summary: '{{label}}',
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Input Type',
                  name: 'input_type',
                  widget: 'select',
                  default: 'text',
                  options: ['text', 'email', 'tel', 'hidden', 'time'],
                },
                {
                  label: 'Autocomplete',
                  name: 'autocomplete',
                  widget: 'select',
                  default: 'on',
                  options: [
                    'on',
                    'off',
                    'name',
                    'tel',
                    'email',
                    'organization',
                  ],
                },
                {
                  label: 'Placeholder',
                  name: 'placeholder',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Value',
                  name: 'value',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Required',
                  name: 'required',
                  widget: 'boolean',
                  default: false,
                  required: false,
                },
              ],
            },
            {
              label: 'Textarea',
              name: 'textarea',
              widget: 'object',
              summary: '{{label}}',
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Placeholder',
                  name: 'placeholder',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Required',
                  name: 'required',
                  widget: 'boolean',
                  default: false,
                  required: false,
                },
              ],
            },
            {
              label: 'Checkbox',
              name: 'checkbox',
              widget: 'object',
              summary: '{{nam}}',
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Required',
                  name: 'required',
                  widget: 'boolean',
                  default: false,
                  required: false,
                },
              ],
            },
            {
              label: 'Button',
              name: 'button',
              widget: 'object',
              fields: [Button],
            },
            {
              label: 'Text',
              name: 'text',
              widget: 'object',
              fields: [
                {
                  label: 'Content',
                  name: 'content',
                  widget: 'markdown',
                  required: false,
                },
              ],
            },
            {
              label: 'Submit',
              name: 'submit',
              widget: 'object',
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string',
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default collection;
