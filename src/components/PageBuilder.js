import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@/blocks/Hero';
import Demo from '@/blocks/Demo';
import RecentArticles from '../blocks/RecentArticles';

export default function PageBuilder({ blocks, preview = false }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block.type) {
            case 'hero':
              return <Hero key={i} data={block} />;
            case 'recentArticles':
              return <RecentArticles key={i} data={block} preview={preview} />;
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
      variant
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
