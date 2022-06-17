export function PermalinkField(prefix = '') {
  return {
    label: 'Permalink',
    name: 'permalink',
    widget: 'permalink',
    required: true,
    url: process.env.GATSBY_APP_URL,
    prefix: prefix,
    hint: 'The post URL (do not include folder or file extension)',
  };
}

export default PermalinkField;
