import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Image({ src, alt = '', ...props }) {
  const isRemote = typeof src === 'string';
  const image = !isRemote ? getImage(src) : [];
  return (
    <>
      {isRemote ? (
        <img src={src} alt={alt} {...props}></img>
      ) : (
        <GatsbyImage image={image} alt={alt} {...props} />
      )}
    </>
  );
}
