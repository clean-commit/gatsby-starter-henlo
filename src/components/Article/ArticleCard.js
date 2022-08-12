import React from 'react';
import Link from '../../resolvers/Link';

export default function ArticleCard({ data }) {
  const { node: post } = data;
  return (
    <article>
      <h2 className='mb-4 text-2xl font-bold'>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2>
      <div className='prose mb-3 dark:prose-invert'>{post.excerpt}</div>
      <Link to={post.fields.slug}>
        Read more <div className='sr-only'>about {post.frontmatter.title}</div>
      </Link>
    </article>
  );
}
