import React from 'react';
import PageBuilder from '../../src/components/PageBuilder';

export default class PagePreview extends React.Component {
  render() {
    const blocks = this.props.widgetsFor('blocks').toJS();
    let blocksUpdated = [];
    let hasBlocks = Array.isArray(blocks);
    if (hasBlocks) {
      blocksUpdated = blocks.map((block) => block.data);
    }

    return (
      <div>
        {hasBlocks ? (
          <PageBuilder blocks={blocksUpdated} preview={true} />
        ) : (
          <div class='py-24 text-center flex items-center justify-center'>
            <h1>Add first block to start creating your website</h1>
          </div>
        )}
      </div>
    );
  }
}
