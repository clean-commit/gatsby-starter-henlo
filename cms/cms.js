import CMS from 'netlify-cms-app';
import { UuidControl, UuidPreview } from './widgets/IdWidget';
import { PermalinkControl, PermalinkPreview } from './widgets/PermalinkWidget';

import pages from './collections/pages';
import posts from './collections/posts';
import authors from './collections/authors';
import settings from './collections/settings';
import data from '../src/settings/seo.json';
import PagePreview from '../previews/Page';

window.CMS_MANUAL_INIT = true;

const config = {
  config: {
    load_config_file: false,
    display_url: data.siteUrl,
    local_backend: true,
    backend: {
      name: 'git-gateway',
      // branch: 'next',
    },
    slug: {
      encoding: 'ascii',
      clean_accents: true,
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [pages, posts, authors, settings],
  },
};

CMS.registerPreviewStyle('../commons.css');
CMS.registerPreviewTemplate('pages', PagePreview);

CMS.registerWidget('uuid', UuidControl, UuidPreview);
CMS.registerWidget('permalink', PermalinkControl, PermalinkPreview);

CMS.init(config);
