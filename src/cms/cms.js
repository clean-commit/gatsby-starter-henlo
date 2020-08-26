import CMS from 'netlify-cms-app'
import pages from '@/cms/pages'
import posts from '@/cms/collections/posts'

window.CMS_MANUAL_INIT = true

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'git-gateway',
      branch: 'master',
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [
      pages,
      posts
    ],
  },
})