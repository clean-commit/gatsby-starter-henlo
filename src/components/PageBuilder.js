import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@/blocks/Hero';
import Demo from '@/blocks/Demo';

export default function PageBuilder({ blocks }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block.type) {
            case 'hero':
              return <Hero key={i} data={block} />;
            case 'demo':
              return <Demo key={i} data={block} />;
            default:
              return 'sections some?';
          }
        })}
    </>
  );
}

export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      title
      content
      version
      description
      links {
        link {
          content
          url
        }
      }
    }
  }
`;
