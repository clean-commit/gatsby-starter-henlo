import { init } from 'netlify-cms-app';
import pages from './collections/pages';
import posts from './collections/posts';

window.CMS_MANUAL_INIT = true;

init({
  config: {
    load_config_file: false,
    display_url: 'http://localhost:8000',
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
    collections: [pages, posts],
  },
});
