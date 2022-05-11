import metadata from '../../src/settings/seo.json';

export function PermalinkField(prefix = '') {
  return {
    label: 'Permalink',
    name: 'permalink',
    widget: 'permalink',
    required: true,
    url: metadata.siteUrl,
    prefix: prefix,
    hint: 'The post URL (do not include folder or file extension)',
  };
}

export default Field;
