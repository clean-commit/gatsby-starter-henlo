import React from 'react';
import Hero from '../blocks/Hero';
import PageBuilder from '../components/PageBuilder';

export default class PagePreview extends React.Component {
  render() {
    const blocks = this.props.widgetsFor('blocks');
    let blocksUpdated = [];
    let hasBlocks = blocks.size > 0;
    if (hasBlocks) {
      blocksUpdated = blocks.toJS().map((block) => block.data);
      console.log('blocks', blocksUpdated);
    }

    return (
      <div>
        {hasBlocks ? (
          <PageBuilder blocks={blocksUpdated} />
        ) : (
          <div class='py-24 text-center flex items-center justify-center'>
            <h1>Add first block to start creating your website</h1>
          </div>
        )}
      </div>
    );
  }
}
