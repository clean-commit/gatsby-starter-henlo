import React from 'react';
import Link from '../../resolvers/Link';

export default function ArticleCard({ data }) {
  const { node: post } = data;
  console.log(post);
  return (
    <article>
      <h2 className='font-bold text-2xl mb-4'>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2>
      <div className='prose dark:prose-invert mb-3'>{post.excerpt}</div>
      <Link to={post.fields.slug}>
        Read more <div className='sr-only'>about {post.frontmatter.title}</div>
      </Link>
    </article>
  );
}
