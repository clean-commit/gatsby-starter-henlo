import { siteMetadata } from '../../gatsby-config';

const SEOHelper = {
  title(title) {
    return title ? `${title} ${siteMetadata.separator} ${siteMetadata.title}` : `${siteMetadata.baseTitle} ${siteMetadata.separator} ${siteMetadata.title}`;
  },
  description(description) {
    return description ? description : siteMetadata.description;
  },
  image(url) {
    if (typeof url === 'object') {
      url = url.childImageSharp.fluid.src || siteMetadata.image;
    }
    return url ? url : siteMetadata.image;
  },
};

export default SEOHelper;
