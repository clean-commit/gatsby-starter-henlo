import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@/blocks/Hero';
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
            default:
              return (
                <div className='container mx-auto'>
                  <div className='text-center'>
                    Missing Section {block.type}
                  </div>
                </div>
              );
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
      variant
      buttons {
        button {
          content
          url
          variant
        }
      }
    }
  }
`;
