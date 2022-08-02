import classNames from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Text({ children, className, ...props }) {
  return (
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => (
          <a href={props.href} target='_blank' rel='noreferrer'>
            {props.children}
          </a>
        ),
      }}
      className={classNames('prose dark:prose-invert ', className)}
      {...props}>
      {children}
    </ReactMarkdown>
  );
}
