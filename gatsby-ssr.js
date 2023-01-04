const seoData = require('./src/settings/seo.json')

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: seoData?.lang || 'en' })
}
